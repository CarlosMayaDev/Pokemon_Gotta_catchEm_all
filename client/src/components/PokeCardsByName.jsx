import React from 'react';
import { useSelector } from 'react-redux';
import style from './PokeCardsByName.module.css';
import PokeCardByName from './PokeCardByName';

const PokeCardsByName = () => {
  const searchedPokemon = useSelector((state) => state.searchedPokemon);

  if (!searchedPokemon || searchedPokemon.length === 0 || !searchedPokemon[0]) {
    return <p className={style.p}>¡Encuentra a tus Pokémon!</p>;
  }

  const { pokemon } = searchedPokemon[0];
  const { nombre, id, creado, vida, ataque, defensa, velocidad, altura, peso, tipo, imagen } = pokemon;

  return (
    <div className={style.p}>

      <PokeCardByName
        nombre={nombre}
        id={id}
        creado={creado}
        vida={vida}
        ataque={ataque}
        defensa={defensa}
        velocidad={velocidad}
        altura={altura}
        peso={peso}
        tipo={tipo}
        imagen={imagen}
      />  

    </div>
  );
};

export default PokeCardsByName;
























