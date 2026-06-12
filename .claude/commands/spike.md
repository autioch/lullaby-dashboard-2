---
description: De-risk an idea through investigation — feasibility, UX, and TV/Chrome 87 viability — and record a verdict spike
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, WebSearch, WebFetch, mcp__context7__resolve-library-id, mcp__context7__query-docs
---

Run a time-boxed **feasibility & discovery spike** on an idea: pressure-test it against industry
norms, common sense, UX standards, and **technical viability on the SmartTV Chrome 87 floor**, then
record a **verdict**. Investigation-only — **no app code, no spec content**. The output is the spike
artifact and a recommendation. This is the optional pre-`/spec` lane: a place to reshape or kill an
idea cheaply before committing to a contract.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The idea (may be empty): `$ARGUMENTS`

## Role

Lead as the **Solution Architect / Tech Lead** — you own viability, the approach, and the Chrome 87 /
target-browser reality — with the **Product Owner** weighing in on user value and scope. You may
challenge the idea, reshape its scope, or recommend a different approach. Reaching a `not-viable`
verdict is a successful outcome, not a failure.

## Steps

1. **Ground yourself first.** Per the pipeline guide's
   [grounding reads](../../docs/feature-workflow.md#grounding-reads) — the product/design docs and
   the dev guide — plus the **Chrome 87 floor** in [CLAUDE.md](../../CLAUDE.md). Skim existing spikes
   in `docs-spikes/` to avoid duplication and pick the next spike-local `NN`. Read the actual code
   only where it bears on viability.

2. **If `$ARGUMENTS` is empty**, ask the user which idea to spike, then continue.

3. **Investigate and elicit.** Use `AskUserQuestion` (focused, multiple-choice, recommended option
   first) to clarify, expand, or **challenge** the scope. Vet the idea across four lenses, going only
   as deep as needed to de-risk the core uncertainty:
   - **Product & common sense** — does this make sense to build? Real value, comparable products,
     simpler alternatives.
   - **UX standards** — expected behavior, and the TV-first reality (10-foot UI, D-pad, large /
     high-contrast targets, readable at 3–5 m).
   - **Technical viability** — does the approach work on this stack (Astro 6 / React 19 / Zustand 5 /
     Firestore) **and** the **Chrome 87 floor** + target browsers? Use **context7** for live library
     docs and **WebSearch** for standards / browser-compat data — don't guess at support.
   - **Approach** — if the posed approach is weak, propose a better one with trade-offs.
     Keep going until you can reach a verdict; name what stays uncertain rather than over-investigating.

4. **Reach a verdict.** One of `viable` · `viable-with-changes` · `not-viable` ·
   `needs-more-investigation`, with the options & trade-offs and a recommended approach behind it.

5. **Write the spike — always, even for standalone brainstorming.** Copy
   [`docs-spikes/_TEMPLATE_spike.md`](../../docs-spikes/_TEMPLATE_spike.md) to
   `docs-spikes/NN_spike_<short-name>.md` (zero-padded spike-local `NN`; kebab-case
   `<short-name>` — reuse it if this graduates to `/spec`). Fill every section per the template, set
   the `Verdict` and today's date.

6. **Inform** the user of the artifact's path, the **verdict**, and the suggested next step. If the
   verdict says proceed, the next step is `/spec` (which will read this spike as grounding) — but
   `/spike` stops here; it never writes the spec.

## Rules

- **Investigation-only.** No app code, no dev server, no spec/plan content — acceptance criteria,
  data-model contracts, and the build plan belong to `/spec` and `/plan`. The output is the spike
  artifact only.
- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md).
- **Time-box.** De-risk the key uncertainty; don't exhaustively research everything. Surface residual
  risk in **Open questions & risks** for `/spec` to resolve.
- Don't restate the template's structure — copy it and fill it.
