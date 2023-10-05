const { Pokemon } = require('../db');

const deletePokemonByUuid = async (req,res) => {
    const pokemonUuid = req.params.uuid;

    try {
        const pokemonToDelete = await Pokemon.findOne({ where: { id: pokemonUuid}});

        if (!pokemonToDelete) {
            return res.status(404).json({ message: 'No se encontro el Pokemon' })
        }

        await pokemonToDelete.destroy();

        res.status(200).json({ message: 'Pokemon eliminado exitosamente'})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = deletePokemonByUuid;