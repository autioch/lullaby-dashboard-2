---
description: Stage all changes, commit, and push — fast, no summary
allowed-tools: Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*)
---

Stage all changes, commit, and push to the current branch (`main`) as fast as possible.

Rules:
- Do it in as few tool calls as possible — chain `git add -A && git commit -m "…" && git push` in a single Bash call when you can.
- Use the **Bash** tool (bash, not PowerShell). Plain `git commit -m "subject" -m "body"` works — do NOT write temp message files or use PowerShell here-strings.
- Commit message: Conventional Commits style. If `$ARGUMENTS` is given, use it as the subject; otherwise infer a concise subject from the diff. End with a second `-m` trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- Project policy: commit directly to `main`. No branch, no PR.
- Do NOT run the validation suite, screenshots, or `git log`/status explanations unless a command fails.
- Output: a single line — the short commit hash + subject + "pushed". Nothing else. No summary, no file list, no next steps.
- If a step fails, stop and report just the error.
