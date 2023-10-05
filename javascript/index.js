let APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${APIKey}`;
let contry = document.querySelector(".country");
let locationInput = document.querySelector(".location-input");
let searchBTN = document.querySelector(".search-button");
async function getWeather() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    console.log(data.country);
    if (data.name) {
      cityName.textContent = data.name;
    }
    if (data.country) {
      contry.textContent = data.country;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
window.addEventListener("load", () => {
  getUserLocation(successCallback, positionErrorCallback);
});
getWeather();
let locationBtn = document.querySelector(".location-button");
locationBtn.addEventListener("click", (e) => {
  getUserLocation(successCallback, positionErrorCallback);
});
let cityName = document.querySelector(".city-name");

function getUserLocation(successCallback, positionErrorCallback) {
  navigator.geolocation.getCurrentPosition(
    successCallback,
    positionErrorCallback
  );
}

function successCallback(position) {
  const { latitude, longitude } = position.coords;
  console.log(latitude);
  console.log(longitude);
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`;
  getWeather();
  console.log(position);
}
function positionErrorCallback(error) {
  console.log(error);
}

function searchCity(city) {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  getWeather();
}
searchBTN.addEventListener("click", (e) => {
  searchCity(locationInput.value.trim());
});
