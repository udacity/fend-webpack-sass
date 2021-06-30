function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::" + formText)
    if(Client.validUrl(formText)) {
        Client.sentimentAnalysis()
        console.log("::: Form Sent :::")
        document.getElementById('input').innerHTML = `We analyzed ${formText} for you`;
    } else {
    alert("Please enter a valid URL.")
    document.getElementById('input').innerHTML = `We tried to analyze ${formText} for you but it wasn't a valid url, please check url and try again`;
    }
}
export { handleSubmit }