function handleSubmit(event) {
    event.preventDefault()
    const formdata = new FormData();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/getKey')
    .then(res => {
        console.log("::: Form sent :::")
        console.log(res.body);
        formdata.append("key", res.json());
        formdata.append("txt", formText);
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          
          const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
            .then(response => ({
              status: response.status, 
              body: response.json()
            }))
            .then(function({ status, body }) {
                document.getElementById('results').innerHTML = body
            })
            .catch(error => console.log('error', error));
    })
    
}

export { handleSubmit }
