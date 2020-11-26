// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=7e3d290cd442823876bb07faec6a3a8e';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let lat = document.getElementById('lat').value;
  let lon = document.getElementById('lon').value;
  // Client.checkForName(zipCode);

  // Base URL for OpenWeatherMap API to optain current weather data by ZIP code
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;

  console.log('::: Form Submitted :::');
  fetch(baseURL + apiKey)
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('resultsTemp').innerHTML = `Temp: ${res.main.temp}<sup>o</sup> C`;
      document.getElementById('resultsName').innerHTML = res.name;
      document.getElementById('resultsCountry').innerHTML = res.sys.country;
    });
}

export { handleSubmit };
