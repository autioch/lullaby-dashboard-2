# LaunchPad Data Architecture

## Overview

Entities may be stored in separate Firestore collections and composed in Zustand. The system supports partial hydration of entities based on reference IDs.

### Read operations flow:

```text
Firestore
    ↓
Repository Layer
    ↓
Zustand Store
    ↓
React Components
```

### Write operations flow:

```text
React
    ↓
Zustand Action
    ↓
Repository
    ↓
Firestore
    ↓
Firestore Snapshot
    ↓
Repository
    ↓
Zustand State Update
    ↓
React Re-render
```

## Architectural Principles

1. React components are responsible only for rendering UI and forwarding user actions.
2. All application state is stored in Zustand.
3. All business logic is implemented in Zustand stores.
4. All Firestore access is isolated inside repositories.
5. React components must never directly call Firestore SDK methods.
6. React components must never contain business logic.
7. Firestore realtime listeners are the single source of truth.
8. State changes should flow from Firestore → Repository → Zustand → React.
9. Write operations should update Firestore and allow Firestore snapshots to update Zustand. Avoid manually mutating Zustand state after successful writes.

## Entity Resolution Model

LaunchPad uses ID-based composition instead of embedding.

Firestore documents reference other entities using string IDs. The application layer is responsible for resolving references into hydrated objects.

Example:

Mission.groups[].objectiveIds → Objective.id[]

## Layer Responsibilities

### Firestore Layer

Responsible for:

- Data persistence
- Realtime synchronization
- Security Rules enforcement
- Offline cache

Must not contain:

- UI logic
- Application state
- Business rules

---

### Repository Layer

Repositories encapsulate all Firestore communication.

Repositories:

- Read collections/documents
- Create realtime subscriptions
- Execute CRUD operations
- Map Firestore data to application models

Repositories must not:

- Store application state
- Depend on React
- Depend on Zustand

---

### Zustand Layer

Zustand is the application's state and business logic layer. Zustand acts as an in-memory normalized cache across multiple Firestore collections.

Stores are responsible for:

- Holding application state
- Business rules
- Derived state
- User actions
- Orchestrating repositories

Stores must not:

- Use Firestore SDK directly
- Know Firestore collection names
- Construct Firestore queries

---

### React Layer

React components are presentation-only.

Components may:

- Read Zustand state
- Call Zustand actions
- Handle local UI state
- Render UI

Components must not:

- Call Firestore SDK
- Contain business logic
- Manage application state
- Execute Firestore queries

## State Ownership

| Type                 | Owner             |
| -------------------- | ----------------- |
| Persistent data      | Firestore         |
| Application state    | Zustand           |
| Business logic       | Zustand           |
| Data access          | Repository        |
| Rendering            | React             |
| Temporary UI state   | React             |
| Mission structure    | Firestore         |
| Objective library    | Firestore         |
| Entity relationships | Mission documents |
| Entity resolution    | Repository layer  |
| Normalized cache     | Zustand           |

Examples of temporary UI state:

- Modal open/closed
- Selected tab
- Hover state
- Input focus

Examples of application state:

- Missions
- Rewards
- Family members
- User profile
- Permissions

---

## Folder Structure

```text
src/
├─ database/                 # repositories + db.ts (Firestore client access)
│  ├─ db.ts
│  ├─ missionRepository.ts
│  ├─ objectiveGroupRepository.ts
│  └─ objectiveRepository.ts
│
├─ stores/                   # Zustand stores (use<Name>Store.ts)
│  ├─ useMissionStore.ts
│  ├─ useControlsStore.ts
│  └─ ...
│
├─ components/
│  └─ ...
│
└─ pages/
   └─ api/                   # server routes (firebase-admin)
```

> The repository layer lives in `src/database/` and stores are named `use<Name>Store.ts`.
> Some entity names above (rewards, family) are illustrative of the model, not all present yet.

---

## Design Goals

- Realtime by default
- Single source of truth
- Minimal React logic
- Highly testable
- Firestore isolated behind repositories
- Clear separation of concerns
- Easy future migration to another backend
- Predictable state flow
- Simple mental model for AI coding agents

## Hydration Strategy

Entities are loaded in two phases:

### Phase 1 — Primary data

Load user missions (realtime):

missions where ownerId == currentUserId

### Phase 2 — Reference resolution

Extract all objectiveIds from missions and groups.

Fetch objectives in batches:

- chunk IDs (max 30 per Firestore "in" query)
- merge results
- store in Zustand

### Phase 3 — Optional caching

Keep hydrated objectives in Zustand for reuse across missions and sessions.

## Firestore Query Constraints

- "in" queries are limited to 30 IDs per request
- No joins exist
- Objective hydration must always be batched
- Do not attempt client-side full objective loading at scale
