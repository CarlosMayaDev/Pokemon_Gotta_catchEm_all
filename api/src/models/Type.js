const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  } , { timestamps: false });
  sequelize.beforeCreate((pokemon) => {
    pokemon.id = uuidv4();
  });
};
