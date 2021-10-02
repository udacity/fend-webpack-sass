function checkURL(inputText) {
    console.log("::: Running checkURL :::");

    const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    if(!matchPattern.test(inputText)) {
        document.getElementById('results').innerHTML = "..............URL is invalid"
    }
   return matchPattern.test(inputText)
}
export { checkURL }
