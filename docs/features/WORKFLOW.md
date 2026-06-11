# Feature pipeline — shared rules for agents

Grounding and cross-cutting rules for every pipeline command — `/spec`, `/plan`, `/implement`,
`/adjust`, `/reconcile`, and `/retro`. Each command reads this first, then does its own job. The
shared rules live **here** (not copied into each command file) so there's a single source of
truth — edit this, not each command.

```text
/spec  →  /plan  →  /implement          idea → contract → plan → code → record
                        │
                        ├─ validate / review:  /verify · /code-review · /simplify · /security-review
                        └─ /adjust   …… apply post-review change requests as code (spec/plan/implement record stay frozen)
/reconcile  ……  re-sync an implemented spec with the code once it has drifted
/retro      ……  product-owner-led review of the whole iteration — wrap up the cycle, decide what's next
```

**Artifacts & roles.** Each command forces the role(s) that own its step and emits exactly one
durable artifact in `docs/features/`, all on the scheme **`NN_<command>_<short-name>.md`** from a
matching `_TEMPLATE_<command>.md` (the templates share one header style):

- `/spec` → `NN_spec_<short-name>.md` — **Product Owner**: the contract (_what_ / _why_).
- `/plan` → `NN_plan_<short-name>.md` — **Product Owner · Solution Architect / Tech Lead**: the
  ordered execution map.
- `/implement` → `NN_implement_<short-name>.md` — **Senior Fullstack Developer**: the record of
  what shipped (added / changed / skipped) that downstream skills read.
- `/adjust` → `NN_adjust_<short-name>-rN.md` (one per round) — **the full team**: post-review
  change requests and how each was handled. `/adjust` writes code but leaves the spec, plan, and
  implementation record **frozen**, so they drift until `/reconcile` runs.
- `/reconcile` → `NN_reconcile_<short-name>.md` — **Product Owner · Solution Architect / Tech
  Lead**: the drift found and the re-sync applied to the spec + general docs (feature history is
  preserved, not rewritten).
- `/retro` → `NN_retro_<short-name>.md` — **Product Owner (lead), all roles weighing in**: a
  review of the whole iteration (what worked, what to improve, the team's feedback, suggested next
  moves); it reads every artifact but edits none, and is the wrap-up the user reads before
  deciding what's next.

## Grounding reads

Read what's relevant before acting; don't re-explore the whole repo.

- [CLAUDE.md](../../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor, environment (always loaded; don't restate it).
- [docs/development.md](../development.md) — architecture, source layout, conventions, command table, **Adding a feature**, **Keeping docs in sync**.
- [docs/07_data-architecture.md](../07_data-architecture.md) — the layering authority.
- Product / design context, mainly for `/spec`: [docs/01_vision.md](../01_vision.md), [docs/04_design-principles.md](../04_design-principles.md), [docs/05_design.md](../05_design.md).
- The actual source the work touches — record types in `src/database/*`, the relevant stores / repos / components — before assuming how it works.

## Rules for every pipeline command

- **House style:** short, direct, precise (per CLAUDE.md "Working style"). The spec and plan are contracts — unambiguous, no filler.
- **Respect the layering:** Firestore → repository → store → component. Repos are the only Firestore callers; logic lives in stores, not components; **never mutate Zustand after a write** (let `onSnapshot` flow it back). See `docs/07`.
- **TV-first + Chrome 87 floor:** large, high-contrast, D-pad-operable UI; no client JS/CSS newer than Chrome 87 (`compat/compat`). Server / API-route code is off-floor. See CLAUDE.md.
- **Docs are part of the change:** follow the dev guide's **Keeping docs in sync** map; never ship code and prose that disagree.
- **Specs state current + target state, not history** — no "added / removed / used to". The git log carries the change history.
- **Don't invent decisions only the user can make** — ask (multiple-choice, recommended option first), then record the resolution back into the spec / plan so the contract stays the single source of truth.
- **Don't duplicate** code, docs, or spec content that already exists — extend the canonical example (dev guide **"Copy from"**) and reference it rather than restate.

## Validation & review

The gate is `npm run ci` (tsc + lint incl. `compat/compat` + format); `npm run verify` auto-fixes
then re-checks; `npm run build` confirms compilation. Beyond the gate, use the built-in skills
rather than re-inventing them:

- **`/verify`** — run the app and confirm behavior against the spec's **Acceptance criteria** (TV user agent for UI).
- **`/code-review`** — correctness bugs + reuse / simplification / efficiency over the change.
- **`/simplify`** — quality-only cleanup (reuse, simplification, efficiency); no bug hunting.
- **`/security-review`** — when the change touches auth, an API route, or `tools/firestore.rules`.
