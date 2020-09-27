function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);
    console.log("::: Form Submitted :::")
    if(Client.validUrl(formText)) {
        Client.sentimentAnalysis(formText)
        console.log("::: Form Sent :::")
    } else {
    alert("Please enter a valid URL.")
    }
}
export { handleSubmit }