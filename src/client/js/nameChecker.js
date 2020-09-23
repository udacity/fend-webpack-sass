function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Niels",
        "Carina"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
        alert("Aye, Captain!")
    }
}

export { checkForName }
