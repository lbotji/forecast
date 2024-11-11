function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");


  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  
}


function showCity(city) {
let apiKey = dac27f8d3491eb544bc74fd800f1to5c;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(displayWeather);

}



function searchSubmit (event) {
  event.preventDefault();
 let searchInputElement = document.querySelector("#search-input");
 
 showCity = (searchInput.value); 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

showCity("Lisbon");