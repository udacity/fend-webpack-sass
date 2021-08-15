//import { LibManifestPlugin } from "webpack";


function handleSubmit(event) {
    event.preventDefault()
    
    //const baseURL="http://api.openweathermap.org/data/2.5/weather?zip=94404,US";
   // const apiKey = "&appid=313c0286de9914455968cabaeedf7a88&units=metric";
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

    /*const getAllData = async(baseURL,apiKey)=>{
        const request = await fetch(baseURL+apiKey);
        try{
            const newData=request.json();
            console.log(newData);
            return newData
        }
        catch(error){
            console.log('error',error);
        }
    }

    
    const postdata = async(url='', data={})=>{
        const reponse = fetch(url, {
            method:'POST',
            credentials:'same-origin',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
    
        try{const newdata = await response.json()
            console.log(newdata);
            return newdata}
        catch(error){console.log('error',error)}
    }

    getAllData(baseURL,apiKey)
    .then(function(newData){
        //postdata('/rdata',{temperature:newData.main.temp});
    }) 

*/

    
    //.then(function(data){
        //document.getElementById("results2").innerHTML="<p>i this is faisal</p>"; 
    //})

//document.getElementById("submit").addEventListener('click',function(e){

export { handleSubmit }
