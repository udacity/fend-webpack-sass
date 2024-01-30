function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}



const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', async function (event) {
    event.preventDefault();
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!res.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await res.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemon = document.getElementById('pokemon');
        const type = document.getElementById('type');
        const type_0 = data.types[0].type.name;
        const type_1 = data.types[1] ? data.types[1].type.name : null;

        result.innerHTML = `<img src="${pokemonSprite}" alt="Pokemon"/>`;
        pokemon.innerHTML = pokemonName;
        type.innerHTML = type_1 ? `${type_0} , ${type_1}` : type_0;

    } catch (error) {
        console.error(error);
    }
});



export { handleSubmit }





/* const result = document.getElementById('result');
const btn = document.getElementById('btn');
btn.addEventListener('click', getRandomCat);

function getRandomCat() {
    fetch('http://placekitten.com/200/300')
        .then(res => res.blob())  // Use .blob() for image data
        .then(data => {
            // Create a URL for the blob data and set it as the image source
            const imageUrl = URL.createObjectURL(data);
            result.innerHTML = `<img src="${imageUrl}" alt="Random Cat"/>`;
        })
        .catch(error => {
            console.error('Error fetching cat:', error);
        });
} */
