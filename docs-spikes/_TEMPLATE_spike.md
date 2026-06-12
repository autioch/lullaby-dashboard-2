# <Idea name> — Spike

> **Artifact:** `docs-spikes/NN_spike_<short-name>.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable` | `viable-with-changes` | `not-viable` | `needs-more-investigation`
> **Owner:** <name> · **Created:** YYYY-MM-DD
> **Graduated to:** [spec](../docs-journal/NN_spec_<short-name>.md) _(fill once/if this idea proceeds)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

The one question this spike answers — what we're de-risking. One or two lines.

## Idea as posed

The raw idea as the owner stated it, before any reshaping. Keep their words.

## Findings

### Product & common sense

Does this make sense to build? Industry norms, comparable products, real user value, simpler
alternatives that get most of the benefit.

### UX standards

How it should behave to meet UX expectations — and the TV-first reality: 10-foot UI, D-pad
navigation, large/high-contrast targets, readable at 3–5 m, minimal clutter.

### Technical viability

Does the approach work on this stack (Astro 6 / React 19 / Zustand 5 / Firestore) **and** the
SmartTV **Chrome 87 floor** + target browsers? Note specific API/CSS/JS support gaps, library
support (cite docs consulted), and data-architecture fit.

## Options & trade-offs

The approaches considered, each with its cost/benefit. Mark the recommended one.

- **Option A — …** — pros / cons.
- **Option B — …** — pros / cons.

## Verdict & recommendation

The call, matching the `Verdict` above, plus the recommended approach in a few lines. If
`not-viable`, say why plainly — that is a successful spike outcome.

## Suggested scope

How the idea changed through the spike: what to keep, cut, defer, or reshape for the spec.

## Open questions & risks

What is still uncertain and would need confirming during `/spec` or build. Don't over-investigate
here — name it.

- [ ] …

## Next step

`/spec` (reuse the `<short-name>`) · more investigation · drop. State which and why.

## References

Docs, standards, library pages, and comparable products consulted (links).
