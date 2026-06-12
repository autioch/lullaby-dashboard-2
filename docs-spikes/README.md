# Spikes

Investigation-only **feasibility & discovery** artifacts written by `/spike` — each de-risks one
idea (technical viability on the TV / Chrome 87 floor, UX, product sense) and ends in a **verdict**
_before_ any spec exists. This folder is a sibling of [`docs-journal/`](../docs-journal/) (the
frozen feature artifacts); the command and shared rules live in
[docs/feature-workflow.md](../docs/feature-workflow.md).

Spikes have their **own local `NN` sequence**, kept separate here because many never become
features — they must not burn feature numbers in `docs-journal/`. If a spike graduates, `/spec`
allocates the next **feature** `NN` and reuses the spike's kebab-case `<short-name>`, so the thread
stays traceable.

- `_TEMPLATE_spike.md` — source template `/spike` copies for its artifact.
- `NN_spike_<short-name>.md` — one spike (zero-padded spike-local `NN`).
