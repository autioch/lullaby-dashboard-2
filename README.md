# LaunchPad

## Overview

LaunchPad is a shared-screen family mission dashboard that transforms recurring household routines into cooperative missions.

The application is designed primarily for display on TVs, tablets, smart displays, or wall-mounted screens where multiple family members can view and interact with the same mission.

Unlike traditional checklist applications focused on individual productivity, LaunchPad focuses on:

- Shared visibility
- Cooperation
- Coordination
- Progress awareness
- Reduced verbal reminders
- Making repetitive routines enjoyable

The application should feel closer to a mission control center than a task manager.

---

# Core Product Vision

The application answers:

> What do we still need to accomplish together before reaching our goal?

rather than:

> What tasks should I do?

Examples:

- Morning preparation before school
- Evening routine before bedtime
- Travel preparation before departure
- Weekly cleaning
- Preparing for guests
- Birthday party preparation

---

# Primary User Scenario

## Evening Routine

A family displays LaunchPad on a TV.

Mission:

```text
Orbital Sleep Station
```

Objectives:

```text
☐ Brush teeth
☐ Put on pajamas
☐ Prepare school backpack
☐ Feed the dog
☐ Turn off electronics
```

Family members walk by the screen and immediately see:

- Remaining objectives
- Current progress
- Mission status
- Remaining time until bedtime

They naturally divide work without asking:

```text
Did anyone do this already?
```

The dashboard becomes the shared source of truth.

---

# Design Principles

## Shared First

The application is optimized for groups, not individuals.

---

## TV First

The application should remain usable from 3–5 meters away.

Requirements:

- Large typography
- High contrast
- Minimal clutter
- No dense forms
- No small controls

---

## Progress Over Completion

The most important information is:

1. What remains
2. How much progress has been made
3. How much time remains

Completed tasks should be visually minimized.

---

## Mission Over Checklist

The UI should communicate:

```text
Mission
Progress
Objectives
Launch Status
```

instead of:

```text
Checklist
Tasks
Productivity
```

---

## Cooperative Not Competitive

The application should encourage teamwork.

Avoid:

- Individual rankings
- Individual leaderboards
- Individual scores

Prefer:

- Shared achievements
- Family records
- Team accomplishments

---

# Functional Requirements

# Mission

A mission is a reusable routine.

Example:

```json
{
  "id": "evening",
  "name": "Orbital Sleep Station",
  "theme": "space",
  "stateRetentionHours": 12
}
```

---

# Objective

An objective is a single actionable item.

Example:

```json
{
  "id": "brush-teeth",
  "label": "Brush teeth",
  "estimatedDurationMinutes": 3
}
```

---

# Mission State

Mission state consists of:

```typescript
type MissionState = {
  missionId: string;
  startedAt: string | null;
  completedAt: string | null;
  completedObjectives: string[];
};
```

---

# Progress Calculation

Progress is:

```text
completedObjectives / totalObjectives
```

Example:

```text
8 / 12
67%
```

---

# Remaining Objectives

The UI must prioritize displaying:

```text
Objectives Remaining
```

over:

```text
Objectives Completed
```

Completed objectives should:

- move to bottom
- collapse
- fade visually

---

# Mission Status Messages

Status messages should be generated from progress percentage.

Example mapping:

| Progress | Message                      |
| -------- | ---------------------------- |
| 0%       | Crew boarding                |
| 25%      | Systems initializing         |
| 50%      | Mission proceeding nominally |
| 75%      | Final checks underway        |
| 90%      | Launch sequence started      |
| 100%     | Mission accomplished         |

Theme-specific versions may override these messages.

---

# Timer System

LaunchPad should track:

## Current Mission Duration

Example:

```text
Mission Time
12m 42s
```

Starts when first objective is completed.

---

## Deadline Countdown

Optional.

Example:

```text
Bedtime in
00:18:24
```

or

```text
School departure in
00:12:55
```

---

# Completion Celebration

When mission reaches 100%:

Display:

```text
MISSION ACCOMPLISHED
```

plus:

- animation
- celebratory message
- sound effect (optional)

Example:

```text
Orbit achieved.
```

---

# Best Time Tracking

Store best completion time per mission.

Example:

```json
{
  "missionId": "evening",
  "bestDurationSeconds": 672
}
```

Display:

```text
Current Mission
12m 45s

Best Mission
11m 12s
```

Purpose:

Encourage gradual improvement.

---

# Historical Data

Store mission completion history.

Example:

```typescript
type MissionHistoryEntry = {
  missionId: string;
  startedAt: string;
  completedAt: string;
  durationSeconds: number;
};
```

Used for future analytics.

---

# Theme System

Themes should alter presentation only.

Themes must NOT alter mission logic.

---

## Theme Interface

```typescript
type ThemeDefinition = {
  id: string;
  name: string;

  labels: {
    objectives: string;
    completed: string;
    remaining: string;
  };

  messages: {
    start: string;
    quarter: string;
    half: string;
    threeQuarter: string;
    final: string;
    completed: string;
  };

  assets: {
    backgroundImage?: string;
    iconSet?: string;
    soundPack?: string;
  };
};
```

---

## Initial Themes

### Space

Examples:

```text
Mission Control
Crew Boarding
Launch Ready
Orbit Achieved
```

---

### Minecraft Adventure

Examples:

```text
Village Preparation
Supplies Ready
Entering Cave
Diamond Expedition Complete
```

---

### Pirate Voyage

Examples:

```text
Crew Boarding
Raise the Sails
Leaving Port
Treasure Expedition Ready
```

---

# Dashboard Layout

The primary screen should contain:

---

## Header

```text
MISSION NAME
```

Example:

```text
ORBITAL SLEEP STATION
```

---

## Main Progress Area

Large visual progress indicator.

Must be visible from distance.

Example:

```text
████████░░░░
67%
```

---

## Mission Status

Example:

```text
Final checks underway
```

---

## Remaining Objectives

Example:

```text
☐ Brush teeth
☐ Put on pajamas
☐ Feed dog
```

Show only remaining objectives by default.

---

## Timing Section

Example:

```text
Mission Time: 12m 32s

Bedtime In: 17m 15s
```

---

## Records Section

Example:

```text
Best Launch
11m 12s
```

---

# Data Storage

Current implementation:

Firebase.

Recommended:

## Firestore

Collections:

```text
missions
missionHistory
themes
settings
```

---

# MVP Scope

## Included

- Mission selection
- Objective completion
- Progress tracking
- Remaining objectives
- Mission status messages
- Theme system
- Completion celebration
- Mission timer
- Best completion times
- History tracking
- TV-first layout

---

## Excluded

- Accounts
- Authentication
- Social sharing
- User-generated themes
- AI-generated content
- Monetization
- Multi-household support

---

# Future Features

## Task Claiming

Example:

```text
Feed Dog
Assigned to Dad
```

---

## Objective State Machine

States:

```typescript
enum ObjectiveState {
  Todo,
  InProgress,
  Done,
}
```

---

## Unlockable Themes

Unlock after mission milestones.

Example:

```text
Complete 25 missions
Unlock Pirate Theme
```

---

## Bonus Objectives

Optional side objectives.

Example:

```text
Bonus Objective:
Put away shoes.
```

---

## Family Profiles

Optional future enhancement.

Not required for MVP.

---

# Non-Functional Requirements

## Performance

Target:

- Initial load under 2 seconds
- Objective updates under 100ms

---

## Accessibility

- High contrast mode
- Keyboard navigation
- Large touch targets
- Color-independent status indicators

---

## Responsive Design

Optimized for:

- TV landscape
- Tablet landscape
- Desktop

Mobile support is secondary.

---

# Success Criteria

LaunchPad is successful when:

1. Family members look at the dashboard instead of asking what remains.
2. Routine completion time decreases over time.
3. Repeated verbal reminders are reduced.
4. Completing routines feels satisfying rather than burdensome.
5. Families voluntarily keep the dashboard visible during routines.

---

# Product Tagline

Turn everyday routines into shared missions.
