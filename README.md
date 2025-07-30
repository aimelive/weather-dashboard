# Weather Dashboard

A modern, responsive weather dashboard built with vanilla JavaScript, HTML, and CSS. This project demonstrates clean code architecture and modern web development practices.

## 🌟 Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Weather Icons**: Visual weather representation using emoji icons
- **Detailed Information**: Temperature, humidity, wind speed, pressure, and visibility
- **Error Handling**: Graceful error handling for invalid cities or network issues
- **Loading States**: User-friendly loading indicators
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Class-based architecture with async/await
- **OpenWeatherMap API**: Real-time weather data
- **Google Fonts**: Inter font family for modern typography

## 📱 Features Breakdown

### Search Functionality

- Clean search input with placeholder text
- Search button with search icon
- Enter key support for quick searching
- Input validation and error handling

### Weather Display

- City name and country display
- Current temperature with "feels like" temperature
- Weather description with appropriate emoji icons
- Detailed weather metrics in organized cards:
  - Humidity percentage
  - Wind speed in m/s
  - Atmospheric pressure in hPa
  - Visibility in kilometers

### User Experience

- Loading spinner during API calls
- Error messages for invalid cities
- Smooth hover animations
- Responsive design for all screen sizes
- Modern gradient background

## 🎨 Design Features

- **Color Scheme**: Purple gradient background with clean white cards
- **Typography**: Inter font family for modern readability
- **Layout**: Flexbox and CSS Grid for responsive layouts
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Subtle box shadows for depth
- **Border Radius**: Rounded corners for modern appearance

## 🔧 Setup Instructions

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **Enter a city name** in the search box
4. **Press Enter or click Search** to get weather information

## 📊 API Integration

The application uses the OpenWeatherMap API to fetch real-time weather data:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: City name, metric units, API key
- **Response**: JSON weather data with temperature, humidity, wind, etc.
