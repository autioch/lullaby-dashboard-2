# Roadmap

The shipped MVP scope, what it deliberately leaves out, and the ideas queued for later.

## MVP

### Included

- [x] Mission selection
- [x] Objective completion
- [x] Progress tracking
- [x] Remaining objectives
- [x] Status messages
- [x] Themes
- [x] Mission timer
- [x] Completion celebration
- [x] Best times

### Excluded

Deliberate non-goals for the MVP — decisions, not a to-do list.

- Authentication
- Accounts
- Social features
- User-created themes
- AI-generated content
- Monetization
- Multi-household support
- In-progress state of an objective
- History tracking

### Analytics intent

The timer and best-times features exist to:

- Measure improvement
- Encourage routine optimization
- Encourage gradual improvement
- Support future analytics

## Future

### Tooling & infrastructure

- [ ] Add Dependabot
- [ ] Add Sentry
- [ ] Add license + CODEOWNERS
- [ ] Evaluate head/meta management (is React Helmet still relevant under Astro?)
- [x] Add Vitest + a few tests on stores/hydration logic
- [ ] Component-test + end-to-end layers — see qa.md "deferred gaps"

### Features & UX

- [ ] Dark/light mode
- [ ] Animations
- [ ] Checklist: reset a single objective, turning the list into repeatable chores
- [ ] Display a task's completion time (e.g. when the cat got its medicine and can next be fed)
- [ ] Complete the full Firebase authorization
- [ ] AI: auto-suggest groups and objectives from the mission description

### Product & onboarding

- [ ] Product landing/description page (free)
- [ ] Getting-started guide for new users
- [ ] Default lists for new users

### Reliability & tech debt

- [ ] Handle the case where the app is redeployed while a user still has an old version open
- [ ] Hunt down logic living in components or hooks and move it into stores or testable utils

### Process & pipeline

Improvements to the feature pipeline itself (the `/spec`→`/plan`→`/implement`→`/adjust`→`/retro` commands), surfaced in the feature 01 retro.

- [ ] Add a distinct UI/UX design step before/within `/spec` — MVP-first, complexity driven by how the user operates the app (TV-readability lens), not derived from the data shape (today only the "MVP-first" wording exists, not a design pass)
- [ ] Add a distinct, non-skippable security/maintenance step after `/implement` (today it's only a per-trigger `/security-review` reference inside the review step, which can be silently skipped)
