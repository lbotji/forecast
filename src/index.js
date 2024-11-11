function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature-value")
  let temperature = response.data.current.temperature;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  
}


function showCity(city) {
let apiKey = dac27f8d3491eb544bc74fd800f1to5c;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(displayTemperature);

}



function searchSubmit (event) {
  event.preventDefault();
 let searchInput = document.querySelector("#search-input");
 
 showCity = (searchInput.value); 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit)