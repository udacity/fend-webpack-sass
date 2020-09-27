const dotenv = require('dotenv');
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// API Call
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiCall = (`${baseURL + process.env.API_KEY}&url=wwwgoogle.de&lang=en`);

/* Function to GET Web API Data*/
const sentiment = async url => await fetch(apiCall);


/* Function to POST data */
const postData = async (url, sentimentAnalysis = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sentimentAnalysis)
    });
    try {
      const dataUpdate = await response.json();
      return dataUpdate;
    } catch (error) {
      console.log("error", error);
    }
  }



/* Get URL from client site and replace for formText
const apiCall = (`${baseURL + process.env.API_KEY}&url=${formText}&lang=en`);
*/
console.log(apiCall);