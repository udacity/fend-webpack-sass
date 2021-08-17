var path = require('path')
const express = require('express')
//const webpack= require('webpack')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express()
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

let projectData={};

app.post('/rdata',function(request,response){
   const newEntry={
        temperature:request.body.temperature,
}
    response.send(projectData);
    projectData = newEntry;
    console.log(projectData);
   
});


app.get('/kdata',function(req,res){
    res.send(projectData);
})