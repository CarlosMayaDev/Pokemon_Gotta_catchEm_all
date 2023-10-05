import React, { useEffect } from "react";
import PokeCards from "../components/PokeCards";
import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin, filterByType, getPokemons, orderByName, orderByAttack } from "../redux/actions";
import style from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { totalPokemons } = useSelector(state => state);
 
  useEffect(() => {
    dispatch(getPokemons({ page: 1, limit: totalPokemons })); // Obtener todos los pokemones en una sola página
  }, [dispatch, totalPokemons]);


  const handleFilter = (event) => {
    dispatch(filterByType(event.target.value));
  }

  const handleOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value))
  }

  const handleOrder = (event) => {{
    dispatch(orderByName(event.target.value))
  }}

  const handleAttack = (event) => {{
    dispatch(orderByAttack(event.target.value))
  }}

  return (
    <div>

        <h1 className={style.homeTitle}>Gotta Catch 'Em All</h1>

        <div className={style["selector-container"]}>
          <p className={style.p}>Filter by type!</p>
          
        <select name="" id="" onChange={handleFilter}>
          <option value="normal">Normal</option>
          <option value="psychic">Psychic</option>
          <option value="steel">Steel</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
          <option value="allPokemons">All Pokemons</option>
        </select>

          <p className={style.p}>Filter by source!</p>

        <select name="" id="" onChange={handleOrigin}>
          <option value="API">API Pokemon</option>
          <option value="DB">DB Pokemon</option>
          <option value="allPokemons">All Pokemons</option>
        </select>

          <p className={style.p}>Sort by alphabetical order!</p>

        <select name="" id="" onChange={handleOrder}>
          <option value="Asc">Ascending</option>
          <option value="Des">Descending</option>
          <option value="Def">By default</option>
        </select>

        <p className={style.p}>Sort by attack!</p>

        <select name="" id="" onChange={handleAttack}>
          <option value="Asc">Ascending</option>
          <option value="Des">Descending</option>
          <option value="Def">By default</option>
        </select>
    </div>
    <PokeCards />
    </div>
  );
};

export default HomePage;




