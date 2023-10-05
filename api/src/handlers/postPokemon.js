const { Pokemon, Type } = require('../db');
const { v4: uuidv4 } = require('uuid');

const postPokemon = async (req, res) => {
    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo } = req.body; 

    const id = uuidv4();

    try {   
        const newPokemon = await Pokemon.create({ 
            id,
            nombre, 
            imagen, 
            vida, 
            ataque, 
            defensa, 
            velocidad, 
            altura, 
            peso, 
            tipo,
            creado: true,
        });

        const createdTypes = await Promise.all(
            tipo.map(async typeName => {
                const [typeInstance, created] = await Type.findOrCreate({
                    where: { nombre: typeName }
                });
                return typeInstance;
            })
        );


        if (Array.isArray(createdTypes)) {
            await newPokemon.setTypes(createdTypes.map(type => type));
        } else {
            await newPokemon.setTypes([createdTypes]);
        }

        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(500).json({ error })
    }
};

module.exports = postPokemon;
