# Feature Workflow

The feature pipeline — the chain of slash commands that turns an idea into shipped, recorded
code. Every pipeline command (`/spec`, `/plan`, `/implement`, `/adjust`, `/reconcile`, `/retro`,
and the lightweight `/tweak`) **reads this file first**, then does its own job. Shared rules and
the artifact convention live here; command-specific behavior lives in each command file. For how
this fits the wider dev workflow, see **"Adding a feature"** in [development.md](development.md).

## Pipeline

```text
/spec  →  /plan  →  /implement        idea → contract → plan → code → record
                       ├─ review:  /verify · /code-review · /simplify · /security-review
                       └─ /adjust  apply post-review changes as code (spec/plan/record stay frozen)
/reconcile   re-sync an implemented spec with drifted code
/retro       product-owner review of the iteration; decide what's next

/tweak       lightweight lane: spec + plan + implement in one pass, one artifact — for changes
             too small for the full pipeline (escalates to /spec if they grow)
```

- **`/spec`** — elicits and writes the spec (the contract).
- **`/plan`** — turns an agreed spec into an ordered, independently committable plan.
- **`/implement`** — executes the plan step by step (commit + validate each), runs the review
  gate, writes the implementation record.
- **`/adjust`** — applies post-review change requests as code; spec, plan, and record stay
  **frozen** and drift.
- **`/reconcile`** — re-syncs a drifted `implemented` spec with the code.
- **`/retro`** — reviews the whole iteration and writes the wrap-up.
- **`/tweak`** — the lightweight lane: one command runs the Q&A, plan, and code for a small,
  well-bounded change and records a single terminal artifact. Skips the spec/plan/implement
  documents. Routes to `/spec` when a "tweak" turns out to be a real feature.

## Artifacts & roles

Each command forces the role(s) that own its step and emits **exactly one** artifact in
`docs/features/`, named **`NN_<command>_<short-name>.md`**, copied from a matching
`_TEMPLATE_<command>.md`. One feature per zero-padded `NN`; one kebab-case `<short-name>` reused
by every artifact for that feature. **Each template is the single source for its artifact's
sections** — commands copy and fill it; they don't restate its structure.

| Command      | Artifact                            | Role(s)                                        | Status                                     |
| ------------ | ----------------------------------- | ---------------------------------------------- | ------------------------------------------ |
| `/spec`      | `NN_spec_<short-name>.md`           | Product Owner                                  | `draft` → `agreed` → `implemented`         |
| `/plan`      | `NN_plan_<short-name>.md`           | Product Owner · Solution Architect / Tech Lead | `draft` → `ready` → `in-progress` → `done` |
| `/implement` | `NN_implement_<short-name>.md`      | Senior Fullstack Developer                     | terminal record (no lifecycle)             |
| `/adjust`    | `NN_adjust_<short-name>-rN.md` (×N) | the full team                                  | terminal record (no lifecycle)             |
| `/reconcile` | `NN_reconcile_<short-name>.md`      | Product Owner · Solution Architect / Tech Lead | terminal record (no lifecycle)             |
| `/retro`     | `NN_retro_<short-name>.md`          | Product Owner (lead), all roles weigh in       | terminal record (no lifecycle)             |
| `/tweak`     | `NN_tweak_<short-name>.md`          | Product Owner · Tech Lead · Senior Developer   | terminal record (no lifecycle)             |

Keep the spec and plan current while live (update the spec when the build deviates, the plan when
the approach changes). The implementation record, adjustments, reconciliation, and retro are
written once and stand as history. `/adjust` leaves spec, plan, and record **frozen** until
`/reconcile` re-syncs the spec — the feature history is preserved, not rewritten.

## Grounding reads

Read what's relevant before acting; don't re-explore the whole repo.

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor, environment (always loaded).
- [development.md](development.md) — architecture, source layout, conventions, command table, doc-sync map.
- [07_data-architecture.md](07_data-architecture.md) — the layering authority.
- `/spec` product/design context: [01_vision.md](01_vision.md), [04_design-principles.md](04_design-principles.md), [05_design.md](05_design.md).
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
- **Docs are part of the change:** follow the dev guide's doc-sync map; never ship code and prose
  that disagree.
- **Specs state current + target state, not history** — the git log carries the change history.
- **Don't invent decisions only the user can make** — ask (multiple-choice, recommended first),
  then record the resolution back into the spec / plan.
- **Don't duplicate** code, docs, or spec content that already exists — extend and reference.

## Validation & review

Gate: `npm run ci` (tsc + lint incl. `compat/compat` + format); `npm run verify` auto-fixes then
re-checks; `npm run build` confirms compilation. Beyond the gate:

- **`/verify`** — run the app, confirm behavior against the spec's acceptance criteria (TV user agent for UI).
- **`/code-review`** — correctness bugs + reuse / simplification / efficiency.
- **`/simplify`** — quality-only cleanup; no bug hunting.
- **`/security-review`** — when the change touches auth, an API route, or `tools/firestore.rules`.

## Committing

**`/ship`** is the single, canonical commit+push action — every pipeline command delegates its
commit here instead of hand-rolling git, and it doubles as the ad-hoc "stage everything and push"
utility. It commits the **already-staged** set when a step has staged just its files (otherwise
`git add -A`), with a Conventional Commits subject + a what & why body + the `Co-Authored-By`
trailer, then pushes. The husky hooks are the gate (pre-commit `lint-staged`, pre-push
`npm run ci`) and run automatically; never `--no-verify`.

So a pipeline step stages its own files (`git add <paths>`) for a per-step commit, then runs
`/ship` to commit + push; `/ship` keeps the commit mechanics (message format, trailer, hooks) in
one place. It's a general git utility, not a pipeline stage, so it writes no artifact.
