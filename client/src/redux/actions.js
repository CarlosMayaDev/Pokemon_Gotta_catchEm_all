import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const SEARCH_POKEMON_SUCCESS = "SEARCH_POKEMON_SUCCESS";
export const SEARCH_POKEMON_ERROR = "SEARCH_POKEMON_ERROR";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const UPDATE_SEARCHED_POKEMON = "UPDATE_SEARCHED_POKEMON";

export const getPokemons = ({ page, limit }) => {

    return async function(dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?page=${page}&limit=${limit}`);
        const { pokemons, totalPokemons } =  apiData.data;
        dispatch({ type: GET_POKEMONS, payload: { pokemons, totalPokemons } });
    };
};

export const searchPokemon = (name) => {
    return async function(dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/pokemons/search?name=${name}`);
        const pokemonData = response.data;
        console.log(response.data);
  
        dispatch({ type: SEARCH_POKEMON_SUCCESS, payload: pokemonData }); // Actualiza el estado global
      } catch (error) {
        dispatch({ type: SEARCH_POKEMON_ERROR, payload: error.message }); // Maneja el error si es necesario
      }
    };
  };
  
export const filterByType = (tipo) => {
    return { type: FILTER_BY_TYPE, payload: tipo}; 
};

export const filterByOrigin = (origin) => {
    return { type: FILTER_BY_ORIGIN, payload: origin}
}

export const orderByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order}
}

export const orderByAttack = (order) => {
  return { type: ORDER_BY_ATTACK, payload: order}
}

export const updatedSearchedPokemon = (id) => {
  return { type: UPDATE_SEARCHED_POKEMON, payload: id}
}