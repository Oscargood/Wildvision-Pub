// Get references to the elements
const daySlider = document.getElementById('daySlider');
const selectedDay = document.getElementById('selectedDay');
const weatherMap = document.getElementById('weatherMap');
const overlayToggle = document.getElementById('overlayToggle');

// Get today's date and initialize the forecast dates array
const today = new Date();
const numDays = 5;  // Number of days to forecast
const forecastDates = Array.from({ length: numDays }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);  // Add i days to today
    return date.toISOString().split('T')[0];  // Format as YYYY-MM-DD
});

// Function to update the map based on the slider value (day index)
function updateMap(dayIndex) {
    const date = forecastDates[dayIndex];
    weatherMap.src = `nz_weather_${date}.html`; // Load the corresponding map for the selected day
    selectedDay.textContent = `Day ${dayIndex + 1} (${date})`; // Update the text for the selected day
}

// Event listeners
daySlider.addEventListener('input', (event) => {
    const dayIndex = parseInt(event.target.value, 10); // Get the slider value
    updateMap(dayIndex);  // Update the map when the slider is changed
});

overlayToggle.addEventListener('change', toggleOverlay);  // Toggle the overlay on or off

// Initial setup
daySlider.max = numDays - 1; // Set the slider max value
updateMap(0); // Load the map for the current date (Day 1)
