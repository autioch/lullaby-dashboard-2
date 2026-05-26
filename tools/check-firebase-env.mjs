const requiredKeys = [
    "PUBLIC_FIREBASE_API_KEY",
    "PUBLIC_FIREBASE_AUTH_DOMAIN",
    "PUBLIC_FIREBASE_PROJECT_ID",
    "PUBLIC_FIREBASE_STORAGE_BUCKET",
    "PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "PUBLIC_FIREBASE_APP_ID",
];

const missingKeys = requiredKeys.filter((key) => !process.env[key]);

if (missingKeys.length > 0) {
    console.error(
        "Missing required Firebase environment variables:",
        missingKeys.join(", "),
    );
    console.error("Please add these values to your .env file before building.");
    process.exit(1);
}

console.log("Firebase environment variables are present.");
