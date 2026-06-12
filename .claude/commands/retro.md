---
description: Run a product-owner retrospective over a finished feature iteration and write a retro artifact
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(git log:*), Bash(git diff:*), Bash(git rev-parse:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), mcp__ccd_session_mgmt, Skill
---

Close out a development iteration: review the whole cycle —
spec → plan → implement → adjust — from its artifacts with every role weighing in, say
bluntly what worked and what didn't,
take the user's own read, then propose what to do next and write it all to a **retro** artifact.
This is the **wrap-up** of the lifecycle: the user reads it and decides the next move.
**Do not write app code or edit the contract artifacts** (spec, plan, implementation record,
adjustments) in this command. Besides the retro, it writes **only durable docs**, and only in
the reconcile phase (step 6) — never the frozen feature artifacts.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The feature to retro (path, `NN`, or name; may be empty): `$ARGUMENTS`

## Role

The **Product Owner leads** — but every role weighs in so the verdict sees all perspectives: the
**Solution Architect / Tech Lead** on plan fidelity, sequencing, and churn; the **Senior Fullstack
Developer** on what bit during the build; **Design** on the UX calls. Form the owner's blunt
verdict from those perspectives, gather the user's own read, then suggest next moves — never decide
them; leave the **Decision** to the user.

## Steps

1. **Locate the feature & read its whole paper trail.** Resolve `$ARGUMENTS` to a feature in
   `docs/features/` and read, in full and **read-only**: the **spec** (`NN_spec_<short-name>.md`),
   **plan** (`NN_plan_<short-name>.md`), **implementation record**
   (`NN_implement_<short-name>.md`), and every adjustments round (`NN_adjust_<short-name>-r*.md`).
   If `$ARGUMENTS` is
   empty or ambiguous, list the features that have an implementation record and ask which. These
   artifacts are the iteration's record — the retro reads them, never edits them.

2. **Reconstruct the signals.** From the artifacts plus git, gather the few facts that make the
   verdict concrete, not vibes:
   - **Plan fidelity** — did the build follow the plan, or did the implementation record's _Skipped / deferred_
     and any in-flight spec/plan edits show it diverging?
   - **Churn** — how many adjustment rounds, and were they genuine new requirements or rework of
     things the spec/plan should have caught up front?
   - **Loose ends** — deferred items, real-TV-only checks, follow-ups carried forward.

   Use `git log` / `git diff` over the feature's commits for scale; fall back to the
   implementation **session** (`mcp__ccd_session_mgmt` — `list_sessions`, then
   `search_session_transcripts` for the feature / its commits) only to recover what the artifacts
   don't carry. Artifacts are primary.

3. **Form the product owner's verdict — blunt.** Write the assessment in two short lists, **what
   went well** and **what to improve**, plus a one- or two-line bottom line. Less words, more
   direct: each bullet is a claim that traces to an artifact or commit — no hedging, no filler,
   no praise sandwich. Judge the _iteration_, not just the code: was the spec a real contract or
   did it leak decisions into `/adjust`? Did the plan sequence hold? Was churn avoidable? Present
   this verdict to the user before asking for theirs.

4. **Gather the user's own feedback.** Drive an `AskUserQuestion` loop (recommended option first)
   to get the user's read on the iteration — what they thought went well, what frustrated them,
   what they'd change about the process or the result. Offer concrete options drawn from your
   step-3 verdict, but always leave room for their own words. Keep going until their view is
   captured; don't put words in their mouth.

5. **Synthesize next moves.** With both reads in hand, propose **possible solutions / next
   actions** — concrete and prioritized, each tied to a problem found in step 2-4. Typical
   candidates: a follow-up `/spec` for descoped scope, a tooling or process tweak, tech-debt to
   schedule, or "nothing — ship as is." These are **suggestions**; the user decides. Don't start
   doing them.

6. **Reconcile the durable docs (full pass).** This is the iteration's backstop: the per-commit
   syncs should have kept the durable docs current, so this pass usually finds little — but run
   it repo-wide regardless. Walk the **doc-sync map** ([dev guide](../../docs/development.md#keeping-docs-in-sync))
   and audit each durable doc — CLAUDE.md, README.md, `docs/*.md` outside `features/`, the command
   files — against the **actual current code**, not against the artifacts (which may be optimistic).
   Fix every durable-doc statement the code now contradicts. **Code is the authority; the feature
   artifacts are only the checklist of where to look. Never edit the frozen feature artifacts.**
   Commit the durable-doc fixes via `/ship` (own commit), and note what was reconciled in the retro
   artifact's **Doc reconciliation** section. If nothing drifted, say so.

7. **Write the retro artifact.** Copy
   [`docs/features/_TEMPLATE_retro.md`](../../docs/features/_TEMPLATE_retro.md) to
   `docs/features/NN_retro_<short-name>.md` (**same `NN` and `<short-name>` as the spec**) and fill
   every section per the template, from steps 2–6 — leaving the **Decision** open for the user.
   Keep it terse — every claim traces to an artifact or commit. Stage it (`git add <paths>`) and run
   `/ship` — the canonical commit+push action — to commit and push (the husky pre-push hook runs
   `npm run ci`; never `--no-verify`).

8. **Inform** the user of the retro-artifact path, the one-line verdict, and the top suggested next
   action(s) so they can decide. No report or summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, don't-duplicate, ask-don't-invent.
- **Read-only on the frozen artifacts:** the retro never edits the spec, plan, implementation
  record, or adjustments — it reviews them. It _does_ write the retro and, in the reconcile phase,
  the durable docs.
- **No app code.** The retro names problems, proposes moves, and reconciles durable docs to match
  the code — it does not change app code. Requirement changes are made by `/adjust`, new scope by
  `/spec` — each a separate, user-chosen step.
- **Blunt, not vague.** Every assessment bullet must point at evidence (an artifact line, a churn
  count, a deferred item). Cut praise and criticism that doesn't trace to something.
- The retro is the iteration's closing record — capture the user's feedback faithfully and leave
  the **Decision** for them. Never invent what they want to do next — ask, then record it.
