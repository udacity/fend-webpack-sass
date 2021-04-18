function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let articleURL = document.getElementById('name').value
    let language = document.getElementById('languages').value

    console.log("::: Form Submitted :::", articleURL, language)

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    //Client.checkForName(articleURL)

    if (validURL(articleURL)) {

        const formdata = new FormData()
        formdata.append("key", '9916d14636068e46cc10f2dcd9dcf2aa')
        formdata.append("url", articleURL)
        formdata.append("lang", language)

        const requestOptions = {
            method: 'POST',
            body: formdata,
        }
        fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
            .then(response => ({
                status: response.status,
                body: response.json()
            }))
            .then(({
                status,
                body
            }) => body)
            .then((body) => {
                let concepts = 'concepts are: '
                body.sentimented_concept_list.forEach(element => {
                    concepts += element.form + ", "
                })
                document.getElementById('results').innerHTML = concepts
            })
            .catch(error => {
                console.log('error', error)
                document.getElementById('results').innerHTML = error
            });
    }
}
export {
    handleSubmit
}