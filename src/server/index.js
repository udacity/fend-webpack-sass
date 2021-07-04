var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
projectData = {};

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

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/all', function (req, res) {
    res.send(projectData);
})

app.post('/add', function(req, res){
    let data = req.body;
    projectData['date'] = data.date;
    projectData['temp'] = data.temp;
    projectData['feelings'] = data.feelings;
  
    res.send(projectData);
    console.log(projectData);
})