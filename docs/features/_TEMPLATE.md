# <Feature name>

> Status: `draft` | `agreed` | `implemented`
> Owner: <name> · Created: YYYY-MM-DD · Last updated: YYYY-MM-DD

## Problem / motivation

What gap or pain does this address? Why now? One short paragraph.

## User story

As a **<role: parent / child / household>**, I want **<capability>** so that **<outcome>**.

## Behavior

The concrete, agreed behavior. Bullet the user-visible flow step by step. Be specific
enough that implementation is unambiguous — this is the contract.

- ...

## Scope

**In scope**

- ...

**Out of scope** (explicitly not doing now)

- ...

## Impact on the codebase

Map the change onto the layered architecture (Firestore → repository → store → component).
Leave a layer blank if untouched.

- **Data model / Firestore** (`src/database/*` record types, collections):
- **Repository** (`src/database/`):
- **Zustand store** (`src/stores/`):
- **Components** (`src/components/<Name>/`):
- **API routes** (`src/pages/api/`, admin SDK):

## UI & TV constraints

- Layout / where it appears:
- TV-first checks: large type, high contrast, readable at 3–5 m, large targets, minimal clutter.
- Chrome 87 compatibility concerns (avoid newer JS/CSS):

## i18n

Strings to add (component `translations.ts` or `src/i18n/translations.ts`). Languages: <list>.

## Acceptance criteria

Checklist that defines "done". Each item should be verifiable.

- [ ] ...

## Open questions

Anything still unresolved. Resolve before moving status to `agreed`.

- [ ] ...
