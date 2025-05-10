// ==========================================================================
// config.js for Brave Startpage
// ==========================================================================

// --- Foundry VTT Link ---
const foundryVTT_url = "http://83.251.196.97:30000/join";

// --- Google Services ---
// For each service, provide:
//   name: Display name (will be used as alt text for icon and for tooltip)
//   url: The actual URL for the service
//   icon: Path to the SVG/PNG icon file (you'll need to add these to your asset folder)
const googleServices = [
    {
        name: "Google Calendar",
        url: "https://calendar.google.com/",
        icon: "asset/icons/google/calendar.svg" // Placeholder - update with your actual icon path
    },
    {
        name: "Google Drive",
        url: "https://drive.google.com/",
        icon: "asset/icons/google/drive.svg"     // Placeholder
    },
    {
        name: "Google Keep",
        url: "https://keep.google.com/",
        icon: "asset/icons/google/keep.svg"      // Placeholder
    },
    {
        name: "Google Maps",
        url: "https://www.google.com/maps/", // As you provided
        icon: "asset/icons/google/maps.svg"        // Placeholder
    },
    {
        name: "Google Photos",
        url: "https://photos.google.com/", // As you provided
        icon: "asset/icons/google/photos.svg"      // Placeholder
    }
];

// --- Finance Links ---
// Similar structure: name, url, and icon path
const financeLinks = [
    {
        name: "Budget Spreadsheet", // More descriptive name
        url: "https://docs.google.com/spreadsheets/d/1ysoJcr2J0Tx0bMlGVVw5fr_dCdHJiI5YBNpFZSsGIc8/edit?resourcekey=&gid=586151987#gid=586151987",
        icon: "asset/icons/finance/gsheet.svg"   // Placeholder (e.g., a generic sheet icon)
    },
    {
        name: "Budget Input Form", // More descriptive name
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeZRyKUPArE-ne0QiA1dW7fwAjWtFMUxuVik2ZOPhTefWZpTg/viewform",
        icon: "asset/icons/finance/gform.svg"    // Placeholder (e.g., a generic form icon)
    }
];

// Note: The 'userName' variable is not needed here as we excluded the header.
// Note: The old 'cards' array structure is not used for this simplified page.
