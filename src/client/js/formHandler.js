const openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=<apikey>&units=imperial";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(openWeatherURL + formText + apiKey)
    mode: 'no-cors'
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export { handleSubmit }
