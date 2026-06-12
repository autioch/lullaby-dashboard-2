---
description: Groom the roadmap backlog as product owner and pick the single highest-value next item
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(git log:*), Bash(git diff:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Skill
---

Sit at the **top of the pipeline loop**: survey everything queued, decide **what delivers the most
value next**, and groom the backlog while you're there. Reads the roadmap plus the open threads from
prior sessions, ranks candidates with the owner, **picks one** item, and hands it off to the right
next command. **Do not write app code, and do not write a journal artifact** — `/steer` maintains a
durable doc (`docs/06_roadmap.md`) instead (the one pipeline command that does; see
feature-workflow.md → Artifacts & roles).

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

Optional focus hint (a bucket, theme, or empty for the whole backlog): `$ARGUMENTS`

## Role

Act as the **Product Owner** — you own value, scope, and priority. The **Solution Architect / Tech
Lead** weighs in on effort, risk, and dependencies so a "top pick" is value _and_ feasibility, not
just appeal. Keep it MVP-first. Never decide the pick alone — converge with the owner.

## Steps

1. **Ground yourself.** Read [`docs/06_roadmap.md`](../../docs/06_roadmap.md) — the living backlog.
   Don't re-explore the whole repo.

2. **Reconcile done-state, then gather candidates.** First, mark `[x]` any open roadmap item whose
   work has since shipped — reconcile against `docs-journal/` (a terminal artifact for the item
   means it's done). `/steer` is the **single writer** of the roadmap, so this is where done-marking
   happens; no other command checks the box. Then gather the open candidates:
   - **Roadmap** — every open (`[ ]`) item across the buckets.
   - **Open `/retro` next-actions** — the _Suggested next actions_ / _Decision_ of any
     `docs-journal/NN_retro_*.md` not yet acted on.
   - **Un-graduated spikes** — `docs-spikes/NN_spike_*.md` with a proceed verdict
     (`viable` / `viable-with-changes`) whose `Graduated to:` is still empty.
   - **Owner additions** — anything raised in this session (step 4).

   If `$ARGUMENTS` names a bucket or theme, scope the pool to it.

3. **Rank — value vs effort, with rationale.** As PO + Tech Lead, order the candidates by value
   against effort / risk / dependencies. Surface a short **top picks** shortlist (≈3), each with a
   one-line why — not a bare list. Ranking is judgment, not a formula; no scoring engine, no
   estimates.

4. **Loop in the owner via `AskUserQuestion`** (recommended option first). Play back the shortlist,
   take their steer, **accept new items** (fold them into the roadmap), and re-rank until the
   priority order reflects their call.

5. **Converge on one.** Settle on the **single** highest-value next item. (The shared _Converge
   before recording_ rule — agree before writing.)

6. **Update the roadmap (`docs/06_roadmap.md`).** Apply the done-marks from step 2, reorder items so
   each bucket is priority-ordered (top = next), and add any new candidates in priority position.
   Ordering is the priority signal; keep it lightweight — no Decision log, no estimates (the picked
   item's history lands in `docs-journal/` once it ships). Stage it (`git add`) and run `/ship` (own
   commit).

7. **Hand off.** Recommend the next command for the pick: **`/spike`** if it's unproven, **`/spec`**
   if it's a real feature, **`/tweak`** if it's small and well-bounded. `/steer` stops here — it
   never specs or builds.

8. **Inform** the owner in one line: the picked item and the recommended next command. No summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md).
- **No journal artifact.** `/steer`'s output is the updated `docs/06_roadmap.md` (done-marks +
  backlog order) — it is the one pipeline command that maintains a durable doc instead of emitting a
  `docs-journal/NN_*` record. Don't create one.
- **No app code, no spec/plan content.** `/steer` selects and grooms; `/spike` · `/spec` · `/plan`
  own the rest.
- **Pick one.** One run → one next item. No batches, no sprints, no time-boxes — single-developer
  project, so iteration ceremony has no payer.
- **Don't decide for the owner.** Suggest the ranking; the pick and the priorities are theirs — ask,
  then record.
