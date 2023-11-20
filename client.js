// Require Axios
// Don't forget to initialize your npm project and npm install axios first
const axios = require('axios');

const hello = () => {
    console.log('hello world!');
}

// getGoogle uses Axios to make a GET request for google.com
// Don't forget the async and await keywords
const getGoogle = async () => {
    const google = await axios.get('https://www.google.com');
    console.log('google is done');
}

// pokemonNames takes 1 results object as a parameter and returns an array of just the pokemon names
const pokemonNames = (results) => {
    const mapResults = results.map((pokemon) => {
        return pokemon.name
    })
    return mapResults;
}

const getPokemonNames = async () => {
    // Use Axios to make a GET request to the Pokemon API
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //console.log(pokemon); // Without `await`, this line will log just a Javascript Promise 
    
    // Get the data out of the Axios response with response.data
    // pokemonData should now match what you see when you go to https://pokeapi.co/api/v2/pokemon in your browser
    const pokemonData = response.data;
    
    // Pass the `results` key of the response data to the pokemonNames function (defined earlier)
    const mapResults = pokemonNames(pokemonData.results);

    console.log(mapResults) 
};

// How to make request with Axios to localhost server in server.js (run with Express)
const getCharacters = async () => {
    const characters = await axios.get('http://localhost:3000/characters');
    console.log(characters);
};

//getGoogle();
getPokemonNames();
//getCharacters();
//hello();