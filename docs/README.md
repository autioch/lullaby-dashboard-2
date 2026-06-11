# Docs index

One file per domain of the product lifecycle. Each is referred to when its domain is in play.

| File                                               | Domain                                                                |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| [01_vision.md](01_vision.md)                       | Product vision — the what & why                                       |
| [02_marketing.md](02_marketing.md)                 | Positioning & tone                                                    |
| [03_user-scenarios.md](03_user-scenarios.md)       | Concrete usage flows                                                  |
| [04_design-principles.md](04_design-principles.md) | Guiding principles (Shared First, TV First, …)                        |
| [05_design.md](05_design.md)                       | Dashboard / UI specification                                          |
| [06_roadmap.md](06_roadmap.md)                     | MVP scope & what's next                                               |
| [07_data-architecture.md](07_data-architecture.md) | Firestore → repository → store → component (layering authority)       |
| [development.md](development.md)                   | Development rules — source layout, conventions, commands, doc-sync    |
| [feature-workflow.md](feature-workflow.md)         | Feature pipeline — `/spec` → `/plan` → `/implement`, roles, artifacts |
| [features/](features/)                             | Templates & per-feature artifacts only (no docs)                      |

## Reading order by task

- **Feature planning** — `01`, `04`, `05`, `07`, plus `03` and `06` for context; then `feature-workflow.md`.
- **UI / UX / design** — `04`, `05`, then `01` and `03`.
- **Coding / bugfixing** — `07` (data flow) and `development.md`.
- **Maintenance** — the doc-sync map in `development.md` says which docs to update with a change.
