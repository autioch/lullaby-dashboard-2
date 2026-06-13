# Dashboard Specification

What the dashboard renders **today**. Design that was specced but isn't built yet — theme system,
mission timer, deadline, records, completed-objective collapse — lives in the roadmap's Future
section, not here. See [06_roadmap.md](06_roadmap.md#dashboard-design-specced-not-yet-built).

## Layout

`Dashboard.tsx` lays out three regions — main, aside, footer:

### Main — objective list

- Objective groups in mission order; hidden groups and hidden objectives are skipped.
- Each objective row toggles done on click/tap — shows a ✓ and a de-emphasis style
  (`c-objective--checked`) when checked.
- Per-objective color comes from the `colors` collection.
- Completed objectives stay in place — de-emphasized only, **not** reordered or collapsed.

### Aside

- **Video** — YouTube embed, shown only when the mission has a `youtubeUrl`.
- **Clock** — wall-clock `HH:MM`, font auto-sized to its container.
- **Menu** — icon row: Mission select · Restart (confirm → reset mission + timer state) · Edit
  (content editor) · Settings.

### Footer — progress bar

- Visual track + fill; fill width = percent complete.
- Generated status message keyed off percent: none → begin (<25) → middle (<50) → most (<90) →
  almost (<100) → done (100).
- A `completed / total / percent` count.

## Overlays

- **Mission select** — pick the active mission.
- **Settings** (app options) — switch language (en / pl).
- **Content editor** — create / rename / delete / reorder missions, objective groups, and
  objectives (parent-only, via the write API).

## Completion celebration

When **visible progress reaches 100%**, a presentation-only celebration (`CompletionCelebration`)
paints a CSS-only sequence of **several staggered fireworks bursts** (varied screen positions and
sizes, ~3.4 s) over a **glow that grows from a point to cover the screen** and then settles —
full-bleed **behind** the dashboard content (`pointer-events: none`, so the list/menu stay
clickable). It renders only at 100%, so dropping below removes it and re-completing replays the
sequence. `prefers-reduced-motion` viewers get the static glow only. Visual only — no sound, no
added text (the footer status still reads "Success!").

## Theming today

Presentation theming is limited to **per-objective colors** (the `colors` collection). The themed
mission vocabularies and presentation skins once specced here are not built — see the roadmap.
