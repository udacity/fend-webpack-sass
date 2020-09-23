function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })

    // change DOM --> Input from API here
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
        document.getElementById('results2').innerHTML = formText
    })
}

export { handleSubmit }
