// ==========================================================================
// main.js for Brave Startpage
// Handles populating the Foundry link and the icon/name link lists.
// Last updated: May 10, 2025
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Set the href for the main Foundry VTT link/button
    const foundryLinkElement = document.getElementById('foundry-link-big');
    if (foundryLinkElement && typeof foundryVTT_url !== 'undefined') {
        foundryLinkElement.href = foundryVTT_url;
    } else if (!foundryLinkElement) {
        console.warn("Element with ID 'foundry-link-big' not found.");
    } else {
        console.warn("'foundryVTT_url' is not defined in config.js.");
    }

    // Populate the Google Services list
    if (typeof googleServices !== 'undefined') {
        populateIconNameList('google-services-list', googleServices);
    } else {
        console.warn("'googleServices' array is not defined in config.js.");
        const googleList = document.getElementById('google-services-list');
        if (googleList) googleList.innerHTML = '<li>Google services config missing.</li>';
    }

    // Populate the Finance Links list
    if (typeof financeLinks !== 'undefined') {
        populateIconNameList('finance-links-list', financeLinks);
    } else {
        console.warn("'financeLinks' array is not defined in config.js.");
        const financeList = document.getElementById('finance-links-list');
        if (financeList) financeList.innerHTML = '<li>Finance links config missing.</li>';
    }
});

/**
 * Populates a <ul> element with items, each containing an icon and a name, linked to a URL.
 * @param {string} listId The ID of the <ul> element to populate.
 * @param {Array<object>} dataArray The array of objects from config.js.
 * Each object should have 'name', 'url', and 'icon' properties.
 */
function populateIconNameList(listId, dataArray) {
    const listElement = document.getElementById(listId);

    if (!listElement) {
        console.error(`HTML element with ID #${listId} not found.`);
        return;
    }

    listElement.innerHTML = ''; // Clear any placeholder content

    if (!Array.isArray(dataArray)) {
        console.error(`Data for list #${listId} is not an array.`);
        listElement.innerHTML = '<li>Error: Data is not an array.</li>';
        return;
    }

    dataArray.forEach(item => {
        if (!item.name || !item.url || !item.icon) {
            console.warn(`Skipping item in list #${listId} due to missing data:`, item);
            return; // Skip this item if essential data is missing
        }

        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer"; // Good practice for security/performance
        link.title = item.name; // Shows name on hover (tooltip)

        const iconImg = document.createElement('img');
        iconImg.src = item.icon;
        iconImg.alt = item.name; // Important for accessibility

        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;

        link.appendChild(iconImg);
        link.appendChild(nameSpan);
        listItem.appendChild(link);
        listElement.appendChild(listItem);
    });
}
