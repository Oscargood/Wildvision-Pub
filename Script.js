// Get references to the elements
const daySlider = document.getElementById('daySlider');
const selectedDay = document.getElementById('selectedDay');
const weatherMap = document.getElementById('weatherMap');
const overlayToggle = document.getElementById('overlayToggle');

// Calculate today's date and the next 5 days
const today = new Date();
const forecastDates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);  // Add i days to today
    return date.toISOString().split('T')[0];  // Format as YYYY-MM-DD
});

// Function to update the map based on the slider value (day index)
function updateMap(dayIndex) {
    const date = forecastDates[dayIndex];
    weatherMap.src = `nz_weather_${date}.html`; // Load the corresponding map for the selected day
    selectedDay.textContent = `Day ${dayIndex + 1}`; // Update the text for the selected day
}

// Function to toggle overlay visibility
function toggleOverlay() {
    if (overlayToggle.checked) {
        weatherMap.src = weatherMap.src.split('?')[0];  // Remove the query parameter if present
    } else {
        weatherMap.src = weatherMap.src.split('?')[0] + '?no-overlay';  // Add a query parameter to hide the overlay
    }
}

// Event listeners
daySlider.addEventListener('input', (event) => {
    updateMap(event.target.value);  // Update the map when the slider is changed
});

overlayToggle.addEventListener('change', toggleOverlay);  // Toggle the overlay on or off

// Initial map load for the current date
updateMap(0);
