import {
    analyze
} from './analyzer'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let articleURL = document.getElementById('name').value
    let language = document.getElementById('languages').value

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    if (validURL(articleURL)) {
        const data = {
            articleURL,
            language
        }

        analyze(data);

    }
}
export {
    handleSubmit
}