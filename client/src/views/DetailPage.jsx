import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailPage.module.css";

const DetailPage = () => {
    const { id } = useParams(); 
    const pokemons = useSelector(state=>state.pokemons)

    const pokemonDetail = pokemons.find(pokemon => (
        (typeof pokemon.id === 'number' && pokemon.id === parseInt(id)) ||
        (typeof pokemon.id === 'string' && pokemon.id === id)
    ));

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/pokemons/${id}`);
            alert("Pokemon eliminado de la base de datos!")
        } catch (error) {
            console.error("Error al eliminar el Pokémon:", error);
        }
    };

      if (!pokemonDetail) {
        return <p>No se encontró el pokemon</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{pokemonDetail.nombre}</h1>
            <img src={pokemonDetail.imagen} alt={`Imagen de ${pokemonDetail.nombre}`} />
                <div className={styles.container2}>
                    <p className={styles.p}>life: {pokemonDetail.vida}</p>
                    <p className={styles.p}>attack: {pokemonDetail.ataque}</p>
                    <p className={styles.p}>defense: {pokemonDetail.defensa}</p>
                    <p className={styles.p}>velocity: {pokemonDetail.velocidad}</p>
                    <p className={styles.p}>height: {pokemonDetail.altura}</p>
                    <p className={styles.p}>weight: {pokemonDetail.peso}</p>
                    <p className={styles.p}>type: {pokemonDetail.tipo.map((tipo, index) => (
                        <span key={index}>
                            {index > 0 && " "} 
                            {tipo}
                        </span>
                        ))}
                    </p>
                    {pokemonDetail.creado ? (
                        <p className={styles.p}>you have created this Pokemon!</p>
                    ) : (
                        <p className={styles.p}>this is an API Pokemon!</p>
                    )}

                    {typeof pokemonDetail.id === "string" && (
                        <button onClick={handleDelete} className={styles.closeButton}>delete this Pokemon from DataBase!</button>
                    )}
                </div>
        </div>
    );
};

export default DetailPage;
