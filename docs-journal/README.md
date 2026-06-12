# Feature artifacts

This folder holds **only** templates and per-feature artifacts — no documentation. The pipeline
guide and shared rules live in [docs/feature-workflow.md](../docs/feature-workflow.md).

- `_TEMPLATE_<command>.md` — source template each pipeline command copies for its artifact.
- `NN_<command>_<short-name>.md` — artifacts for one feature (zero-padded `NN`, kebab-case
  `<short-name>` shared across that feature's artifacts).
