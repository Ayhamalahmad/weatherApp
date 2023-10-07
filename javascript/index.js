import handleData from "./date.js";
let country = document.querySelector(".country");
let locationInput = document.querySelector(".location-input");
let searchBTN = document.querySelector(".search-button");
let temperature = document.querySelector(".temperature");
let tempMin = document.querySelector(".temp-min");
let tempMax = document.querySelector(".temp-max");
let weatherIcon = document.querySelector(".weather-icon");
let humidity = document.querySelector(".humidity p");
let wind = document.querySelector(".wind p");
let clouds = document.querySelector(".clouds p");
let rain = document.querySelector(".rain p");
let filedMeessage = document.querySelector(".filed");
let weatherDescription = document.querySelector(".description");
let cityName = document.querySelector(".city-name");
let locationBtn = document.querySelector(".location-button");
// Api Url
// https://wecast.vercel.app/
let APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${APIKey}`;
var temperatureUnit = document.createElement("sup");
temperatureUnit.textContent = "c";
// console.log(Math.trunc(12.34));
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
        if(data.name){
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
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`;
  getWeather();
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
  }
});
locationInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (locationInput.value.trim() !== "") {
      searchCity(locationInput.value.trim());
    }
  }
});
