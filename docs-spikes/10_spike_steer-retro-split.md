# Lighten `/steer`, untangle it from `/retro` — Spike

> **Artifact:** `docs-spikes/10_spike_steer-retro-split.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13
> **Graduated to:** [tweak](../docs-journal/25_tweak_steer-retro-split.md) _(docs/tooling tweak, not a feature)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

`/steer` loads a lot of context and runs slow for what should be a light "pick the next item"
command, and its responsibilities overlap `/retro` (both act as the wrap-up / prep bookends of a
feature). Can we shrink `/steer` and separate the two cleanly — and does that need a new command?

## Idea as posed

> Command steer is loading a lot of context and taking a lot of time for a small command that is
> supposed to suggest next item from the backlog. It's also mixed up with `retro` command. Both
> commands were supposed to serve as a wrapup and preparation of a bigger feature development. I'd
> like to reduce their responsibilities. If needed, introduce some other command.

## Findings

### Product & common sense

The root cause is one rule from spike [04](04_spike_steer-command.md): the roadmap declares
`/steer` its **single writer** ([`docs/06_roadmap.md:5`](../docs/06_roadmap.md)). That forced
**all** backlog bookkeeping into the one cold, forward-looking command. `/steer` today carries
three jobs:

- **A — done-reconciliation.** Cross-reference every roadmap item against ~55 terminal artifacts in
  `docs-journal/` to mark shipped items `[x]` (steer.md step 2). Heavy, cold, every run.
- **B — candidate gathering from scattered sources.** Read every open `/retro`'s _Suggested next
  actions_, every un-graduated spike, plus the roadmap (steer.md step 2). Heavy — re-reads outputs
  that were already produced elsewhere.
- **C — rank → converge → pick → hand off** (steer.md steps 3–7). Light. This is the actual job.

A + B are the context load the owner is hitting, and they're exactly where `/steer` tangles with
`/retro`: `/retro` already runs a full repo-wide **durable-doc reconcile** (retro.md step 6) — and
the roadmap _is_ a durable doc — and already emits _Suggested next actions_ (retro.md step 5) that
land nowhere structured, so `/steer` has to go **re-read** them. The same fact is written by retro,
then re-derived by steer. Two reconcile passes, two "what's next" outputs, one backlog.

The owner's own "wrap-up vs prep" framing is the fix: let the **wrap-up** own its bookkeeping (its
context is already hot), leaving the **prep** command to only read-rank-pick.

### UX standards

No app/TV surface — the "users" are the agent running the command and the owner in the loop. The
interaction standards stay as spike 04 set them: focused `AskUserQuestion` (recommended first),
present top picks **with rationale**, **converge before recording**. Nothing here touches the
10-foot UI, D-pad, or readability floor.

### Technical viability

Trivially viable — markdown command prompts under `.claude/commands/` plus a durable-doc doc-sync
pass. **No app stack, no Chrome 87 surface** (same class as spikes 03, 04). The change is purely a
**redistribution of responsibilities across existing commands** — no new command, no new artifact
type, no tool-grant changes (`/retro`, `/tweak`, `/spike` already hold `Edit`/`Write` + git/`/ship`).

The one real constraint is **inverting spike 04's single-writer rule**: the roadmap becomes a
**single inbox with many writers**, and `/steer` flips from sole writer to **sole reader**. The
trade is sound — pay reconciliation **once, at feature-finish, with context hot** (in `/retro` /
`/tweak`) instead of **every `/steer` run, cold**. The roadmap header and `feature-workflow.md`'s
Artifacts & roles table must be rewritten so a future cleanup doesn't "restore" single-writer.

### Approach

Generalize to a single principle: **the roadmap is the backlog inbox; every command that _finishes
work_ or _generates future work_ writes to it at the moment its context is hot; `/steer` only
reads-ranks-picks.**

- **`/retro`** (wrap-up) closes _its own_ item `[x]` and files _its own_ follow-ups as backlog
  entries — folded into the durable-doc reconcile it already does (step 6); _Suggested next actions_
  stop being free-floating prose.
- **`/tweak`** closes _its own_ roadmap item when it ships.
- **`/spike`** files a `viable` / `viable-with-changes` verdict as a backlog candidate.
- **`/steer`** reads the now-current roadmap, ranks the **whole backlog** (the one thing only it
  sees), converges, picks, hands off. No journal scan, no done-reconciliation, no cross-source
  gather.

`/steer` keeps whole-backlog **reprioritizing** — writers append to the relevant bucket, `/steer`
orders across buckets. Closing items and filing follow-ups (point writes by the owning command)
stays separate from cross-backlog ranking (steer). No writer/writer conflict.

## Options & trade-offs

- **Option A — Redistribute; no new command. _(recommended, owner-chosen)_** Move bookkeeping to
  the finishing/generating commands; `/steer` becomes reader-only. Lightest steer, kills the overlap,
  reuses passes that already exist. Cost: inverts single-writer; touches four command files + a
  doc-sync pass.
- **Option B — Add a `/groom` command.** Keep `/steer` as picker, split the heavy
  reconcile/gather into a separate command. **Rejected** — more commands and a standalone
  bookkeeping ritual with no payer on a solo project (same reasoning spikes 03/04 used to reject
  sprint/batch ceremony); the reconcile is better as a byproduct of finishing work than a command.
- **Option C — Just trim `/steer`'s reads.** Keep all responsibilities in `/steer` but make scans
  cheaper. **Rejected** — smallest change but leaves the retro/steer overlap and a reconcile pass
  in the cold command; treats the symptom, not the cause.

## Verdict & recommendation

**`viable-with-changes`.** Build as **Option A**. Reshaped from the posed idea on two points:
(1) **no new command** — the owner floated "if needed"; redistribution across existing commands is
cleaner and avoids solo-ceremony; (2) the real lever is **inverting spike 04's single-writer rule**
into a single-inbox / many-writers model, which is what both shrinks `/steer` and removes the
`/retro` tangle in one move.

## Suggested scope

**Keep in scope (for the build):**

- **`.claude/commands/steer.md`** — drop job A (done-reconciliation) and job B (gather from retros /
  spikes). `/steer` reads the roadmap, ranks the whole backlog, converges, picks, hands off, and
  may reprioritize. It trusts the roadmap's done-state; if the owner spots a stray open item it's
  fixed in the loop, not via a scan.
- **`.claude/commands/retro.md`** — step 6 reconcile extends to the roadmap: mark _this_ feature's
  item `[x]`; step 5's follow-ups are **filed as roadmap backlog entries** (relevant bucket; `/steer`
  reprioritizes later), not just artifact prose.
- **`.claude/commands/tweak.md`** — on ship, close its own roadmap item (where the tweak maps to one).
- **`.claude/commands/spike.md`** — a proceed verdict files a backlog candidate so `/steer` no
  longer scans `docs-spikes/`.
- **Doc-sync:** `docs/06_roadmap.md` header (rewrite the single-writer note → single-inbox /
  many-writers, `/steer` reads & reprioritizes); `docs/feature-workflow.md` (Pipeline bullets +
  Artifacts & roles table: `/steer` is reader/groomer, retro/tweak/spike carry the roadmap writes);
  `CLAUDE.md` Features section ("`/steer` … maintains the roadmap" wording); `docs/development.md`
  command table if it states steer's responsibilities.

**Cut / reshape:** no new command; no new artifact type; no tool-grant changes. Reshape "maybe
introduce another command" → redistribute across existing ones.

## Open questions & risks

- [ ] **Full feature shipped without a `/retro`.** If the wrap-up is skipped, that item isn't
      auto-closed and no follow-ups are filed. Accept (owner closes it next `/steer` in the loop), or
      make `/implement`'s record-write also close its item? Settle in the build — lean toward
      _accept_, since `/steer` no longer scans regardless.
- [ ] **One-time migration.** Existing open `/retro` next-actions and un-graduated viable spikes
      that predate this change should be filed into the roadmap once, so the reader-only `/steer`
      doesn't miss them. Small, do it in the build pass.
- [ ] **Writer discipline.** Many writers append to one doc — keep each write a small, scoped point
      edit (close one item / append one entry) so the roadmap doesn't drift; `/steer` remains the
      only cross-backlog reorderer.
- [ ] **Protect the inversion.** `feature-workflow.md` + the roadmap header must state the
      single-inbox / many-writers model explicitly, or a future cleanup "restores" single-writer and
      re-bloats `/steer` (this exact rule caused the problem).

## Next step

**Not a feature — no `/spec`** (every decision was made/agreed in this spike). Execute as a
docs/tooling **`/tweak`** (reuse short-name `steer-retro-split`): edit the four command files +
the doc-sync pass + the one-time roadmap migration. It spans several durable docs, so it may run
slightly large for one tweak — if it does, **split the pass** (steer + retro first, then tweak +
spike, then doc-sync/migration) rather than escalating to `/spec` (precedent: spikes 03, 04).

## References

- The rule this inverts: [`docs-spikes/04_spike_steer-command.md`](04_spike_steer-command.md)
  (single-writer / no-journal-artifact decision) and [`docs/06_roadmap.md:5`](../docs/06_roadmap.md)
  (the header stating it).
- Commands reshaped: [`.claude/commands/steer.md`](../.claude/commands/steer.md),
  [`.claude/commands/retro.md`](../.claude/commands/retro.md),
  [`.claude/commands/tweak.md`](../.claude/commands/tweak.md),
  [`.claude/commands/spike.md`](../.claude/commands/spike.md).
- Pipeline doc to sync: [`docs/feature-workflow.md`](../docs/feature-workflow.md) (Pipeline ·
  Artifacts & roles).
- Sibling "process change, build as `/tweak`, not a feature" precedent:
  [`docs-spikes/03_spike_commands-cleanup.md`](03_spike_commands-cleanup.md).
