import { FILTER_BY_TYPE, SEARCH_POKEMON_SUCCESS, GET_POKEMONS, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_ATTACK, UPDATE_SEARCHED_POKEMON } from "./actions";

const initialState = {
  pokemons: [],
  pokemonsCopy: [],
  searchedPokemon: [],
  totalPokemons: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {


    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        searchedPokemon: [...state.searchedPokemon, action.payload],
      };

    case FILTER_BY_TYPE:
    let filteredPokemons = [];
    if (action.payload === "allPokemons") {
        return {
        ...state,
        pokemonsCopy: state.pokemons, 
        }
    } else {
        filteredPokemons = state.pokemons.filter((pokemon) =>
        pokemon.tipo.includes(action.payload)
        )
        return {
        ...state,
        pokemonsCopy: filteredPokemons,
        };
    }

    case FILTER_BY_ORIGIN:
      if (action.payload === "allPokemons") {
        return {
          ...state,
          pokemonsCopy: state.pokemons, 
          }
      }
      if (action.payload === "API") {
        const apiPokemons = state.pokemons.filter((pokemon) => !pokemon.creado);
        return {
          ...state,
          pokemonsCopy: apiPokemons,
        };
      } else {
        const dbPokemons = state.pokemons.filter((pokemon) => pokemon.creado);
        return {
          ...state,
          pokemonsCopy: dbPokemons,
        }
      } 

      case ORDER_BY_NAME:
        if (action.payload === "Def") {
          return {
            ...state,
            pokemonsCopy: state.pokemons,
          };
        }
        
        let sortedPokemons = [...state.pokemonsCopy];
        if (action.payload === "Asc") {
          sortedPokemons.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (action.payload === "Des") {
          sortedPokemons.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }
        
        return {
          ...state,
          pokemonsCopy: sortedPokemons,
        };

      case ORDER_BY_ATTACK:
        if (action.payload === "Def") {
          return {
            ...state,
            pokemonsCopy: state.pokemons,
          };
        }
        
        let sortedPokemonsByAttack = [...state.pokemonsCopy];
        if (action.payload === "Asc") {
          sortedPokemonsByAttack.sort((a, b) => a.ataque - b.ataque);
        } else if (action.payload === "Des") {
          sortedPokemonsByAttack.sort((a, b) => b.ataque - a.ataque);
        }
        
        return {
          ...state,
          pokemonsCopy: sortedPokemonsByAttack,
        };

      case UPDATE_SEARCHED_POKEMON:
        const updatedSearchedPokemon = state.searchedPokemon.filter(pokemon => pokemon.id !== action.payload);
        return {
          ...state,
          searchedPokemon: updatedSearchedPokemon,
        };        

    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        pokemonsCopy: action.payload.pokemons,
        totalPokemons: action.payload.totalPokemons,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
