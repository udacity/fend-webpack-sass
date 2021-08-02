var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require("node-fetch")

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

let baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
// API Key Developer Credentials
let apiKey = "key=68695032a4eea07c76469366313e5b90&of=json&url=";
let tailURL = "&lang=en";

// Setup empty JS object to act as endpoint for all routes
projectData = [];

// POST request
app.post('/addURL', addURL);

function addURL(req, res){
   
    newEntry = {
      newURL: req.body.userURL
    }
    projectData.push(newEntry)
    console.log(projectData)

    let finalURL = baseURL + apiKey + req.body.userURL + tailURL;

    getTextAnalysis(baseURL, apiKey, req.body.userURL, tailURL)
    .then(function(data){
        res.send(data);

    })
  }

// ASYNC FUNCTION: GET request to Meaning Cloud API
const getTextAnalysis = async(baseURL, apiKey, userInput, tailURL)=>{
    // ASYNC: fetch from the URL, default GET request
    console.log(baseURL + apiKey + userInput + tailURL);

    const response = await fetch(baseURL + apiKey + userInput + tailURL);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.log("error", error);
    }
}


// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!')
})
