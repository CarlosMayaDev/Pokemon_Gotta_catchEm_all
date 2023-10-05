import PokeCard from "./PokeCard";
import style from "./PokeCards.module.css";
import { useSelector } from "react-redux";

const PokeCards = () => {

const pokemonsData = useSelector(state=>state.pokemonsCopy);

    return (
        <div className={style.container}>
            {pokemonsData.map(pokemon => {
                return <PokeCard
                key={pokemon.id}
                id={pokemon.id}
                nombre={pokemon.nombre}
                imagen={pokemon.imagen}
                vida={pokemon.vida}
                ataque={pokemon.ataque}
                defensa={pokemon.defensa}
                velocidad={pokemon.velocidad}
                altura={pokemon.altura}
                peso={pokemon.peso}
                tipo={pokemon.tipo}
                />
            })}
        </div>
    )
}

export default PokeCards;