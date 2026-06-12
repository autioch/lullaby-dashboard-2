# <Feature name> — Adjustments (Round N)

> **Artifact:** `NN_adjust_<short-name>-rN.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** <name> · **Date:** YYYY-MM-DD · **Base ref:** <sha> (pre-adjustment HEAD)
> **Related:** [spec](NN_spec_<short-name>.md) · [plan](NN_plan_<short-name>.md) · [implement](NN_implement_<short-name>.md) · [retro](NN_retro_<short-name>.md)

Record of one post-review adjustment round — a **full-team** effort: the **Product Owner** raises
requirement changes, the **Tech Lead** the refactors, Design the visual tweaks, and the **Senior
Fullstack Developer** implements them. The spec, plan, and implementation record are **frozen** —
this file is the only record of these changes. Keep each entry terse and factual; every claim
traces to a commit. Later skills read this file.

## Change requests

One block per request. Classification is one of: **requirement change** (add / remove / modify) ·
**refactor** · **design change**.

### CR-1 — <short title>

- **Source:** Product owner | Development | Design — <name / role>
- **Request:** <what was asked>
- **Why:** <rationale — the problem or goal behind the request>
- **Classification:** requirement change | refactor | design change
- **How handled:** <what was done, path-level — files / layers touched, or the approach if
  deferred/rejected>
- **Result:** Implemented | Deferred | Rejected — <verification that it works, or the reason it
  was not done>

### CR-2 — <short title>

- ...

## Verification

Record per [qa.md § Recording QA](../docs/qa.md#recording-qa): which levels ran (`L0`–`L4`) and
their result; the original spec's **Acceptance criteria** re-confirmed (no regression); each new
request's acceptance check confirmed. State plainly what passed and what is pending or needs
real-TV confirmation (`L5`).

## Commits

One line per change: `<sha> — <subject>`.

- ...
