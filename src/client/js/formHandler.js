// Base URL for OpenWeatherMap API to optain current weather data by ZIP code
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=7e3d290cd442823876bb07faec6a3a8e';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let zipCode = document.getElementById('name').value;
//   Client.checkForName(zipCode);

  console.log('::: Form Submitted :::');
  fetch(baseURL + zipCode + apiKey)
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };
