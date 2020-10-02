const subjectivity = document.getElementById('subjectivity')
let data = {subjectivity: 'not yet analysed'};

function updateUI(url) {
  console.log("Finished Analyisis of "+ url);
    subjectivity.innerHTML = "The text on " + url + " is: " + data.subjectivity;
    document.getElementById('input').innerHTML = `We analyzed ${url} for you`;
}

function sentimentAnalysis(e) {
  const url = document.getElementById('name').value
  console.log('Passed ' + url + ' to function sentimentAnalysis');
  //getAnalyisis(baseURL, url, process.env.API_KEY)
  updateUI(url)
}



/* moving to backend
function sentimentAnalysis(e){

let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
let apiKey = '8b58a7cd5d0355724a804dcf01361924';

const url =  document.getElementById('name').value
getAnalyisis(baseURL,url, apiKey)

}
const getAnalyisis = async (baseURL, url)=>{

  const res = await fetch(baseURL+apiKey+"&url="+url+"&lang=en")
  console.log("Fetched "+baseURL+apiKey+"&url="+url+"&lang=en");
  try {
    const data = await res.json();
    body: JSON.stringify(res)
    console.log(data)
    updateUI(data, url)
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
*/

export { sentimentAnalysis }
