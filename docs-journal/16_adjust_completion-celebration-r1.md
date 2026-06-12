# Completion celebration — Adjustments (Round 1)

> **Artifact:** `16_adjust_completion-celebration-r1.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13 · **Base ref:** 9850d7a (pre-adjustment HEAD)
> **Related:** [spec](16_spec_completion-celebration.md) · [plan](16_plan_completion-celebration.md) · [implement](16_implement_completion-celebration.md) · [retro](16_retro_completion-celebration.md)

Record of one post-review adjustment round — a **full-team** effort. The spec, plan, and
implementation record are **frozen**; this file is the only record of these changes.

## Change requests

### CR-1 — Glow grows in, slightly smaller

- **Source:** Product owner / Design — Jakub
- **Request:** The glow should be slightly smaller and animate from very small to cover the screen.
- **Why:** The glow appeared at full size immediately; a grow-in reads as a more deliberate
  "celebration arriving" moment and a slightly smaller resting size is less overwhelming behind the
  list.
- **Classification:** design change
- **How handled:** `CompletionCelebration.css` — the `__glow` now starts at `transform: scale(0.04)`
  and animates to `scale(1)` via a rewritten `cc-glow-in` (`from` opacity 0 + scale 0.04 → `to`
  opacity 1 + scale 1, `transform-origin: 50% 48%`), then keeps the gentle `cc-glow-pulse`. Resting
  radius pulled in (gradient transparent stop 78% → 70%) for the "slightly smaller" look.
- **Result:** Implemented — L2 drive: `cc-glow-in` runs once (900 ms) growing the glow from a point
  to full-bleed, then `cc-glow-pulse` runs infinitely; screenshot shows the softer, slightly smaller
  glow behind a readable list.

### CR-2 — Multiple staggered fireworks of varied size/position

- **Source:** Product owner / Design — Jakub
- **Request:** The firework burst should happen a few times in various areas of the screen with
  various sizes, so it lasts longer.
- **Why:** A single central burst was over quickly; several spread-out, varied bursts make a longer,
  livelier celebration.
- **Classification:** design change
- **Decisions (from Q&A):** play **once then settle** (replays on each re-arrival; not looping — keeps
  the spec's "burst then settle" and bounds TV load); **~5 bursts over ~3 s**.
- **How handled:** `CompletionCelebration.tsx` — replaced the single 24-particle burst with a `BURSTS`
  array of 5 fixed placements (`left`/`top`, `scale` 0.65–1, `delay` 0/500/950/1500/2100 ms), each a
  12-particle radial cluster (60 particles total). `CompletionCelebration.css` — `__burst` is now a
  positioned zero-size origin point; particle `animation-delay` is `calc(var(--cc-burst-delay) +
var(--cc-delay))` and travel distance is `calc(-1 * var(--cc-distance) * var(--cc-burst-scale))` so
  each burst fires at its own time and size. Bursts wrapped in a `__bursts` container hidden under
  reduced motion.
- **Result:** Implemented — L2 drive: 5 bursts at the configured varied positions/scales; per-burst
  first-particle animation times measured at 1300/1800/2250/2800/3400 ms (= each burst's `delay +
1300 ms` duration), confirming the staggered ~3.4 s sequence that plays once then settles.

## Verification

- **L0 gate** (`npm run ci`): green — tsc, ESLint incl. `compat/compat` (Chrome 87 floor — `transform`,
  `calc`, custom properties, `@keyframes` all in-floor), 45 Vitest unit tests, Prettier. **L1 build**
  (`npm run build`): succeeds.
- **L2 drive** (dev app, `PUBLIC_SKIP_AUTH`, seeded Firestore, mission "Rano" = 20 objectives):
  - **CR-1 / CR-2 acceptance** confirmed — glow grows from a point to full-bleed (slightly smaller
    resting radius) then pulses; 5 staggered fireworks of varied size/position fire over ~3.4 s then
    settle to the glow (timing + position data captured via the animation API; screenshot of the grown
    glow behind a readable list).
  - **No regression on the original spec acceptance criteria:** celebration renders behind content
    (`pointer-events: none`, `z-index` below content) and the list stays clickable; dropping below
    100% removes it (verified celebration gone at 95%); re-reaching 100% replays the sequence
    (unmount→remount); `prefers-reduced-motion` shows only the static glow (CSSOM: `__bursts {
display: none }`, `__glow { animation: none; transform: none; opacity: 1 }`); footer still reads
    "Sukces!" with no new text; no console warnings/errors.
- **L3 review** — `/code-review` over `9850d7a..HEAD`: no findings (casts sound; `calc` units valid;
  custom props declared for the CSS linter; two-animation glow compositing correct — pulse wins
  opacity, grow-in holds transform). `/simplify`: nothing. `/security-review` **not triggered** (no
  auth/API/rules/data).
- **L4 dead-code** (`npm run knip`): clean.
- **L5 / pending (real-TV):** particle count rose from 24 to 60 (staggered, play-once, so concurrent
  count stays moderate) and the glow is a full-bleed radial-gradient that grows then pulses —
  **animation performance on real TV hardware**, plus the explicit SmartTV-UA layout drive, remain
  **unverified; flagged for owner confirmation on the TV** (carried forward from the implementation
  record).

## Commits

- `f4e44d3` — feat(dashboard): multi-burst fireworks + growing glow for completion celebration
