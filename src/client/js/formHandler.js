/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&units=imperial&appid=1bce4fb3f8cafc10ab7f7cb3fa4bb9aa';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//get web API data
const getWeather = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + zipCode + apiKey)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error, 'error');
    }
}

function handleSubmit(event) {
    event.preventDefault()
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const warning = document.querySelector('.warning');

    if (zipCode != '') {
        if (isNaN(zipCode)) {
            warning.classList.add("show");
            document.getElementById('feelings').classList.toggle('box');
            warning.innerHTML = "Please enter a valid ZIP code";
        } else {

            console.log(`zip code value: ${zipCode}`);
            getWeather(baseURL, zipCode, apiKey)
                .then((data) => {
                    console.log(data.main);
                    postData('/add', {
                        date: newDate,
                        temp: data.main.temp,
                        feelings: feelings
                    })
                })
                .then(
                    updateUI()
                )
                .then(
                    document.getElementById('generate').addEventListener('click', changeUI)
                )
            warning.classList.remove("show");
        }
    } else {
        warning.classList.add("show");
        warning.innerHTML = "Please enter a ZIP code";
    }
};

//Async POST
const postData = async (url = '', data = {}) => {

    const response = await fetch('http://localhost:8081/add', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/all');
    try {
        const allData = await request.json();
        console.log(allData)
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Tempurature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.feelings}`;
    } catch (error) {
        console.log("error", error);
    }
}

const changeUI = () => {
    document.getElementById('zip').value = '';
    document.getElementById('feelings').value = '';
}

    /* check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}*/

export { handleSubmit }
