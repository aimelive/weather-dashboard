// Weather Dashboard Application
class WeatherDashboard {
  constructor() {
    this.apiKey = window.config.apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    this.init();
  }

  init() {
    this.bindEvents();
    this.setupEnterKey();
  }

  bindEvents() {
    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("cityInput");

    searchBtn.addEventListener("click", () => this.handleSearch());
    cityInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    });
  }

  setupEnterKey() {
    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    });
  }

  handleSearch() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
      this.showError("Please enter a city name.");
      return;
    }

    this.searchWeather(city);
  }

  async searchWeather(city) {
    try {
      this.showLoading();

      const url = `${this.baseUrl}?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${this.apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        this.displayWeather(data);
      } else {
        this.showError(`City not found: ${city}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      this.showError("Failed to fetch weather data. Please try again.");
    }
  }

  displayWeather(data) {
    const weatherHTML = this.createWeatherHTML(data);
    document.getElementById("weatherResult").innerHTML = weatherHTML;
  }

  createWeatherHTML(data) {
    const weatherIcon = this.getWeatherIcon(data.weather[0].main);
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
    const visibility = data.visibility / 1000; // Convert to km

    return `
            <div class="weather-card">
                <div class="weather-location">
                    <h2>${data.name}</h2>
                    <p>${data.sys.country}</p>
                </div>
                
                <div class="weather-main">
                    <div class="weather-icon">${weatherIcon}</div>
                    <div class="temperature">${temp}°C</div>
                    <div class="weather-description">${data.weather[0].description}</div>
                    <p>Feels like ${feelsLike}°C</p>
                </div>
                
                <div class="weather-details">
                    <div class="weather-detail">
                        <h3>Humidity</h3>
                        <p>${humidity}%</p>
                    </div>
                    <div class="weather-detail">
                        <h3>Wind Speed</h3>
                        <p>${windSpeed} m/s</p>
                    </div>
                    <div class="weather-detail">
                        <h3>Pressure</h3>
                        <p>${pressure} hPa</p>
                    </div>
                    <div class="weather-detail">
                        <h3>Visibility</h3>
                        <p>${visibility} km</p>
                    </div>
                </div>
            </div>
        `;
  }

  getWeatherIcon(weatherMain) {
    const icons = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Drizzle: "🌦️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️",
      Smoke: "🌫️",
      Haze: "🌫️",
      Dust: "🌫️",
      Fog: "🌫️",
      Sand: "🌫️",
      Ash: "🌫️",
      Squall: "💨",
      Tornado: "🌪️",
    };

    return icons[weatherMain] || "🌤️";
  }

  showLoading() {
    document.getElementById("weatherResult").innerHTML = `
            <div class="loading">
                Loading weather data...
            </div>
        `;
  }

  showError(message) {
    document.getElementById("weatherResult").innerHTML = `
            <div class="error-message">
                ${message}
            </div>
        `;
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WeatherDashboard();
});
