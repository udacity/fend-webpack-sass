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
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=85901&units=imperial&appid=f23da3f348ae6df2c02f6d8a80f4b888')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results2').innerHTML = res.name
    });
}

export { handleSubmit }
