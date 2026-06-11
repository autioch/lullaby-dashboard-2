# Docs index

Product and architecture context for LaunchPad. Agent coding rules live in
[`CLAUDE.md`](../CLAUDE.md) and [`development.md`](development.md), not here.

| File                                               | What it's for                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [01_vision.md](01_vision.md)                       | The what & why of the product                                                                         |
| [02_marketing.md](02_marketing.md)                 | Positioning & tone                                                                                    |
| [03_user-scenarios.md](03_user-scenarios.md)       | Concrete usage flows                                                                                  |
| [04_design-principles.md](04_design-principles.md) | Shared First, TV First, and other guiding principles                                                  |
| [05_design.md](05_design.md)                       | Dashboard / UI specification                                                                          |
| [06_roadmap.md](06_roadmap.md)                     | MVP scope & what's next                                                                               |
| [07_data-architecture.md](07_data-architecture.md) | Firestore → repository → store → component (the authority on layering)                                |
| [features/](features/)                             | Per-feature specs — see [`_TEMPLATE.md`](features/_TEMPLATE.md) and [`README.md`](features/README.md) |

## Reading order by task

- **Feature planning** — `01`, `04`, `05`, `07`, plus `03` and `06` for context; write the spec from `features/_TEMPLATE.md`.
- **UI / UX / design** — `04`, `05`, then `01` and `03`.
- **Coding / bugfixing** — `07` (data flow); the rest of the dev detail is in the development guide.
- **Maintenance** — see the doc-sync map in the development guide for which docs to update with a change.
