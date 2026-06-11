# Feature pipeline — guide & shared rules for agents

The single source of truth for the feature pipeline: the chain of slash commands that turns an
idea into shipped, recorded code. Every pipeline command (`/spec`, `/plan`, `/implement`,
`/adjust`, `/reconcile`, `/retro`) **reads this file first**, then does its own job. Shared
grounding, rules, and the artifact convention live **here**; command-specific behavior lives in
each command file. For how this fits the wider dev workflow, see **"Adding a feature"** in
[development.md](../development.md).

```text
/spec  →  /plan  →  /implement          idea → contract → plan → code → record
                        │
                        ├─ validate / review:  /verify · /code-review · /simplify · /security-review
                        └─ /adjust   …… apply post-review change requests as code (spec/plan/implement record stay frozen)
/reconcile  ……  re-sync an implemented spec with the code once it has drifted
/retro      ……  product-owner-led review of the whole iteration — wrap up the cycle, decide what's next
```

The commands chain: `/spec` drives the elicitation loop and writes the spec → `/plan` turns an
agreed spec into the ordered, independently committable plan → `/implement` executes that plan step
by step (committing and validating each, running the review gate before close-out) and writes the
implementation record. Post-review change requests go through `/adjust` (code only; spec, plan, and
implementation record stay frozen and drift). `/reconcile` later re-syncs a drifted `implemented`
spec with the code. `/retro` reviews the whole iteration and writes the wrap-up the user reads
before deciding what's next.

## Artifacts & roles

Each command forces the role(s) that own its step and emits **exactly one** durable artifact in
`docs/features/`, all on the scheme **`NN_<command>_<short-name>.md`** copied from a matching
`_TEMPLATE_<command>.md`. The templates share one header style (`Artifact` · `Roles` · `Status` ·
`Owner` · `Related`). One feature per zero-padded `NN`; one kebab-case `<short-name>` reused by
every artifact for that feature. **Each template is the single source for its artifact's
sections** — commands copy the template and fill it; they don't restate its structure.

| Command      | Artifact                            | Role(s)                                        | Status                                     |
| ------------ | ----------------------------------- | ---------------------------------------------- | ------------------------------------------ |
| `/spec`      | `NN_spec_<short-name>.md`           | Product Owner                                  | `draft` → `agreed` → `implemented`         |
| `/plan`      | `NN_plan_<short-name>.md`           | Product Owner · Solution Architect / Tech Lead | `draft` → `ready` → `in-progress` → `done` |
| `/implement` | `NN_implement_<short-name>.md`      | Senior Fullstack Developer                     | terminal record (no lifecycle)             |
| `/adjust`    | `NN_adjust_<short-name>-rN.md` (×N) | the full team                                  | terminal record (no lifecycle)             |
| `/reconcile` | `NN_reconcile_<short-name>.md`      | Product Owner · Solution Architect / Tech Lead | terminal record (no lifecycle)             |
| `/retro`     | `NN_retro_<short-name>.md`          | Product Owner (lead), all roles weigh in       | terminal record (no lifecycle)             |

Keep the spec and plan current while they're live: when the build deviates, update the spec; when
the approach changes, update the plan. The implementation record, adjustments, reconciliation, and
retro are written once and stand as history. `/adjust` deliberately leaves the spec, plan, and
implementation record **frozen** — so they drift until `/reconcile` re-syncs the spec (the feature
history is preserved, not rewritten).

## Grounding reads

Read what's relevant before acting; don't re-explore the whole repo.

- [CLAUDE.md](../../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor, environment (always loaded; don't restate it).
- [docs/development.md](../development.md) — architecture, source layout, conventions, command table, **Adding a feature**, **Keeping docs in sync**.
- [docs/07_data-architecture.md](../07_data-architecture.md) — the layering authority.
- Product / design context, mainly for `/spec`: [docs/01_vision.md](../01_vision.md), [docs/04_design-principles.md](../04_design-principles.md), [docs/05_design.md](../05_design.md).
- The actual source the work touches — record types in `src/database/*`, the relevant stores / repos / components — before assuming how it works.

## Shared rules for every command

- **House style:** short, direct, precise (per CLAUDE.md "Working style"). Specs and plans are contracts — unambiguous, no filler.
- **Respect the layering:** Firestore → repository → store → component. Repositories are the only Firestore callers; logic lives in stores, not components; **never mutate Zustand after a write** (let `onSnapshot` flow it back). See `docs/07`.
- **Coding conventions** (the code-writing commands `/implement` and `/adjust`): BEM `c-` CSS imported atop its `.tsx`; the `@/*` alias; a component's `translations.ts` registered in `src/i18n/translations.ts`. Mirror the canonical example in the dev guide's **"Copy from"** table rather than hand-rolling.
- **TV-first + Chrome 87 floor:** large, high-contrast, D-pad-operable UI; no client JS/CSS newer than Chrome 87 — no `compat/compat` hits (clone arrays manually; no `structuredClone` / `Array.prototype.at` / top-level await). Server / API-route code is off-floor. See CLAUDE.md.
- **Docs are part of the change:** follow the dev guide's **Keeping docs in sync** map; never ship code and prose that disagree.
- **Specs state current + target state, not history** — no "added / removed / used to". The git log carries the change history.
- **Don't invent decisions only the user can make** — ask (multiple-choice, recommended option first), then record the resolution back into the spec / plan so the contract stays the single source of truth.
- **Don't duplicate** code, docs, or spec content that already exists — extend the canonical example and reference it rather than restate.

## Validation & review

The gate is `npm run ci` (tsc + lint incl. `compat/compat` + format); `npm run verify` auto-fixes
then re-checks; `npm run build` confirms compilation. Beyond the gate, use the built-in skills
rather than re-inventing them:

- **`/verify`** — run the app and confirm behavior against the spec's **Acceptance criteria** (TV user agent for UI).
- **`/code-review`** — correctness bugs + reuse / simplification / efficiency over the change.
- **`/simplify`** — quality-only cleanup (reuse, simplification, efficiency); no bug hunting.
- **`/security-review`** — when the change touches auth, an API route, or `tools/firestore.rules`.
