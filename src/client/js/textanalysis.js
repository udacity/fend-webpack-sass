const sentimentAnalysis = async(inputUrl) => {
    console.log("::: Running sentimentAnalysis :::", inputUrl);


    const response = await fetch('/getApi', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mysite: mysite }),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        updateUI(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
    document.getElementById('input').innerHTML = "Checked url: " + inputUrl;
    document.getElementById('subjectivity').innerHTML = "Subjectivity: " + myData.subjectivity;
}
    
export { sentimentAnalysis }


/*
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })

    // change DOM --> Input from API here
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
        document.getElementById('results2').innerHTML = formText
    })
}

export { handleSubmit }
*/


/*
// Function to GET Api
const postData = async (url, weatherInfo = {}) => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weatherInfo)
  });
  try {
    const dataUpdate = await response.json();
    return dataUpdate;
  } catch (error) {
    console.log("error", error);
  }
}
// Function to GET Project Data

const getData = async (url) => {
  const response = await fetch('getData');
  try {
    const data = await response.json();
    updateUI(data);
  }
  catch (error) {
    console.log('error', error)
  }
}




/* /* Global Variables

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '5007e6fa6f04d10b57ad08733da059ce';

// Event listener to add function to existing HTML DOM element
const button = document.getElementById('generate');
const zipInput = document.getElementById("zip");
const feelingsInput = document.getElementById('feelings');
const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

/* Function to GET Web API Data
const weather = async zipCode => await fetch(`${baseURL + zipCode},us&APPID=${apiKey}&units=metric`);

/* Function to POST data 
const postData = async (url, weatherInfo = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weatherInfo)
  });
  try {
    const dataUpdate = await response.json();
    return dataUpdate;
  } catch (error) {
    console.log("error", error);
  }
}
/* Function to GET Project Data 

const getData = async (url) => {
  const response = await fetch('getData');
  try {
    const data = await response.json();
    updateUI(data);
  }
  catch (error) {
    console.log('error', error)
  }
}

button.addEventListener('click', async () => {
  button.textContent = 'Processing Data...';  // Feedback for the user when clicking the button
  const zipCode = zipInput.value;
  const feelings = feelingsInput.value;
  const response = await weather(zipCode);
  const res = await response.json();
  const temp = res.main.temp.toString() + '° Celsius';
  const city = res.name.toString();
  const dataset = { name: city, temperature: temp, date: newDate, feelings: feelings };

  data = await postData('/postData', dataset);

  getData('getAll');
  button.textContent = 'Generate';
});
//updating the User Interface
function updateUI(data) {
  date.innerHTML = data.date;
  city.innerHTML = data.city;
  temp.innerHTML = data.temperature;
  content.innerHTML = data.feelings;
}

*/
