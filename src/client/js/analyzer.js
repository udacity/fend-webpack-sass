function analyze(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('http://localhost:8081/analyze', options)
        .then(res => {
            return res.text()
        })
        .then(concepts => document.getElementById('results').innerHTML = concepts);
}

export {
    analyze
}