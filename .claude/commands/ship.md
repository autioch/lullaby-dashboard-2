---
description: Stage all changes, commit, and push — fast, no summary
allowed-tools: Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*)
---

Commit and push to the current branch (`main`) **as fast as possible**. This is the single,
canonical commit+push action: the feature-pipeline commands delegate their per-step commit here
instead of hand-rolling git, and it doubles as the ad-hoc "stage everything and push" utility.

The husky hooks **are** the gate and run automatically: pre-commit (`lint-staged`) auto-fixes
staged files, pre-push (`npm run ci`) is the full check. Speed comes from never duplicating what
the hooks already do — **not** from skipping them.

Rules:

- **Staging.** A quick `git status --short` tells you which case you're in: if changes are
  **already staged** (a pipeline step staged just its files), commit exactly those — do NOT
  `git add -A`. If **nothing is staged**, `git add -A` to stage everything.
- **One Bash call** where you can: `git commit -m "…" -m "…" && git push` (already-staged case), or
  `git add -A && git commit … && git push` (stage-all case). Use the **Bash** tool (bash, not
  PowerShell). Plain `git commit -m "subject" -m "body"` works — no temp message files, no
  PowerShell here-strings.
- **Never pre-run validation** — no `npm run ci` / `npm run verify` / `npm run build`, screenshots,
  or `git log`/status explanations. The hooks cover it.
- **Never bypass the hooks** — no `--no-verify`. If pre-commit or pre-push blocks, fix the cause and
  re-run; don't work around it.
- **Message.** Conventional Commits style. Subject = `$ARGUMENTS` if given, else inferred from the
  staged changes; add a brief what & why body when the change isn't self-evident. Always end with a
  second `-m` trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- Project policy: commit directly to `main`. No branch, no PR.
- **Output:** a single line — the short commit hash + subject + "pushed". Nothing else. No summary,
  no file list, no next steps.
- If a step fails, stop and report just the error.
