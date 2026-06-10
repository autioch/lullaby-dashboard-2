# Feature specs

Durable specs for features built from scratch via Q&A. Each spec is the agreed contract
before any code is written, and stays in the repo as the record of _what_ and _why_.

## Convention

- One file per feature: `NN-kebab-name.md` (e.g. `01-mission-streaks.md`), `NN` is a
  zero-padded sequence.
- Copy [`_TEMPLATE.md`](_TEMPLATE.md) to start. Fill it through the elicitation Q&A.
- `Status` moves `draft` → `agreed` (all open questions resolved) → `implemented`.
- Keep it current: when the build deviates from the spec, update the spec.

## Workflow

See **"Planning a Feature"** in
[`.github/copilot-instructions.md`](../../.github/copilot-instructions.md), or run the
`/spec` command to drive the elicitation loop.
