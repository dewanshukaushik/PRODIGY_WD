const apiKey = '99a382d9af14e7af24a1885779eca33a';
const fetchWeatherBtn = document.getElementById('fetchWeather');
const weatherInfoDiv = document.getElementById('weatherInfo');

fetchWeatherBtn.addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value;
    
    if (locationInput.trim() !== '') {
        getWeatherData(locationInput);
    } else {
        weatherInfoDiv.textContent = 'Please enter a location.';
    }
});

async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            weatherInfoDiv.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Condition: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        } else {
            weatherInfoDiv.textContent = 'Location not found. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.textContent = 'An error occurred while fetching weather data.';
    }
}
