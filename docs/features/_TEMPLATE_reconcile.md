# <Feature name> — Reconciliation

> **Artifact:** `NN_reconcile_<short-name>.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** terminal record (no lifecycle)
> **Owner:** <name> · **Date:** YYYY-MM-DD
> **Related:** [spec](NN_spec_<short-name>.md) · [plan](NN_plan_<short-name>.md) · [implement](NN_implement_<short-name>.md) · [adjust](NN_adjust_<short-name>-r1.md) · [retro](NN_retro_<short-name>.md)

Record of one reconciliation pass — re-syncing an `implemented` spec (and the affected general
docs) with the code after `/adjust` rounds left them drifted. The **Product Owner** confirms the
target state, the **Tech Lead** verifies the code reality. This pass updates the **spec and
general docs**; the per-feature history (plan, implementation record, adjustments) is preserved as
reference, not rewritten. Terse and factual; every claim traces to the code or a prior artifact.

## Sources reconciled

What was read to establish the drift: the spec, plan, implementation record, each adjustments
round, and the actual source inspected (types, repos, stores, components, API routes, rules).

- ...

## Drift found

Spec vs. code, both directions. One bullet per item — what the spec says, what the code does, and
the verdict.

- **Stale spec** (code is right, spec wrong): ...
- **Code regression** (spec is right, code wrong — flag, don't fix here): ...
- **Spec incomplete** (code does something the spec omits): ...
- **Unbuilt** (spec promised it, code lacks it): ...

## Re-sync applied

What was edited to close the drift — spec sections patched (describe current + target state, no
history) and which **general docs** were updated (README, `docs/07`, the dev guide). The plan,
implementation record, and adjustments artifacts were **not** rewritten — they stand as history.

- ...

## Still open

Suspected code regressions to investigate, unbuilt promises, and follow-ups left for a separate
step (`/verify`, `/implement`, `/security-review`). Write `None` if clean.

- ...

## Status

Spec / plan `Status` after reconcile (e.g. spec → `implemented`, plan → `done`), or why it was
left as-is.

- ...
