const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getPokemons = require('../handlers/getPokemons');
const getPokemonById = require('../handlers/getPokemonById');
const getPokemonByName = require('../handlers/getPokemonByName');
const postPokemon = require('../handlers/postPokemon');
const getTypes = require('../handlers/getTypes');
const deletePokemonByUuid = require('../handlers/deletePokemonByUuid')

const router = Router();

//Configurar los routers
//Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getPokemons);
router.get('/pokemons/search', getPokemonByName);
router.get('/pokemons/:id', getPokemonById);

router.post('/pokemons', postPokemon);
router.delete('/pokemons/:uuid', deletePokemonByUuid);

router.get('/types', getTypes);




module.exports = router; 
