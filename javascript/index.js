import handleData, {
  daysOfWeekAbbreviations,
  monthAbbreviations,
  currentDay,
} from "./date.js";
import { updateElementText } from "./functions/functions.js";
import {
  country,
  locationInput,
  searchBTN,
  temperature,
  tempMin,
  tempMax,
  weatherIcon,
  humidity,
  wind,
  clouds,
  rain,
  filedMeessage,
  weatherDescription,
  cityName,
  locationBtn,
} from "./vars/home-vars.js";
import { weeklyWrapper, todayWrapper } from "./vars/weekly-vars.js";
import { 
  currentTemperature,
  NewsWeatherInfo,
  highTemperature, } from "./vars/cardNew-vars.js";
let latitude1;
let longitude2;
// Api Url
//template =>  https://wecast.vercel.app/
let APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${APIKey}`;
var temperatureUnit = document.createElement("sup");
temperatureUnit.textContent = "℃";
// °

const hourlyDataForCurrentDay = [];

async function getWeather() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    handleData();
    if (data) {
      if (data && data.cod === "404") {
        filedMeessage.classList.add("active");
      } else {
        if (data.name) {
          cityName.textContent = data.name;
        }
        filedMeessage.classList.remove("active");
      }
      if (data.main && data.wind && data.weather && data.clouds && data.sys) {
        country.textContent = data.sys.country;
        // card left
        const rainData = data.rain;
        if (rainData && rainData["1h"]) {
          const rainAmount = rainData["1h"];
          updateElementText(rain, `rain ${rainAmount}h`);
        } else {
          updateElementText(rain, `rain ${0}h`);
        }
        updateElementText(humidity, `${data.main.humidity}%`);
        updateElementText(clouds, `clouds ${data.clouds.all}%`);
        updateElementText(wind, `Wind ${data.wind.speed}km/h`);

        // card right
        var iconurl =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x" +
          ".png";
        weatherIcon.forEach((e) => {
          e.src = iconurl;
        });
        updateElementText(temperature, Math.trunc(data.main.temp));
        updateElementText(weatherDescription, data.weather[0].description);
        updateElementText(tempMin, `${Math.trunc(data.main.temp_min)}°`);
        updateElementText(tempMax, `- ${Math.trunc(data.main.temp_max)}°`);
        // news card
        currentTemperature.textContent = `${Math.trunc(data.main.temp_min)}°`;
        highTemperature.textContent = `${Math.floor(data.main.temp_max)}°`;
      }
    }

    // five Days forecast
    if (data.list) {
      const createWeatherWeekly = (element) => {
        const dateString = element.dt_txt.split(" ")[0];
        const dateParts = dateString.split("-");
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
        const dateObject = new Date(year, month, day);
        return `
          <div class="box">
            <div class="box-image">
              <img src="http://openweathermap.org/img/wn/${
                element.weather[0].icon
              }@4x.png" alt="" />
            </div>
            <div class="box-content">
              <p class="date">${
                daysOfWeekAbbreviations[dateObject.getDay()]
              }, ${day} ${monthAbbreviations[month]}</p>
              <h2 class="temperature">${(
                element.main.temp - 273.15
              ).toFixed()}°</h2>
            </div>
          </div>
        `;
      };
      const uniqueForecastDays = [];
      const fiveDaysforecast = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          uniqueForecastDays.push(forecastDate);
          return true;
        }
        return false;
      });
      // reset weeklyWrapper
      weeklyWrapper.textContent = "";
      fiveDaysforecast.forEach((element) => {
        weeklyWrapper.insertAdjacentHTML(
          "beforeend",
          createWeatherWeekly(element)
        );
      });
      // hourly
      // reset  hourlyDataForCurrentDay
      hourlyDataForCurrentDay.length = 0;
      data.list.forEach((e) => {
        const dateTimeParts = e.dt_txt.split(" ");
        const dateParts = dateTimeParts[0].split("-");
        const day = parseInt(dateParts[2]);
        if (day === currentDay) {
          hourlyDataForCurrentDay.push(e);
        }
      });
      // reset NewsWeatherInfo
      NewsWeatherInfo.textContent = "";
      // reset todayWrapper
      todayWrapper.textContent = "";
      hourlyDataForCurrentDay.forEach((e) => {
        const dateTimeParts = e.dt_txt.split(" ")[1].split(":")[0];
        const daylyRainData = e.rain;
        let daylyRain;
        if (daylyRainData && daylyRainData["3h"]) {
          daylyRain = daylyRainData["3h"];
        }
        let period = "AM";
        const hour = parseInt(dateTimeParts);
        if (hour >= 12) {
          period = "PM";
        }
        const hour12Format = hour > 12 ? hour - 12 : hour;
        const temperature = Math.floor(e.main.temp - 273.15);
        const temperatureMax = Math.floor(e.main.temp_max - 273.15);
        const main = e.weather[0].main;
        const description = e.weather[0].description;
        const speed = e.wind.speed;
        // Funtion to create card
        const createHourly = () => {
          return `
    <div class="weather-box">
    <img src="http://openweathermap.org/img/wn/${
      e.weather[0].icon
    }@4x.png" alt="" />

    <div class="weather-info">
      <span class="weather-text">${main}</span>
      <span class="weather-time">${
        hour12Format < 10 ? `0${hour12Format}` : hour12Format
      } ${period}</span>
    </div>

    <div class="temperature">
      <h2 class="temperature-high">${temperature}°</h2>
      <h4 class="temperature-low">${temperatureMax}°</h4>
    </div>

    <div class="wind-rain">
      <div class="wind-speed">
        <i class="fas fa-wind icon"></i>
        <span class="wind-speed-text">${speed}km/H</span>
      </div>

      <div class="rain">
        <i class="fas fa-cloud-showers-heavy icon"></i>
        <span class="rain-text">rain ${daylyRain ? daylyRain : 0} h</span>
      </div>
    </div>

    <div class="weather-description">
      <p>${description}</p>
    </div>
  </div>
    `;
        };
        // Insert Data
        todayWrapper.insertAdjacentHTML("beforeend", createHourly());
        // hourly for news
        // Funtion to create card
        const createHourlyNews = () => {
          return `
          <div class="weather-details">
          <i class="fas fa-cloud weather-icon"></i>
          <span class="temperature">
          ${temperature}
            <sup>°</sup>
          </span>
          <span class="time">${
            hour12Format < 10 ? `0${hour12Format}` : hour12Format
          } ${period}</span>
          <span class="condition">${description}</span>
        </div>
    `;
        };
        // Insert Data
        NewsWeatherInfo.insertAdjacentHTML("beforeend", createHourlyNews());
      });
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

window.addEventListener("load", () => {
  getUserLocation(successCallback, positionErrorCallback);
});

getWeather();

locationBtn.addEventListener("click", (e) => {
  getUserLocation(successCallback, positionErrorCallback);
});

function getUserLocation(successCallback, positionErrorCallback) {
  navigator.geolocation.getCurrentPosition(
    successCallback,
    positionErrorCallback
  );
}

function successCallback(position) {
  const { latitude, longitude } = position.coords;
  latitude1 = latitude;
  longitude2 = longitude;
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`;
  getWeather();
  getWeatherWeekly();
}
function positionErrorCallback(error) {
  console.log(error);
}

function searchCity(city) {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  getWeather();
  // reset latitude1 longitude2
  latitude1 = false;
  longitude2 = false;
}

searchBTN.addEventListener("click", () => {
  if (locationInput.value.trim() !== "") {
    searchCity(locationInput.value.trim());
    getWeatherWeekly(locationInput.value.trim());
    locationInput.value = "";
  }
});

locationInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (locationInput.value.trim() !== "") {
      searchCity(locationInput.value.trim());
      getWeatherWeekly(locationInput.value.trim());
      locationInput.value = "";
    }
  }
});

function getWeatherWeekly(city) {
  if ((latitude1, longitude2)) {
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude1}&lon=${longitude2}&appid=${APIKey}`;
  } else {
    if (city) {
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
    } else {
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIKey}`;
    }
  }
  // console.log("getWeatherWeekly", apiUrl);
  getWeather();
}
getWeatherWeekly();