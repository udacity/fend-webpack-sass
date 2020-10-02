const subjectivity = document.getElementById('subjectivity')
let data = { subjectivity: 'not yet analysed' };

function updateUI(url, data) {
  console.log("Finished Analyisis of " + url);
  subjectivity.innerHTML = "The text on " + url + " is: " + data.subjectivity;
  document.getElementById('input').innerHTML = `We analyzed ${url} for you`;
}

function sentimentAnalysis(e) {

  let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
  let apiKey = '8b58a7cd5d0355724a804dcf01361924';
  const url = document.getElementById('name').value
  getAnalyisis(baseURL, apiKey, url)

}
const getAnalyisis = async (baseURL, apiKey, url) => {

  const res = await fetch(baseURL + apiKey + "&url=" + url + "&lang=en")
  console.log("Fetched " + baseURL + apiKey + "&url=" + url + "&lang=en");
  try {
    body: JSON.stringify(res)
    const data = await res.json();
    console.log(data)
    subjectivity.innerHTML = "The text on " + url + " is: " + data.subjectivity;
    document.getElementById('input').innerHTML = `We analyzed ${url} for you`;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

export { sentimentAnalysis }
