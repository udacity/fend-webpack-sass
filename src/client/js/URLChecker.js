function checkURL(inputText) {
    console.log("::: Running checkURL :::");

    const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    if(!matchPattern.test(inputText)) {
        alert("URL is Invalid")
    }
   return matchPattern.test(inputText)
}
export { checkURL }
