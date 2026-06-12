# Feature Workflow

The feature pipeline — the chain of slash commands that turns an idea into shipped, recorded
code. Every pipeline command (`/steer`, `/spike`, `/spec`, `/plan`, `/implement`, `/adjust`,
`/retro`, and the lightweight `/tweak`) **reads this file first**, then does its own job. Shared rules and the
artifact convention live here; command-specific behavior lives in each command file. For how this
fits the wider dev workflow, see **"Adding a feature"** in [development.md](development.md).

## Pipeline

```text
/steer → (/spike) → /spec  →  /plan  →  /implement   pick → de-risk → contract → plan → code → record
                                ├─ review:  /verify · /code-review · /simplify · /security-review
                                └─ /adjust  apply post-review changes as code (spec/plan/record stay frozen)
/retro       product-owner review of the iteration; its next-actions feed back into /steer
```

- **`/steer`** — _(top of loop)_ grooms the roadmap backlog and picks the single highest-value next
  item; no code, **no journal artifact** (it updates `docs/06_roadmap.md`). Routes the pick to
  `/spike`, `/spec`, or `/tweak`.
- **`/spike`** — _(optional)_ investigates an idea and records a verdict; no code, no spec.
- **`/spec`** — elicits and writes the spec (the contract); reads a prior spike if one exists.
- **`/plan`** — turns an agreed spec into an ordered, independently committable plan.
- **`/implement`** — executes the plan step by step (commit + validate each), runs the review
  gate, writes the implementation record.
- **`/adjust`** — applies post-review change requests as code; spec, plan, and record stay
  **frozen** and drift.
- **`/retro`** — reviews the whole iteration and writes the wrap-up; its next-actions feed `/steer`.
- **`/tweak`** — the lightweight lane: one command runs the Q&A, plan, and code for a small,
  well-bounded change and records a single terminal artifact. Skips the spec/plan/implement
  documents. Routes to `/spec` when a "tweak" turns out to be a real feature.

## Artifacts & roles

Each command forces the role(s) that own its step and emits **exactly one** artifact in
`docs-journal/`, named **`NN_<command>_<short-name>.md`**, copied from a matching
`_TEMPLATE_<command>.md`. One feature per zero-padded `NN`; one kebab-case `<short-name>` reused
by every artifact for that feature. **Each template is the single source for its artifact's
sections and how to write them** (terse, factual, every claim tracing to a commit) — commands copy
and fill it; they don't restate its structure or its writing guidance.

**`/steer` is the exception** — it writes **no** journal artifact; its output is the durable backlog
`docs/06_roadmap.md` (priority order + a Decision-log entry), since a per-run snapshot would only
rot. It is the one pipeline command that maintains a durable doc instead of emitting a record.

| Command      | Artifact                                                     | Role(s)                                               | Status                                     |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------ |
| `/steer`     | `docs/06_roadmap.md` (durable doc — **no journal artifact**) | Product Owner (lead) · Solution Architect / Tech Lead | terminal record (no lifecycle)             |
| `/spike`     | `docs-spikes/NN_spike_<short-name>.md`                       | Solution Architect / Tech Lead (lead) · Product Owner | terminal record + **Verdict**              |
| `/spec`      | `NN_spec_<short-name>.md`                                    | Product Owner                                         | `draft` → `agreed` → `implemented`         |
| `/plan`      | `NN_plan_<short-name>.md`                                    | Product Owner · Solution Architect / Tech Lead        | `draft` → `ready` → `in-progress` → `done` |
| `/implement` | `NN_implement_<short-name>.md`                               | Senior Fullstack Developer                            | terminal record (no lifecycle)             |
| `/adjust`    | `NN_adjust_<short-name>-rN.md` (×N)                          | the full team                                         | terminal record (no lifecycle)             |
| `/retro`     | `NN_retro_<short-name>.md`                                   | Product Owner (lead), all roles weigh in              | terminal record (no lifecycle)             |
| `/tweak`     | `NN_tweak_<short-name>.md`                                   | Product Owner · Tech Lead · Senior Developer          | terminal record (no lifecycle)             |

**Spikes are the one exception to the `NN` rule.** They live in the sibling `docs-spikes/` folder
(not `docs-journal/`) with their **own local `NN` sequence**, kept separate because many never
become features and must not burn feature numbers. When a spike graduates, `/spec` allocates the
next **feature** `NN` and **reuses the spike's `<short-name>`**, keeping the thread traceable.

Keep the spec and plan current while live (update the spec when the build deviates, the plan when
the approach changes). The implementation record, adjustments, and retro are written once and
stand as history. `/adjust` leaves spec, plan, and record **frozen** — the feature history is
preserved, not rewritten.

## Grounding reads

Read what's relevant before acting; don't re-explore the whole repo.

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor, environment (always loaded).
- [development.md](development.md) — architecture, source layout, conventions, command table.
- [qa.md](qa.md) — how to test a change: levels, test-by-scope, masking traps, regression list (for `/implement`, `/adjust`, `/tweak`, `/verify`).
- [07_data-architecture.md](07_data-architecture.md) — the layering authority.
- `/spec` product/design context: [01_vision.md](01_vision.md), [04_design-principles.md](04_design-principles.md), [05_design.md](05_design.md). Also read a prior spike for the idea, if one exists in `docs-spikes/` — it carries the de-risked approach and verdict.
- The actual source the work touches — record types in `src/database/*`, the relevant stores / repos / components.

## Shared rules

- **House style:** short, direct, precise. Specs and plans are contracts — unambiguous, no filler.
- **Layering:** Firestore → repository → store → component. Repositories are the only Firestore
  callers; logic lives in stores, not components; never mutate Zustand after a write (let
  `onSnapshot` flow it back). See [07_data-architecture.md](07_data-architecture.md).
- **Coding conventions** (`/implement`, `/adjust`): BEM `c-` CSS imported atop its `.tsx`; the
  `@/*` alias; a component's `translations.ts` registered in `src/i18n/translations.ts`. Mirror
  the dev guide's **"Copy from"** table rather than hand-rolling.
- **TV-first + Chrome 87 floor:** large, high-contrast, D-pad-operable UI; no client JS/CSS newer
  than Chrome 87 (no `structuredClone` / `Array.prototype.at` / top-level await). Server / API
  code is off-floor.
- **Specs state current + target state, not history** — the git log carries the change history.
- **Don't invent decisions only the user can make** — ask (multiple-choice, recommended first),
  then record the resolution back into the spec / plan.
- **Converge before recording.** Commands that elicit then write an artifact (`/steer`, `/spike`,
  `/spec`, `/plan`, `/retro`) play the shaped result back to the user and iterate until you both
  agree on the final shape **before** writing — especially when it diverged from the opening idea. Record the
  agreed shape, not a unilateral first draft.
- **Don't guess a stack API** — before using an Astro 6 / React 19 / Zustand 5 / Firebase (client or
  admin) API you're unsure of at this repo's version, look it up via **context7**
  (`resolve-library-id` → `query-docs`); match the current API, not memory.
- **Don't duplicate** code, docs, or spec content that already exists — extend and reference.
- **Durable docs sync; feature artifacts stay frozen.** Two doc classes, two rules. _Durable
  docs_ (CLAUDE.md, README, every `docs/*.md`, the command files) describe current
  state — the commit that changes code or config also updates the durable docs it affects, per
  the **doc-sync map** in the [dev guide](development.md#keeping-docs-in-sync). _Feature artifacts_
  (`docs-journal/NN_*`) are frozen point-in-time records — never rewritten to chase the code;
  they preserve the drift. Any durable-doc drift the per-commit passes miss is reconciled
  repo-wide, once, in `/retro`.
- **Tests are part of the change.** Like docs: when a step adds or alters **logic** (store action,
  server/API helper, util, pure derivation), its co-located unit test ships in the **same commit** —
  judgment, not a coverage percentage, and not presentational React / Firebase glue / config. Scope
  and exemptions in [qa.md](qa.md#tests-are-part-of-the-change).

## Validation & review

**[qa.md](qa.md) is the testing source of truth** — the testing levels `L0`–`L5` (gate → build →
TV-UA behavior drive → review → dead-code → real-hardware), the **test-by-scope** table, the masking
traps, and the user-story regression checklist. Read it before verifying; commands and templates
reference its levels rather than restate them.

Pipeline-specific notes on top of qa.md:

- **Code-writing commands** (`/implement`, `/adjust`, `/tweak`) run the full chain through the `L4`
  dead-code pass; **read-only commands** (`/spec`, `/plan`, `/retro`) only need the `L0` gate.
- **`L4` (`npm run knip`) is deliberately not in the pre-push gate** — it's a per-feature cleanup,
  not a per-commit one, so it lives in the code-writing commands' final check, not the hooks.

## Committing

**`/ship`** is the single, canonical commit+push action and the **required** path for every commit —
every pipeline command delegates here, as does any ad-hoc "stage everything and push." Never
hand-roll `git add`/`commit`/`push` for a real commit.

A step stages its own files (`git add <paths>`) for a per-step commit, then runs `/ship`; `/ship`
commits the **already-staged** set (else `git add -A`) with a Conventional Commits subject, a what &
why body, and the `Co-Authored-By` trailer, then pushes. The husky hooks are the gate (pre-commit
`lint-staged`, pre-push `npm run ci`) and run automatically — never `--no-verify`. `/ship` keeps the
commit mechanics in one place; it's a git utility, not a pipeline stage, and writes no artifact.
