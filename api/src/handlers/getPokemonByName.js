const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const getPokemonByName = async (req, res) => {

    const { name } = req.query;
    const URL = 'https://pokeapi.co/api/v2/pokemon';

    try {

        // const dbPokemonByName = await Pokemon.findOne({ 
        //     where: {
        //         nombre: name, 
        //     }
        // });

        const response = await axios.get(`${URL}/${name.toLowerCase()}`);
        const pokemonData = response.data;
        const apiPokemonByName = {
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
        }

        //  res.status(200).json({ dbPokemonByName: dbPokemonByName, apiPokemonByName: apiPokemonByName } );
        res.status(200).json(apiPokemonByName);

    } catch (error) {
        
        res.status(500).json({ error: error.message });

    }
};

module.exports = getPokemonByName;