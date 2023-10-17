const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemonByName = async (req, res) => {
    const { name } = req.query;
    const URL = 'https://pokeapi.co/api/v2/pokemon';

    try {
        // Buscar en la base de datos
        const responseDB = await Pokemon.findOne({
            where: { nombre: name },
        });

        let dbPokemonByName = null;
        if (responseDB) {
            dbPokemonByName = {
                id: responseDB.id,
                nombre: responseDB.nombre,
                imagen: responseDB.imagen,
                vida: responseDB.vida,
                ataque: responseDB.ataque,
                defensa: responseDB.defensa,
                velocidad: responseDB.velocidad,
                altura: responseDB.altura,
                peso: responseDB.peso,
                tipo: typeof responseDB.tipo === 'string' ? responseDB.tipo.split(",") : responseDB.tipo,
                creado: true,
            };
        }

        if (!dbPokemonByName) {
            // Si no se encuentra en la base de datos, buscar en la API
            const responseAPI = await axios.get(`${URL}/${name.toLowerCase()}`);
            const pokemonDataAPI = responseAPI.data;

            const apiPokemonByName = {
                id: pokemonDataAPI.id,
                nombre: pokemonDataAPI.name,
                imagen: pokemonDataAPI.sprites.other["official-artwork"].front_default,
                vida: pokemonDataAPI.stats[0].base_stat,
                ataque: pokemonDataAPI.stats[1].base_stat,
                defensa: pokemonDataAPI.stats[2].base_stat,
                velocidad: pokemonDataAPI.stats[5]?.base_stat,
                altura: pokemonDataAPI?.height,
                peso: pokemonDataAPI?.weight,
                tipo: pokemonDataAPI.types.map((tipo) => tipo.type.name),
                creado: false,
            };

            // Respondemos con un array que contiene ambos resultados
            res.status(200).json([apiPokemonByName, dbPokemonByName]);
        } else {
            // Respondemos solo con el resultado de la base de datos
            res.status(200).json([dbPokemonByName]);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPokemonByName;


