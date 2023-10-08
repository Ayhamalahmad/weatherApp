import handleData from "./date.js";
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
} from "./home-vars.js";
let userPosition;
let latitude1 = [];
let longitude2 = [];
// Api Url
// https://wecast.vercel.app/
let APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&cnt=8&appid=${APIKey}`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${APIKey}`;
var temperatureUnit = document.createElement("sup");
temperatureUnit.textContent = "c";

async function getWeather() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
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
      const rainData = data.rain;
      if (rainData && rainData["1h"]) {
        const rainAmount = rainData["1h"];
        rain.textContent = `rain ${rainAmount}h`;
      } else {
        rain.textContent = `rain ${0}h`;
      }
      if (data.main && data.wind && data.weather && data.clouds && data.sys) {
        // latitude = data.coord.lat;
        // longitude = data.coord.lon;
        // console.log(latitude, longitude);
        country.textContent = data.sys.country;
        humidity.textContent = `${data.main.humidity}%`;
        temperature.textContent = Math.trunc(data.main.temp);
        tempMin.textContent = `${Math.trunc(data.main.temp_min)}`;
        tempMax.textContent = `- ${Math.trunc(data.main.temp_max)}`;
        clouds.textContent = `clouds ${data.clouds.all}%`;
        wind.textContent = `Wind ${data.wind.speed}km/h`;
        var iconurl =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        weatherIcon.src = iconurl;
        weatherDescription.textContent = data.weather[0].description;
      }
      temperature.appendChild(temperatureUnit);
      tempMax.appendChild(temperatureUnit);
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
  latitude1=latitude;
  longitude2=longitude;

  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`;
  userPosition = position.coords;
  getWeather();
  getWeatherWeekly();
}
function positionErrorCallback(error) {
  console.log(error);
}

function searchCity(city) {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  getWeather();
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
  console.log("latitude1, longitude2",latitude1, longitude2);
  if ((latitude1, longitude2)) {
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude1}&lon=${longitude2}&appid=${APIKey}`;
  } else {
    if (city) {
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
    } else {
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIKey}`;
    }
  }
  getWeather();
}