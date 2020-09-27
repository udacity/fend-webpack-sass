function handleSubmit(event) {
  event.preventDefault()

  let formText = document.getElementById('name').value

  const apiKey = "8b58a7cd5d0355724a804dcf01361924";
  const apiKeyEnv = process.env.API_KEY;

  const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
  const lang = "&lang=en";

  const apiReq = (`${baseURL + apiKey}&url=${formText + lang}`);
  const apiReqEnv = (`${baseURL + apiKeyEnv}&url=${formText + lang}`);
  console.log(apiReq);
  console.log(apiReqEnv);

  // check what text was put into the form field


  Client.checkForName(formText)

  console.log("::: Form Submitted :::")
  fetch(apiReq)
      .then(res => {
          return res.json()
      })

      // change DOM --> Input from API here
      .then(function (data) {


          document.getElementById('results').innerHTML = data.message
          document.getElementById('results2').innerHTML = formText
      })
}





export { handleSubmit }