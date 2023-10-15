# Weather App

The Weather App is a JavaScript application that allows users to fetch and display weather information using the OpenWeatherMap API. It provides current weather data, a five-day weather forecast, user location detection, and city search functionality.
### Live Demo

You can experience the Weather App by visiting the [live demo](https://ayhamalahmad.github.io/weatherApp/).

## Table of Contents
- [Application Overview](#application-overview)
- [Key Components](#key-components)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Author](#author)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Application Overview

The Weather App is designed to offer the following features:

- **Current Weather Display**: Provides real-time weather conditions, including temperature, humidity, wind speed, cloud cover, sunrise, and sunset times.

- **Five-Day Forecast**: Displays a five-day weather forecast for the selected location, including temperature and weather condition details.

- **User Location Detection**: Utilizes the Geolocation API to automatically detect the user's current location and fetch weather data accordingly.

- **City Search**: Allows users to manually enter a city name and retrieve weather information for that specific location.

## Key Components

The application consists of several key components and functionalities:

- **API Integration**: The code interacts with the OpenWeatherMap API to retrieve weather data for the specified location.

- **Dynamic HTML Updates**: It dynamically updates various HTML elements to display the fetched weather data, including temperature, weather icons, humidity, wind speed, and more.

- **Time Formatting**: The code formats and displays sunrise and sunset times in a user-friendly format.

- **Weekly Weather Forecast**: The application generates a five-day weather forecast by processing data from the API response.

- **User Location Handling**: The code uses the Geolocation API to obtain the user's latitude and longitude, enabling weather data retrieval based on the user's location.

## Usage

To use the Weather App:

1. Clone this repository to your local machine.

2. Open the `index.html` file in a web browser.

3. By default, the location is set to London. You can change the location by manually entering a city name in the input field and clicking the "Search" button, or you can allow the application to use your current location.

4. The application will then display the current weather data and the five-day weather forecast for the selected location.

## Configuration

Before using the code, you need to replace the `APIKey` variable with your own OpenWeatherMap API key. Obtain your API key from the OpenWeatherMap website and replace the following line in the code:

```javascript
let APIKey = "YOUR_API_KEY_HERE";
```
### Dependencies

The Weather App relies on the OpenWeatherMap API for fetching weather data.

### Author

The Weather App was developed by Ayham Alahmad. You can contact the author at ayhamalahmadcontact@gmail.com.




