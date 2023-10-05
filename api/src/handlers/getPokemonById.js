const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemonById = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    const URL = 'https://pokeapi.co/api/v2/pokemon';

    try {
        let pokemon;

        if (source === "api") {
            const response = await axios.get(`${URL}/${id}`);
            const pokemonData = response.data;
            pokemon = {
                id: id,
                nombre: pokemonData.name,
                imagen: pokemonData.sprites.other["official-artwork"].front_default,
                vida: pokemonData.stats[0].base_stat,
                ataque: pokemonData.stats[1].base_stat,
                defensa: pokemonData.stats[2].base_stat,
                velocidad: pokemonData.stats[5]?.base_stat,
                altura: pokemonData?.height,
                peso: pokemonData?.weight,
                creado: false,
                tipo: pokemonData.types.map((tipo) => tipo.type.name)
            };
        } else {
            const dbPokemon = await Pokemon.findByPk(id);
            pokemon = {
                id: dbPokemon.id,
                nombre: dbPokemon.nombre,
                imagen: dbPokemon.imagen,
                vida: dbPokemon.vida,
                ataque: dbPokemon.ataque,
                defensa: dbPokemon.defensa,
                velocidad: dbPokemon.velocidad,
                altura: dbPokemon.altura,
                peso: dbPokemon.peso,
                creado: true,
                tipo: dbPokemon.tipo
            };
        }

        res.status(200).json(pokemon);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPokemonById;
