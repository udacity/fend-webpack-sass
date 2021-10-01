function handleSubmit(event) {
    event.preventDefault()
    const formdata = new FormData();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkURL(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/getKey')
    .then(res => res.json())
    .then(result => {
        formdata.append("key", result);
        formdata.append("url", formText);
        formdata.append("lang", "en");
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          }
          return requestOptions
                }
          )
          .then( requestOptions => {
            fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
            .then(response => ({
              status: response.status, 
              body: response.json()
            }))
            .then(({ status, body }) => body)
            .then (body => {
              document.getElementById('results').innerHTML = body.agreement ? `${body.agreement}, ${body.confidence}, ${body.irony}, ${body.model}, ${body.score_tag}` : ""
            })
            .catch(error => console.log('error', error)); 
          }
          )
}

export { handleSubmit }
