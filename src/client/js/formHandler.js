const APIURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const APIKEY = '&appid=f20d62c24bafab987722d901dc74af75';
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }).then(()=>{
        fetch(`https://randomuser.me/api/`).then(res => res.json()).then(data=> {
            console.log(data)
            // const weather = document.createElement('h4');
            // weather.innerHTML = data.main.temp;
            // document.getElementById('results').appendChild(weather);
        })
    })
}

export { handleSubmit }
