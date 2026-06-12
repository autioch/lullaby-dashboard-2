# /steer — backlog grooming & next-pick command — Spike

> **Artifact:** `docs-spikes/04_spike_steer-command.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** _(not a feature — execute as a docs/tooling `/tweak`; see Next step)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

The pipeline (`(/spike) → /spec → /plan → /implement → /retro`) assumes the idea is already chosen
— **picking what to build next is ad-hoc.** Is a new top-of-loop "what delivers the most value
next" command worth adding, and what shape avoids (a) duplicating `/retro`'s "decide next" tail and
(b) cargo-culting solo-irrelevant sprint ceremony?

## Idea as posed

> I need a command which will take a role of a product owner. It should look at the roadmap
> document, maybe some artifacts from previous sessions? It should list the next possible features,
> chores, refactors to implement. Maybe it should compliment with the retro artifact? I already have
> feature workflow, but now I need another step in the development cycle to decide what will provide
> the most value next. Let's say that this command will list what's in the product map, suggest top
> picks, loop in user's feedback, accept additions to the list, etc. I'm thinking this might be
> backlog refinement? Sprint planning and starting?

## Findings

### Product & common sense

The gap is real. [`docs/06_roadmap.md`](../docs/06_roadmap.md) holds ~25 open items across five
"Future" buckets (Dashboard design, Tooling, Features & UX, Product & onboarding, Reliability,
Process & pipeline) with **no priority ordering** — a flat checklist. `/retro` emits "Suggested next
actions" + a "Decision" stub (e.g. `01_retro_content-editing.md`) that lands nowhere structured.
Nothing connects "everything queued" → "the one thing to do now." A prioritize-and-select step at
the top of the loop fills that.

Two framings in the posed idea fail the vet:

- **"Sprint planning / starting" is the wrong frame.** This is a private, single-developer project
  (CLAUDE.md). Sprints, velocity, time-boxes, and batch commitment are team-coordination tools;
  importing them here is ceremony with no payer. The valuable core is **backlog grooming + single
  next-pick**, not an iteration ritual. → reshaped to **pick one item per run**.
- **`/retro` overlap is real but resolvable.** `/retro` already "suggests next + decides," but it is
  **backward-looking and scoped to one finished feature**, and only fires after an iteration. You
  also need a next-pick **cold** (e.g. choosing a chore with no retro preceding). So the two are
  distinct: `/retro`'s next-actions become **inputs** to the new command, not a duplicate. → keep
  both; the new command is the forward-looking, whole-backlog selector.

Comparable: Kanban "pull the next item" + lightweight backlog grooming — the solo-appropriate
subset of the Scrum ceremonies the owner named.

### UX standards

The "user" is the agent executing the command plus the owner in the loop — **no app/TV surface**.
The interaction standard that matters: focused `AskUserQuestion` (multiple-choice, recommended
first), accept owner additions mid-session, present top picks **with rationale** (value vs effort,
not a bare list), and **converge on one pick before recording** — mirroring the shared "converge
before recording" rule the other eliciting commands follow.

### Technical viability

Trivially viable — a markdown command prompt under `.claude/commands/`, **no app stack, no Chrome 87
surface** (same as spike 03). Two real constraints, both process-mechanical:

1. **Artifact-convention exception.** Every pipeline command today emits **exactly one** journal
   artifact (`feature-workflow.md` → Artifacts & roles). `/steer` deliberately emits **none** — it
   maintains a **durable doc** (`docs/06_roadmap.md`) instead. The build must carve this out
   explicitly in `feature-workflow.md` so the convention isn't "corrected" back into a rotting
   per-session snapshot. (Owner's call, confirmed: keep a high-level **Decision log** in the roadmap
   — JIRA-epic style — not a journal artifact.)
2. **Roadmap restructure.** The roadmap is today a flat, unordered checklist. To "suggest top picks"
   the command needs a lightweight priority signal and a place to log decisions — so the roadmap doc
   itself gains (a) priority ordering/annotation and (b) a `Decision log` section. Keep both
   lightweight; no estimation engine.

`allowed-tools` for the new command: read/search (`Read`/`Glob`/`Grep`), `Edit`/`Write` (roadmap),
`AskUserQuestion`, and `Skill` to hand off / `/ship` the roadmap commit. No npm; no git beyond
`/ship`.

## Options & trade-offs

- **Option A — Fold into `/retro`.** Fewer commands, but couples "what's next" to "a feature just
  finished" — can't pick work cold, and `/retro` does two jobs. **Rejected** (owner).
- **Option B — Distinct `/steer`; roadmap is the living backlog + Decision log; pick one; no journal
  artifact. _(recommended, owner-chosen)_** Top-of-loop command. Reads roadmap + open `/retro`
  next-actions + un-graduated spikes + owner additions; PO-lens ranks value-vs-effort; converges;
  selects one; updates roadmap (reprioritize, add items, append a dated one-line Decision-log entry);
  hands off to `/spike`/`/spec`/`/tweak`. Lean, no rotting snapshots, history lives with the backlog.
- **Option C — Distinct command, but per-session journal artifacts + a committed "sprint" batch.**
  Most Scrum-faithful; **rejected** — ceremony with no solo payer, and accumulates rotting snapshots.

## Verdict & recommendation

**`viable-with-changes`.** Build it as **Option B**. Reshaped from the posed idea on three points:
(1) "sprint planning" → **lean groom-and-select, one pick per run**; (2) output is **the roadmap as
a living prioritized backlog + a Decision log**, not a new journal artifact type; (3) it
**complements, not absorbs, `/retro`** — retro's next-actions are inputs. Named **`/steer`** (owner
choice) — product steering, the forward-looking value call.

Pipeline becomes a loop:
`/steer → (/spike) → /spec → /plan → /implement → /retro → /steer`.

## Suggested scope

**Keep in scope (for the build):**

- New `.claude/commands/steer.md` — PO role; gather candidates (roadmap + open `/retro`
  next-actions/Decision + un-graduated spikes + owner additions); dedupe vs shipped; rank
  value-vs-effort with rationale; `AskUserQuestion` loop (accept additions, reprioritize); converge
  on **one** pick; update roadmap; report pick + recommend next step (`/spike` if unproven, `/spec`
  if a real feature, `/tweak` if small); commit via `/ship`.
- `docs/06_roadmap.md` restructure — lightweight priority ordering/annotation + a new **Decision
  log** section (one dated line per run: picked / added / reprioritized).
- Doc-sync: `feature-workflow.md` (pipeline diagram, the bullet list, **and** the Artifacts & roles
  table with the explicit no-journal-artifact carve-out), `CLAUDE.md` Features section,
  `docs/development.md` command table.

**Cut from scope:** sprint batches, velocity, time-boxes, estimation/scoring engines, per-session
journal artifacts. **Reshape:** "backlog refinement / sprint planning" → groom-and-select-one.

## Open questions & risks

- [ ] **Priority scheme** — settle the lightweight signal in the build: in-section ordering vs a
      simple High/Med/Low tag. Don't over-engineer; no estimates.
- [ ] **Decision-log growth** — it's a log, not a journal; pick a format (one dated line) and a
      growth cap so the roadmap doesn't bloat.
- [ ] **Ranking is judgment, not a formula** — the mechanism is PO lens + owner convergence; don't
      build a fake scoring algorithm.
- [ ] **Protect the artifact-convention exception** — `feature-workflow.md` must state `/steer` is
      the one pipeline command writing to a durable doc instead of a journal artifact, or a future
      cleanup will "fix" it back.
- [ ] **`allowed-tools`** — grant exactly read/search + roadmap edit + `AskUserQuestion` + `Skill`;
      no npm/git beyond `/ship`.

## Next step

**Not a feature — no `/spec`** (every product decision was made during this spike). Execute as a
docs/tooling **`/tweak`** (reuse short-name `steer-command`): new command file + roadmap restructure

- doc-sync. It spans several durable docs, so it may run slightly large for one tweak — if it does,
  **split the pass** (command file, then roadmap, then doc-sync) rather than escalating to `/spec`
  (precedent: spike 03 `commands-cleanup`).

## References

- Backlog/source it grooms: [`docs/06_roadmap.md`](../docs/06_roadmap.md).
- Pipeline it slots into: [`docs/feature-workflow.md`](../docs/feature-workflow.md) (Pipeline ·
  Artifacts & roles · Shared rules → converge before recording).
- `/retro` overlap evidence: [`docs-journal/01_retro_content-editing.md`](../docs-journal/01_retro_content-editing.md)
  (Suggested next actions · Decision stub).
- Sibling precedent for a "process change, build as `/tweak`, not a feature" spike:
  [`docs-spikes/03_spike_commands-cleanup.md`](03_spike_commands-cleanup.md).
