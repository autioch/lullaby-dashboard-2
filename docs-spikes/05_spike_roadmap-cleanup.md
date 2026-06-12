# Roadmap cleanup & /steer done-reconciliation — Spike

> **Artifact:** `docs-spikes/05_spike_roadmap-cleanup.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** _(not a feature — execute as a docs/tooling `/tweak`; see Next step)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

`/steer` works, but the doc it maintains (`docs/06_roadmap.md`) has drifted into a mix of three
things — a frozen MVP record, deliberate non-goals, and the live backlog — with **no done-marking**
and a Decision log the owner doesn't want. What's the right shape for a doc whose only job is "the
items to choose from," and **which command marks an item done** without breaking `/steer`'s
single-writer ownership of the roadmap?

## Idea as posed

> I don't like how the steer command works. The roadmap document is now messy as it contains user
> manual input, agent's modification and some legacy information about mvp and excluded scope. In
> addition, nothing marks things as done. I think that the document should contain only the items to
> choose. Excluded items should just become items to do. MVP items should be just marked as done.
> Grouping by type of change can stay. Drop the changelog, I don't really need it. The `docs-journey`
> already shows the order of implementation.

## Findings

### Product & common sense

The complaint is accurate and the fix is sound. The current roadmap (post spike 04) carries four
things that don't serve "what do I pick next":

- **`MVP > Included`** — seven shipped features, walled off in their own section instead of sitting
  in the backlog as done work.
- **`Excluded`** — a non-goals list that already _partially duplicates_ live backlog items
  (`Authentication` ≈ "Complete the full Firebase authorization"; `AI-generated content` ≈ "AI:
  auto-suggest groups and objectives"), so it reads as stale rather than authoritative.
- **`Analytics intent` + the MVP-specced-not-built note** — rationale prose, not pickable items.
- **`Decision log`** — a JIRA-epic trail of grooming runs that `docs-journal/` largely subsumes
  (it records what shipped, in order).

Reshaping to a **single flat backlog grouped by change-type, each item `[ ]` or `[x]`** is the
standard "one prioritized list" shape and directly answers the doc's only question. Two of the
owner's calls override a Tech-Lead pushback, recorded honestly:

- **Hard non-goals fold into the backlog (no "Not planned" note).** Tech Lead flagged that
  collapsing `Monetization` / `Multi-household` / `Social` into `[ ]` items loses the "decided
  against" signal. **Owner's call: fold them all in** — for a solo project, "haven't picked it" and
  "won't do it" are close enough, and an unpicked item costs nothing.
- **Decision log dropped entirely** (reverses spike 04, which added it). Residual loss: picks routed
  to `/spike`/`/spec` that haven't shipped yet, and pure re-prioritizations, aren't recorded
  anywhere. **Owner's call: acceptable** — `docs-journal/` covers everything that ships.

### UX standards

No app/TV surface — the "users" are the agent running `/steer` and the owner in the loop (same as
spikes 03/04). The standard that matters is **document legibility**: one scannable list, the
priority signal (in-bucket ordering) intact, done work visibly `[x]` so the owner sees "shipped vs
left" per area at a glance. Keeping done items **in their bucket** (owner's choice) buys that
at-a-glance read; the cost is unbounded growth, named as a risk to revisit.

### Technical viability

Trivially viable — markdown only: rewrite `docs/06_roadmap.md`, edit `.claude/commands/steer.md`,
and sync `docs/feature-workflow.md`. No app stack, no Chrome 87 surface, no npm, no git beyond
`/ship`.

The one design question with teeth was **who marks an item done.** Spike 04 established `/steer` as
the **single writer** of the roadmap (the reason it's the one pipeline command maintaining a durable
doc instead of a journal artifact). Letting the terminal command of each lane (`/retro` for
features, `/tweak` for small changes) check the box would spread roadmap-write logic across three
prompts and break that invariant. **Resolved (owner): `/steer` reconciles done-state at the top of
the loop** — its existing "dedupe against what's already shipped" step (steer.md step 2) is widened
to **flip the picked item to `[x]`** by checking `docs-journal/` on its next run. Single writer
preserved; the only cost is that a just-shipped item stays `[ ]` until the next `/steer` run, which
is cosmetic since `docs-journal/` is the live record.

## Options & trade-offs

**Roadmap shape:**

- **Option A — flat backlog, change-type buckets, `[ ]`/`[x]` items. _(recommended, owner-chosen)_**
  Drop `MVP`/`Excluded`/`Analytics intent`/MVP-note/`Decision log`. Done MVP features move into a new
  **Core dashboard** bucket, all `[x]`. Excluded items fold in as `[ ]`, de-duped against existing
  entries. In-bucket order stays the priority signal.
- **Option B — keep a "Not planned" non-goals note.** Tech-Lead-preferred; preserves the
  decided-against signal. **Rejected (owner)** — unnecessary ceremony for a solo backlog.
- **Option C — keep a minimal Decision log.** Preserves the "why this order" trail. **Rejected
  (owner)** — `docs-journal/` covers shipped work.

**Done-marking:**

- **Option A — `/steer` reconciles at top of loop. _(recommended, owner-chosen)_** Single writer
  preserved; widen the existing dedupe step. Item flips `[x]` on the next steer run.
- **Option B — terminal command marks it** (`/retro`/`/tweak`). Immediate, but three writers on one
  file. **Rejected.**
- **Option C — both** (terminal marks, steer backstops). Most robust, most coupling. **Rejected.**

## Verdict & recommendation

**`viable`.** Build Option A on both axes. The idea survived the vet largely as posed — the owner
overrode the two Tech-Lead pushbacks (keep a non-goals note; keep a minimal Decision log), so the
final shape ≈ the posed shape, plus one addition the spike surfaced: **`/steer` gains a
done-reconciliation step** so something actually marks items `[x]` without breaking its single-writer
ownership of the roadmap.

Net: `docs/06_roadmap.md` becomes a pure prioritized backlog (change-type buckets, `[ ]`/`[x]`);
`/steer` reconciles done-state and remains the sole roadmap writer; the Decision log and legacy
MVP/Excluded/rationale sections are gone.

## Suggested scope

**Keep in scope (for the build):**

- **`docs/06_roadmap.md` rewrite:**
  - Remove `MVP` wrapper, `Excluded`, `Analytics intent`, the MVP-specced-not-built note, and the
    entire `Decision log` section.
  - One flat backlog grouped by change-type buckets (kept): **Core dashboard** _(new — the 7 shipped
    MVP features, `[x]`)_ · Dashboard design · Tooling & infrastructure · Features & UX · Product &
    onboarding · Reliability & tech debt · Process & pipeline.
  - Fold `Excluded` items in as `[ ]`, **de-duped** against existing entries (Authentication ↔
    "Complete the full Firebase authorization"; AI-generated content ↔ "AI: auto-suggest…"; relate
    "User-created themes" to the existing Theme-system item). Remaining ones (Accounts, Social,
    Monetization, Multi-household, In-progress objective state, History) become new `[ ]` items in
    the fitting bucket.
  - Keep in-bucket ordering as the priority signal.
- **`.claude/commands/steer.md`:** widen step 2 to **mark shipped picks `[x]`** (reconcile against
  `docs-journal/`), not just dedupe; drop the Decision-log write in step 6; drop the "+ Decision-log
  entry" phrasing in the "No journal artifact" rule; purge MVP/Excluded language.
- **Doc-sync — `docs/feature-workflow.md`:** remove the Decision-log mentions (the `/steer` bullet
  and the Artifacts & roles table note) and reflect that `/steer` now also reconciles done-state.

**Cut from scope:** a "Not planned" non-goals note; any Decision log; estimation/scoring; touching
`/retro` or `/tweak` (they do **not** write the roadmap).

## Open questions & risks

- [ ] **Unbounded growth** — keeping `[x]` items in-bucket forever means the doc trends toward
      done-noise. Acceptable now; revisit (e.g. a "Done" section or pruning) if it bloats.
- [ ] **Dedupe judgment** — folding `Excluded` in requires matching each against existing backlog
      items so nothing double-lists; settle the exact merges during the build.
- [ ] **Reconciliation trigger** — confirm the `/steer` step keys done-marking off a shipped
      `docs-journal/` artifact (vs git history); keep it lightweight, no scanning engine.
- [ ] **`allowed-tools`** — unchanged from current `steer.md`; no new tools needed.

## Next step

**Not a feature — no `/spec`** (every product decision was made here). Execute as a docs/tooling
**`/tweak`** (reuse short-name `roadmap-cleanup`): roadmap rewrite + `steer.md` edit + the
`feature-workflow.md` doc-sync. It spans a few durable docs, so if it runs large, **split the pass**
(roadmap, then command, then doc-sync) rather than escalating — precedent: spikes 03 and 04.

## References

- The doc being restructured: [`docs/06_roadmap.md`](../docs/06_roadmap.md).
- The command being maintained: [`.claude/commands/steer.md`](../.claude/commands/steer.md).
- Originating design this revises: [`docs-spikes/04_spike_steer-command.md`](04_spike_steer-command.md)
  (single-writer invariant · Decision log it added).
- Pipeline it slots into: [`docs/feature-workflow.md`](../docs/feature-workflow.md) (Artifacts &
  roles · the `/steer` no-journal-artifact carve-out).
- Sibling "process change, build as `/tweak`, not a feature" precedent:
  [`docs-spikes/03_spike_commands-cleanup.md`](03_spike_commands-cleanup.md).
