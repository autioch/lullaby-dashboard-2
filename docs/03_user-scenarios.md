# User Scenarios

The common ways LaunchPad is actually used, from the user's side. Each scenario is a short **user
story**, the **steps** to perform it, and the **expected** user-visible outcome.

They serve two purposes: product context for `/spec`, and the **manual regression script** that
[qa.md](qa.md#user-story-regression) points to — after a behaviour-affecting change, walk the
relevant scenarios (on the TV user agent) and confirm each **Expected**. Stable `S#` ids let other
docs reference a scenario precisely.

## Roles

- **Parent / owner** — sets the app up, edits content, manages the routine. The only role that
  unlocks and edits.
- **Family member** (incl. children) — operates the dashboard day to day: picks a mission, checks
  off objectives.
- **Anyone in the room** — glances at the shared screen without touching it.

## Context — the evening routine

A family displays LaunchPad on a TV. Mission: **Orbital Sleep Station** — brush teeth, put on
pyjamas, pack the school bag, feed the dog, turn off electronics. Walking past, anyone sees what's
left, overall progress, and the time; the screen is the shared source of truth, so the family
divides the work without asking "did anyone do this already?". The scenarios below are the moments
inside that loop.

## Scenarios

### S1 — Unlock the dashboard

**Story:** As a **parent**, I want to unlock the app with the household password so that the family
dashboard stays private to us.

**Steps:**

1. Open the app on the TV while unauthenticated.
2. On the auth gate, type the household password and submit.

**Expected:** Correct password → the dashboard (or the mission picker) loads. Wrong password → an
inline error and no access. _(Verify with `PUBLIC_SKIP_AUTH` off — see [qa.md](qa.md#masking-traps).)_

### S2 — Pick a mission

**Story:** As a **family member**, I want to choose which routine is active so that the dashboard
shows tonight's objectives.

**Steps:**

1. With no mission selected the picker opens on its own; otherwise open it via the **Mission** menu
   icon.
2. Select a mission from the list.

**Expected:** The picker closes and the dashboard shows that mission — its name, its objectives, and
its progress.

### S3 — Complete objectives (the daily loop)

**Story:** As a **family member**, I want to check off objectives as we do them so that everyone
sees what's left.

**Steps:**

1. On the dashboard, mark an objective as done.

**Expected:** The objective is de-emphasised / drops out of the remaining list, the progress
indicator and status message advance, and the count reflects only the visible objectives. The change
persists across a reload (within the mission's retention window — see S8).

### S4 — Glance from across the room

**Story:** As **anyone in the room**, I want to read the routine's state from 3–5 m so that I can
coordinate without touching the screen.

**Steps:**

1. Stand back from the TV and look at the dashboard.

**Expected:** Remaining objectives, overall progress, and the time/clock are legible at distance —
large, high-contrast, uncluttered.

### S5 — Restart the routine

**Story:** As a **parent**, I want to reset the routine so that we can run it again from scratch.

**Steps:**

1. Click the **Restart** menu icon and confirm the prompt.

**Expected:** Every objective returns to unchecked, progress resets to zero, and the timer resets.
The selected mission stays the same.

### S6 — Switch language

**Story:** As a **parent**, I want to switch the interface language so that it fits our household.

**Steps:**

1. Open **Settings** and choose Polish or English.

**Expected:** The whole UI re-renders in the chosen language and the panel closes. No missing strings
and no overflow at TV type sizes.

### S7 — Edit content

**Story:** As a **parent**, I want to create, rename, delete, and reorder missions / objective
groups / objectives so that the routines match real life.

**Steps:**

1. Open the **Edit** overlay.
2. Make a change — add an objective, rename a group, reorder, or delete one (confirming deletes).

**Expected:** The change saves through the write API and appears on the dashboard via realtime sync.
A logged-out or expired session surfaces a re-auth prompt rather than failing silently.
_(Verify with `PUBLIC_SKIP_AUTH` off.)_

### S8 — Resume, and the automatic daily reset

**Story:** As a **family member**, I want the board to remember progress during a run but start
fresh for the next one so that I don't reset it by hand every day.

**Steps:**

1. Check some objectives, then reload the page.
2. Let the mission's retention window pass (or come back the next day) and reopen the app.

**Expected:** Within the retention window the selected mission and checked objectives survive
reloads. Once it expires, checked state is cleared and the routine starts fresh.
