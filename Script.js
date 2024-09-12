// Get references to the elements
const daySlider = document.getElementById('daySlider');
const selectedDay = document.getElementById('selectedDay');
const weatherMap = document.getElementById('weatherMap');
const overlayToggle = document.getElementById('overlayToggle');

// Array of dates corresponding to each day
const forecastDates = [
    '2024-09-12',  // Day 1
    '2024-09-13',  // Day 2
    '2024-09-14',  // Day 3
    '2024-09-15',  // Day 4
    '2024-09-16'   // Day 5
];

// Function to update the map based on the slider value (day index)
function updateMap(dayIndex) {
    const date = forecastDates[dayIndex];
    weatherMap.src = `nz_weather_${date}.html`; // Load the corresponding map for the selected day
    selectedDay.textContent = `Day ${parseInt(dayIndex) + 1}`; // Update the text for the selected day
}

// Function to toggle overlay visibility
function toggleOverlay() {
    if (overlayToggle.checked) {
        weatherMap.src += '';  // Reload the iframe to turn the overlay on
    } else {
        weatherMap.src += '?no-overlay';  // You could add a query parameter to simulate turning off the overlay
    }
}

// Event listeners
daySlider.addEventListener('input', (event) => {
    updateMap(event.target.value);  // Update the map when the slider is changed
});

overlayToggle.addEventListener('change', toggleOverlay);  // Toggle the overlay on or off

// Initial map load for Day 1
updateMap(0);