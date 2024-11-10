function displayTemperature(response) {
  
}


function showCity(city) {
let city = "Paris";
let apiKey = dac27f8d3491eb544bc74fd800f1to5c;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(displayTemperature);
}



function searchSubmit (event) {
  event.preventDefault();
 let searchInput = document.querySelector("#search-input");
 let cityElement = document.querySelector("#city");
 cityElement.innerHTML = searchInput.value; 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit)