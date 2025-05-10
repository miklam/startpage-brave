// ==========================================================================
// main.js for Brave Startpage
// Handles populating the Foundry link and the icon/name link lists.
// Last updated: May 10, 2025
// ==========================================================================

/**
 * Main initialization function.
 * Waits for the DOM to be fully loaded before executing.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Set the href for the main Foundry VTT link/button
    const foundryLinkElement = document.getElementById('foundry-link-big');
    // Check if the foundryVTT_url variable is defined (should be in config.js)
    if (foundryLinkElement && typeof foundryVTT_url !== 'undefined') {
        foundryLinkElement.href = foundryVTT_url;
    } else if (!foundryLinkElement) {
        console.warn("HTML Element with ID 'foundry-link-big' not found.");
    } else {
        console.warn("'foundryVTT_url' is not defined in config.js or is undefined.");
    }

    // Populate the Google Services list
    // Check if the googleServices array is defined (should be in config.js)
    if (typeof googleServices !== 'undefined') {
        populateIconNameList('google-services-list', googleServices);
    } else {
        console.warn("'googleServices' array is not defined in config.js.");
        // Optionally provide feedback in the UI if the list element exists
        const googleList = document.getElementById('google-services-list');
        if (googleList) googleList.innerHTML = '<li>Google services configuration missing.</li>';
    }

    // Populate the Finance Links list
    // Check if the financeLinks array is defined (should be in config.js)
    if (typeof financeLinks !== 'undefined') {
        populateIconNameList('finance-links-list', financeLinks);
    } else {
        console.warn("'financeLinks' array is not defined in config.js.");
        // Optionally provide feedback in the UI if the list element exists
        const financeList = document.getElementById('finance-links-list');
        if (financeList) financeList.innerHTML = '<li>Finance links configuration missing.</li>';
    }
});

/**
 * Populates a <ul> element with items, each containing an icon and a name, linked to a URL.
 * @param {string} listId The ID of the <ul> element to populate (e.g., 'google-services-list').
 * @param {Array<object>} dataArray The array of link objects from config.js.
 * Each object in dataArray should have 'name', 'url', and 'icon' properties.
 */
function populateIconNameList(listId, dataArray) {
    const listElement = document.getElementById(listId);

    // Check if the target <ul> element exists in the HTML
    if (!listElement) {
        console.error(`HTML element with ID #${listId} not found. Cannot populate list.`);
        return;
    }

    listElement.innerHTML = ''; // Clear any placeholder content (e.g., loading message)

    // Check if the provided data is actually an array
    if (!Array.isArray(dataArray)) {
        console.error(`Data for list #${listId} is not an array. Received:`, dataArray);
        listElement.innerHTML = '<li>Error: Link data is not in the correct format.</li>';
        return;
    }

    // Loop through each item in the data array and create the HTML elements
    dataArray.forEach(item => {
        // Validate that each item has the necessary properties
        if (!item || typeof item.name !== 'string' || typeof item.url !== 'string' || typeof item.icon !== 'string') {
            console.warn(`Skipping an item in list #${listId} due to missing or invalid data:`, item);
            return; // Skip this item and continue with the next
        }

        // Create list item
        const listItem = document.createElement('li');

        // Create link element
        const link = document.createElement('a');
        link.href = item.url;
        link.target = "_blank"; // Open in a new tab
        link.rel = "noopener noreferrer"; // Security best practice for target="_blank"
        link.title = item.name; // Adds a tooltip with the name on hover

        // Create icon image
        const iconImg = document.createElement('img');
        iconImg.src = item.icon;
        iconImg.alt = item.name; // Important for accessibility (screen readers)

        // Create span for the name text
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;

        // Assemble the link: icon and name go inside the anchor tag
        link.appendChild(iconImg);
        link.appendChild(nameSpan);

        // Add the complete link to the list item, and list item to the list
        listItem.appendChild(link);
        listElement.appendChild(listItem);
    });
}
