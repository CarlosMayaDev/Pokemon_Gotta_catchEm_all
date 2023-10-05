const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemons = async (req, res) => {

    const { page, limit } = req.query;
    const totalPokemons = 151;
    const offset = (page - 1) * limit;

    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    try {
        const dbPokemons = await Pokemon.findAll();
        
        const response = await axios.get(URL);
        const pokemonResults = response.data.results;
        
        const pokemonPromises = pokemonResults.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const pokemonData = pokemonResponse.data;
            return {
                id: pokemonData.id,
                nombre: pokemonData.name,
                imagen: pokemonData.sprites.other["official-artwork"].front_default,
                vida: pokemonData.stats[0].base_stat,
                ataque: pokemonData.stats[1].base_stat,
                defensa: pokemonData.stats[2].base_stat,
                velocidad: pokemonData.stats[5]?.base_stat,
                altura: pokemonData?.height,
                peso: pokemonData?.weight,
                tipo: pokemonData.types.map((tipo) => tipo.type.name),
                creado: false,
            };
        });

        // Espero que se completen todas las solicitudes de los Pokémon
        const apiPokemons = await Promise.all(pokemonPromises);       

        res.status(200).json({
  pokemons: [...dbPokemons, ...apiPokemons],
  totalPokemons: totalPokemons
});

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports =  getPokemons;
