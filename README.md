# Lullaby Dashboard 2

Small Astro-based dashboard app named Lullaby dashboard.

What it does

- loads a set of predefined routines from configuration.json
- shows a selectable list of routines
- displays: a checklist of tasks, an embedded YouTube video, a live clock

## Development

Dev server: `npm run dev`
In the browser: http://localhost:4322/lullaby-dashboard-2

## Firebase configuration

This app can load its dashboard data from Firebase Firestore instead of the local `public/configuration.json` file.

1. Create a Firebase project named `lullaby-dashboard`.
2. Add a Web app in Firebase and enable Firestore.
3. In Firestore, create a collection named `dashboard` and a document named `configuration`.
4. Add a field named `savedLists` to that document and paste the same structure as the local `public/configuration.json` file.
5. Create a `.env` file in the project root and set the following values:

```env
PUBLIC_FIREBASE_API_KEY=your_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=your_project_id
PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
PUBLIC_FIREBASE_APP_ID=your_app_id
```

The app will use Firebase when those public env vars are configured. The local JSON fallback is disabled, and the build will fail if required Firebase env vars are missing.

## Configuration push script

Use the script below to inject the local `public/configuration.json` into Firebase Firestore:

```bash
npm run firebase:push-config
```

The script reads `public/configuration.json` and writes it to Firestore at `dashboard/configuration`.

## Tech stack

- Astro
- React
- Zustand
- Firebase
