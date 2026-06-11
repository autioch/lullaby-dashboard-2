# Data Architecture

The authority on layering. Entities live in separate Firestore collections and are composed in
Zustand by reference ID (partial hydration). Realtime listeners are the **single source of truth**.

## Layering

```text
Read:   Firestore → Repository → Zustand store → React
Write:  React → Zustand action → Repository → Firestore → onSnapshot → Repository → Zustand → React
```

| Layer                                | Does                                                                                                                          | Must not                                                         |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Firestore** (`src/database/db.ts`) | Persistence, realtime sync, security rules, offline cache                                                                     | Hold UI logic, state, or business rules                          |
| **Repository** (`src/database/`)     | All Firestore access: reads, subscriptions, CRUD, mapping docs → models                                                       | Hold state; depend on React or Zustand                           |
| **Zustand store** (`src/stores/`)    | State, business logic, derived state, user actions, orchestrating repositories; in-memory normalized cache across collections | Touch the Firestore SDK, know collection names, or build queries |
| **React** (`src/components/`)        | Read store state, call actions, local UI state, render                                                                        | Call Firestore, hold business logic or app state, run queries    |

Core rules:

- Components are presentation-only; **all** business logic lives in stores; **all** Firestore
  access is isolated in repositories.
- State flows Firestore → Repository → Zustand → React.
- **Never manually mutate Zustand after a write** — let the `onSnapshot` subscription flow the
  change back in.

## Content writes (admin-SDK route path)

Client SDK writes stay denied (`tools/firestore.rules` is `write: false`). Content edits
(missions, objective groups, objectives) post to admin-SDK API routes under
`src/pages/api/content/`:

```text
client → edit repository → API route → firebase-admin → Firestore → onSnapshot → useMissionStore → re-render
```

Each route is guarded by the session cookie (`requireSession`) and performs referential cleanup in
a batched admin write (deleting a group strips its id from every mission; deleting an objective
strips it from every group). The admin SDK bypasses rules, so no rules change is needed.

## Entity resolution

ID-based composition, not embedding. Documents reference each other by string ID; the application
layer resolves references into hydrated objects.

```text
Mission.objectiveGroupIds → ObjectiveGroup.id
ObjectiveGroup.objectiveIds → Objective.id
Objective.colorId          → Color.id
```

## State ownership

| State                                                                   | Owner      |
| ----------------------------------------------------------------------- | ---------- |
| Persistent data, mission structure, objective library                   | Firestore  |
| Application state + business logic (missions, normalized cache)         | Zustand    |
| Data access & entity resolution                                         | Repository |
| Rendering & temporary UI state (modal open, selected tab, hover, focus) | React      |

## Hydration

1. **Primary (realtime)** — missions where `ownerId == currentUserId`.
2. **Reference resolution** — extract `objectiveIds` from missions/groups, fetch in batches
   (chunk by 30, see constraints), merge, store in Zustand.
3. **Caching** — keep hydrated objectives in Zustand for reuse across missions and sessions.

## Firestore query constraints

- `in` queries are capped at **30 IDs** per request — objective hydration must always be batched.
- No joins. Don't attempt client-side full objective loading at scale.

## Folder structure

```text
src/
├─ database/   # repositories + db.ts: missionRepository, objectiveGroupRepository, objectiveRepository, colorRepository
├─ stores/     # use<Name>Store.ts: useMissionStore, useControlsStore, useEditStore, …
├─ components/
└─ pages/api/  # server routes (firebase-admin)
```

## Design goals

Realtime by default · single source of truth · minimal React logic · Firestore isolated behind
repositories · predictable state flow · easy future migration to another backend.
