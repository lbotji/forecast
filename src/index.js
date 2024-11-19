function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date (response.data.time * 1000);
  let iconElement = document.querySelector("#icon");


 
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-icon"  />`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);

  getForecast(response.data.city);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

   if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}


function showCity(city) {
let apiKey = "dac27f8d3491eb544bc74fd800f1to5c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(displayWeather);

}

function searchSubmit(event) {
  event.preventDefault();
 let searchInput = document.querySelector("#search-input");
 
 showCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);



function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecastHtml = "";

  days.forEach(function(day) {
   forecastHtml = forecastHtml +
    `<div class="weather-forecast-day">
      <div class="weather-forecast-date">${day}.</div>
      <div class = "weather-forecast-icon">🌤</div>
      <div class="weather-forecast-temperatures">
  <div class="weather-forecast-temperature">
    <strong>15°</strong></div>
  <div class="weather-forecast-temperature">9°</div>
    </div>
     </div>`; 

});
}

function getForecast(city) {
  let apiKey = "dac27f8d3491eb544bc74fd800f1to5c";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&unit=metric`;
  axios.get(apiUrl).then(displayForecast);
}


showCity("Lisbon");
