const { Type } = require('../db');
const axios = require('axios');

const getTypes = async (req, res) => {
    const URL = 'https://pokeapi.co/api/v2/type';

    try {
        const response = await axios.get(URL);
        const typeResults = response.data.results;

        for (const type of typeResults){
            const existingType = await Type.findOne({ where: { nombre: type.name }});
            if (!existingType) {
                await Type.create({ nombre: type.name })
            }
        };

        const dbTypes = await Type.findAll();

        res.status(200).json(dbTypes);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getTypes;