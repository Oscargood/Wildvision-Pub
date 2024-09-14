// Get references to the elements
const weatherMap = document.getElementById('weatherMap');

// Get today's date and initialize the forecast dates array
const today = new Date();
const numDays = 5;  // Number of days to forecast
const forecastDates = Array.from({ length: numDays }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);  // Add i days to today
    return date.toISOString().split('T')[0];  // Format as YYYY-MM-DD
});

// Function to update the map based on the selected day
function updateMap(dayIndex) {
    const date = forecastDates[dayIndex];
    weatherMap.src = `nz_weather_${date}.html`; // Load the corresponding map for the selected day
}

// Event listeners for buttons
document.getElementById('day1Button').addEventListener('click', () => updateMap(0));
document.getElementById('day2Button').addEventListener('click', () => updateMap(1));
document.getElementById('day3Button').addEventListener('click', () => updateMap(2));
document.getElementById('day4Button').addEventListener('click', () => updateMap(3));
document.getElementById('day5Button').addEventListener('click', () => updateMap(4));

// Initial setup
updateMap(0); // Load the map for the current date (Day 1)
