# <Feature name> — Review Adjustments (Round N)

> Spec: [NN-name.md](NN-name.md) · Plan: [NN-name.plan.md](NN-name.plan.md) · Summary: [NN-name.summary.md](NN-name.summary.md)
> Owner: <name> · Date: YYYY-MM-DD · Base ref: <sha> (pre-adjustment HEAD)

Record of one post-review adjustment round: the change requests raised after the feature was
implemented, how each was handled, and the result. The spec, plan, and summary are **frozen** —
this file is the only record of these changes until `/reconcile` re-syncs the spec. Keep each
entry terse and factual; every claim traces to a commit. Later skills read this file.

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

Gate + acceptance: `npm run ci` / `npm run build` outcome; the original spec's **Acceptance
criteria** re-confirmed (no regression); each new request's acceptance check confirmed; which
review skills ran (`/code-review`, `/simplify`, `/security-review`). State plainly what passed and
what is pending.

## Commits

One line per change: `<sha> — <subject>`.

- ...

## Drift — spec/plan to re-sync

The spec, plan, and summary were intentionally left unchanged and now lag the code. Run
`/reconcile <feature>` to fold these changes back into the spec. Requirement deltas the spec does
not yet reflect:

- ...
