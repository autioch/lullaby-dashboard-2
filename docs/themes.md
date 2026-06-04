# Theme System

Themes affect presentation only.

Themes must never alter mission logic.

## Theme Definition

```ts
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

## Initial Themes

### Space

- Mission Control
- Crew Boarding
- Launch Ready
- Orbit Achieved

### Minecraft Adventure

- Village Preparation
- Supplies Ready
- Entering Cave
- Expedition Complete

### Pirate Voyage

- Crew Boarding
- Raise the Sails
- Leaving Port
- Treasure Expedition Complete
