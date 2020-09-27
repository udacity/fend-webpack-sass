function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::" + formText)
    if(Client.validUrl(formText)) {
        Client.sentimentAnalysis(formText)
        console.log("::: Form Sent :::")
    } else {
    alert("Please enter a valid URL.")
    }
    document.getElementById('input').innerHTML = `We analyzed ${formText} for you`;
}
export { handleSubmit }