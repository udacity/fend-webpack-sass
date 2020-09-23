function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Niels"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
        alert("Aye, Captain!")
    }
}

export { checkForName }
