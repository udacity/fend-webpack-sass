//import { LibManifestPlugin } from "webpack";


function handleSubmit(event) {
    event.preventDefault()
    
    const baseURL="http://api.openweathermap.org/data/2.5/weather?zip=94404,US";
    const apiKey = "&appid=313c0286de9914455968cabaeedf7a88&units=metric";
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    });

    document.getElementById('submit').addEventListener('click',performAction);
    
    function performAction(e){

    
    getAllData(baseURL,apiKey)
    .then(function(newData){
        postdata('/rdata',{temperature:newData.main.temp})
    })
    .then(function(newdata){
        specifiData('/kdata')
    })
    .then(function(pdata){
        updateUI()
    })

    }
    const getAllData = async (baseURL,apiKey)=>{
        const request = await fetch(baseURL+apiKey);
        try{
            const newData= await request.json();
            console.log(newData);
            return newData;
        }
        catch(error){
            console.log('error',error);
        }
    }

    
    const postdata = async(url='', data={})=>{
        console.log('data');
        const response = await fetch(url, {
            method:'POST',
            credentials:'same-origin',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data),
        });
    
        try{const newdata = await response.json();
            console.log(newdata);
            return newdata;}
        catch(error){
            console.log('error',error)}
    }

    const specifiData = async(url)=>{
        const request = await fetch(url);
        try{
            const pdata = await request.json();
            console.log(pdata);
            return pdata;
        }
        catch(error){
            console.log('error',error);
        }
    }

    const updateUI = async(url)=>{
        const req = await fetch('/kdata');
        try {
            const fdata = await req.json();
            document.getElementById('temperature').innerHTML = fdata.temperature;

        }
        catch(error){
            console.log('error',error);
        }
    } 
    }


    
    //.then(function(data){
        //document.getElementById("results2").innerHTML="<p>i this is faisal</p>"; 
    //})

//document.getElementById("submit").addEventListener('click',function(e){

export { handleSubmit }
