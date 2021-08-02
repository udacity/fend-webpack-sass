function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log(formText);

    postData('http://localhost:3030/addURL', {userURL: formText})
    .then(function(res) {
        updateUI(res)
        console.log(res.irony);
    });

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3030/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
    })
}

export { handleSubmit }

/* POST EXAMPLE */ 
const postData = async ( url = '', data = {})=>{
    // ASYNC: fetch from the URL, POST request
    const response = await fetch(url, {
    // POST request boilerplate
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

  // FUNCTION: To update UI elements
  function updateUI(res) {
    try{
      let score = scoreTag(res.score_tag);
      // Update UI elements
      document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
      document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
      document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
      document.getElementById('score_tag').innerHTML = 'Score Tag: ' + score;
      document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
    }catch(error){
      console.log("error", error);
    }
  }

  function scoreTag(score_tag) {
    switch (score_tag) {
        case "P+":
            score_tag = "Strong Positive";
            break;
        case "P":
            score_tag = "Positive";
            break;
        case "NEU":
            score_tag = "Neutral";
            break;
        case "N":
            score_tag = "Negative";
            break;
        case "N+":
            score_tag = "Strong Negative";
            break;
        case "NONE":
            score_tag = "Without Sentiment";
            break;     
      }
      return score_tag;
  }
