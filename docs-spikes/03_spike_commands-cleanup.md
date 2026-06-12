# Commands cleanup — Spike

> **Artifact:** `docs-spikes/03_spike_commands-cleanup.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** _(not a feature — execute as a docs `/tweak` or direct editing pass; see Next step)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

Can the 8 slash-command files in `.claude/commands/` be trimmed and de-duplicated — pointing to
`feature-workflow.md`, qa.md, and the artifact templates instead of restating them — **without
losing any execution context** and without breaking the slash-command mechanics?

## Idea as posed

> Similar to spike 02, clean up the commands in `.claude/commands`. They're custom prompts with
> assigned roles; some finish by producing markdown artifacts instead of a chat summary.
>
> 1. Trim them to do only what's required.
> 2. Delegate to other files for context instead of repeating it.
> 3. Commands describe what's expected in the artifact markdowns, but so do the templates — there
>    should be a single source of truth for artifact contents.
> 4. Avoid bloated language; be blunt and to the point.
>
> Vet the assumptions. Make sure no context is lost while trimming/reorganizing.

## Findings

### Product & common sense

The goal is sound and mirrors spike 02 (enforcing the repo's existing "short, direct, precise"
house style), now on the command prompts. The four assumptions vet out:

| #   | Assumption                       | Verdict                   | Evidence                                                                                                                                                                                                                        |
| --- | -------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Trim to what's required          | ✅ true                   | Boilerplate bloat is real — see the duplication list below.                                                                                                                                                                     |
| 2   | Delegate instead of repeat       | ✅ true (already partial) | Commands **both** point to `feature-workflow.md` **and** restate its contents. Fix = cut the restatement, keep the pointer.                                                                                                     |
| 3   | Single SoT for artifact contents | ⚠️ **partly**             | Section _structure_ already lives only in the templates ("fill every section per the template"). Only the artifact _writing guidance_ (terse / claims-trace-to-commit / no-summary) is duplicated between command and template. |
| 4   | Blunt language                   | ✅ true                   | Several windy wind-up sentences and repeated lists.                                                                                                                                                                             |

**Duplication actually found (the cut list):**

- `"First read [feature-workflow.md] — the pipeline guide with the shared grounding reads and rules
for every command."` — verbatim in 7 of 8 commands.
- Re-listed grounding reads (`01_vision`, `04`, `05`, `07` + dev-guide sections) in `spec`/`spike` —
  already enumerated in `feature-workflow.md` → **Grounding reads**.
- The context7 / MCP block (`resolve-library-id → query-docs` for Astro 6 / React 19 / Zustand 5 /
  Firebase) — repeated in `implement` and `adjust`, in both a step and the Rules.
- The `/ship` mechanics (`commits the staged set … husky hooks … never --no-verify … pushes`) —
  restated in `implement`, `adjust`, `retro`, `tweak`, though `ship.md` **and**
  `feature-workflow.md → Committing` already own it.
- The conventions + Chrome 87 list (`layering, BEM c-, @/* alias, i18n, no compat/compat`) —
  repeated per code-writing command; lives in `feature-workflow.md → Shared rules`.
- The qa.md level mechanics (`L0` gate / `L1` build / `L2` TV-UA drive / `L4` knip) — restated in
  `implement`/`adjust`/`plan`/`tweak` on top of pointing to qa.md.
- Artifact writing-tone guidance — in both each command and its template.

### UX standards

The "reader" is the agent executing the command. The binding requirement is the owner's: **no
execution context lost.** That is satisfiable here because every proposed cut is a _restatement_ of
something that still lives in (and is still pointed to from) `feature-workflow.md`, qa.md, `ship.md`,
or the template. The trap is over-delegation — see the two hard constraints below.

### Technical viability

Viable — these are markdown prompt files, **no app stack and no Chrome 87 surface** (irrelevant
here; no runtime). Two mechanics make this _not_ zero-risk:

1. **Frontmatter is functional, not prose.** Each command's YAML `description` and `allowed-tools`
   are load-bearing — `allowed-tools` gates the command's tool permissions (e.g. `implement`/`adjust`
   enumerate the exact `Bash(npm run …)`, `git`, `mcp__*`, `Skill` grants). Trimming an entry there
   **breaks the command at runtime**. `$ARGUMENTS` must also stay verbatim. These are off-limits to
   the "blunt-ify" pass.
2. **Slash commands don't auto-load referenced files.** A command is a self-contained prompt; it
   only gains `feature-workflow.md` / a template / qa.md if it **tells the agent to read them**. So
   de-duping must _keep the read-pointer_ and only remove the restated body. Delete the pointer and
   context really is lost.

Plus: **command-specific rules are substance, not boilerplate, and must survive** — `implement`'s
whole-plan autopilot + HEAD base-ref + `✅` marking + status transitions; `adjust`'s frozen-contract
read-only rule + round `rN` + per-request acceptance check + `ccd_session_mgmt` fallback; `retro`'s
reconcile-phase being the _only_ durable-doc writer + Decision-left-to-user; `plan`'s bottom-up
ordering + no-`src/`-edits. A naive trim that can't tell these from the shared-rule restatements
would gut the commands.

## Options & trade-offs

- **Option A — Surface blunt-ify (shorten sentences in place).** Cheap, but leaves the structural
  duplication and risks nicking functional frontmatter / command-specific rules. Misses the point.
- **Option B — De-dup to pointers; templates own artifact contents; keep all steps & frontmatter.
  _(recommended)_** Cut the seven restatements above to a single mandatory "Read first" pointer line;
  let each template be the sole SoT for its artifact (structure + tone); leave every procedural step,
  command-specific rule, and the whole frontmatter block intact. Small absorbing edits to
  `feature-workflow.md` / templates where a de-duped bit isn't already fully owned there.
- **Option C — Also compress the procedural steps.** Leaner still, but the owner chose against it —
  higher risk of dropping an execution nuance, and the steps are the part most likely to encode
  context that isn't anywhere else.

## Verdict & recommendation

**`viable-with-changes`.** The idea is good; assumption #3 is reshaped (templates already own
_structure_ — the dedupe target is the _writing-tone_ overlap, not the section list). Recommended
approach, per the owner's elicited decisions (**de-dup only / template owns artifact contents /
small edits to shared files allowed**):

- **Per command, cut to a pointer:** replace the restated grounding reads, shared rules, conventions
  - Chrome 87 list, qa-level mechanics, `/ship` mechanics, and context7 block with one concise
    **"Read first: `feature-workflow.md` (shared rules + grounding), the matching template, qa.md"**
    line plus the existing `Rules → "Follow the shared rules in feature-workflow.md"` pointer (trimmed
    so it stops re-listing the rules).
- **Keep verbatim:** all frontmatter (`description`, `allowed-tools`), `$ARGUMENTS`, every numbered
  procedural step, and every command-specific rule.
- **Templates = artifact SoT:** commands stop describing what goes in the artifact or how to write it
  (terse / traceable / no-summary) — they only say _copy the template, fill every section, set
  Status + date, commit via `/ship`_. Move any artifact guidance that only existed in a command into
  its template.
- **Small shared-file edits as needed:** absorb any de-duped content `feature-workflow.md` doesn't
  already carry (it already has Grounding reads, Shared rules, Committing/`/ship`, Artifacts & roles —
  so edits should be minimal).
- **`ship.md`** is already lean and self-contained (no artifact, tight Rules) — light touch only.

## Suggested scope

**Keep in scope:** all 8 commands in one pass (they share the boilerplate — consistency matters);
minimal absorbing edits to `feature-workflow.md` and the 6 templates. **Cut from scope:** compressing
procedural steps (Option C); any change to frontmatter `allowed-tools`; renaming command files.
**Reshape:** assumption #3 — target the writing-tone overlap, not the (already-single-source)
section structure.

## Open questions & risks

- [ ] **Don't touch `allowed-tools`.** Verify each trimmed command still grants every tool its steps
      invoke (the `git`/`npm run`/`mcp__*`/`Skill` entries). A diff that only removes prose is the tell.
- [ ] **Keep the read-pointers mandatory.** After trimming, each command must still explicitly tell
      the agent to read `feature-workflow.md` + its template; spot-check that none rely on un-loaded
      context.
- [ ] **Preserve command-specific rules** (autopilot, frozen-contracts, reconcile-only-durable-docs,
      bottom-up ordering, `rN`, base-ref, status transitions) — these are nowhere else.
- [ ] Re-check internal links after edits (`../../docs/…`, `../../docs-journal/…` relative paths;
      `feature-workflow.md` / qa.md anchor slugs).

## Next step

**Not a feature — no `/spec`.** Bounded editing pass over prompt + shared docs. Execute as a docs
**`/tweak`** (records the per-file decisions, runs the gate's internal-link/format check). Reuse
short-name `commands-cleanup` if it graduates. Given it spans 8 commands + shared files, it may run
slightly large for one tweak — if it does, split by command group rather than escalating to `/spec`
(there's no product decision left to make).

## References

- Files reviewed: `.claude/commands/{spec,plan,implement,adjust,retro,tweak,spike,ship}.md`;
  `docs-journal/_TEMPLATE_{spec,plan,implement,adjust,retro,tweak}.md`.
- Shared SoT this leans on: `docs/feature-workflow.md` (Grounding reads · Shared rules · Committing ·
  Artifacts & roles), `docs/qa.md` (levels), `.claude/commands/ship.md` (`/ship` mechanics).
- Sibling precedent: `docs-spikes/02_spike_docs-cleanup.md` (same house-style enforcement on `docs/`).
