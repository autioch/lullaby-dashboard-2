# Dashboard Specification

What the dashboard renders **today**. Design that was specced but isn't built yet — theme system,
deadline, records — lives in the roadmap's Future section, not here. See
[06_roadmap.md](06_roadmap.md#dashboard-design-specced-not-yet-built).

## Layout

`Dashboard.tsx` lays out three regions — main, aside, footer:

### Main — objective list

- Objective groups in mission order; hidden groups and hidden objectives are skipped.
- Each objective row toggles done on click/tap — shows a ✓ and a de-emphasis style
  (`c-objective--checked`) when checked.
- Per-objective color comes from the `colors` collection.
- Completed objectives sink to the **bottom of their own group** (presentation-only — authored
  order in Firestore is unchanged) and render in a **compact, de-emphasized** style, but stay
  individually visible and clickable so they can be un-checked. Un-checking restores a row to its
  authored position, full size. The reorder/compact is instant (no animation).

### Aside

- **Video** — YouTube embed, shown only when the mission has a `youtubeUrl`.
- **Clock** — wall-clock `HH:MM`, font auto-sized to its container.
- **Timer** — elapsed mission duration (`MM:SS`, rolling to `H:MM:SS` past an hour), shown under the
  Clock. Starts on the first checked objective; auto-pauses when a modal covers the launchpad, the
  page is hidden, or the mission is switched; freezes the final time at 100%; the run resets on
  Restart. While a run is in progress the readout is a **toggle button**: click or Enter pauses /
  resumes by hand (a sticky override of the auto-pause, persisted per mission). Checking or
  unchecking an objective also resumes a manually paused run (the family is back at it). Hover or focus reveals
  the action icon (pause while running, play while paused); when paused, a faint pause **watermark**
  stays visible so the stopped state is never silent. Below it, a smaller **`Best …`** line shows the
  mission's best completion time, once one exists (the best persists across Restart).
- **Menu** — icon row: Mission select · Restart (confirm → reset mission checks + current run; the
  best record is kept) · Edit (content editor) · Settings.

### Footer — progress bar

- Visual track + fill; fill width = percent complete.
- Generated status message keyed off percent: none → begin (<25) → middle (<50) → most (<90) →
  almost (<100) → done (100).
- A `completed / total / percent` count.

## Overlays

- **Mission select** — pick the active mission.
- **Settings** (app options) — switch language (en / pl).
- **Content editor** — create / rename / delete / reorder missions, objective groups, and
  objectives (parent-only, via the write API). Each mission's edit screen also has a **Reset best
  time** action (shown only when that mission has a best), so records are cleared per mission.

## Completion celebration

When **visible progress reaches 100%**, a presentation-only celebration (`CompletionCelebration`)
paints a CSS-only sequence of **several staggered fireworks bursts** (varied screen positions and
sizes, ~3.4 s) over a **glow that grows from a point to cover the screen** and then settles —
full-bleed **behind** the dashboard content (`pointer-events: none`, so the list/menu stay
clickable). It renders only at 100%, so dropping below removes it and re-completing replays the
sequence. `prefers-reduced-motion` viewers get the static glow only. No sound (the footer status
still reads "Success!"). When the completing run **beats the mission's previous best time**, a
transient, pointer-transparent **"New best!"** banner also shows, painted above the content for
legibility (the first-ever completion sets the record silently).

## Theming today

Presentation theming is limited to **per-objective colors** (the `colors` collection). The themed
mission vocabularies and presentation skins once specced here are not built — see the roadmap.
