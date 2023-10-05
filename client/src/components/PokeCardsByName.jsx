import React from "react";
import { useSelector } from "react-redux";
import style from "./PokeCardsByName.module.css";
import PokeCardByName from "./PokeCardByName";

const PokeCardsByName = () => {
  const searchedPokemon = useSelector(state => state.searchedPokemon);

  if (searchedPokemon.length === 0) {
    return <p className={style.p}>Find Your Pokemons!</p>;
  }

  return (
    <div className={style.container}>
      {searchedPokemon.map(pokemonData => (
        <PokeCardByName
          key={pokemonData.id} 
          id={pokemonData.id}
          nombre={pokemonData.nombre}
          imagen={pokemonData.imagen}
          vida={pokemonData.vida}
          ataque={pokemonData.ataque}
          defensa={pokemonData.defensa}
          velocidad={pokemonData.velocidad}
          altura={pokemonData.altura}
          peso={pokemonData.peso}
          tipo={pokemonData.tipo}
        />
      ))}
    </div>
  );
};

export default PokeCardsByName;


