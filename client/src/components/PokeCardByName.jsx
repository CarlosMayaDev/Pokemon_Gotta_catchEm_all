import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokeCardByName.module.css";
import { useDispatch } from "react-redux";
import { updatedSearchedPokemon } from "../redux/actions";

const PokeCardByName = ({ id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo }) => {

    const dispatch = useDispatch();

    const onClose = (id) => {
        dispatch(updatedSearchedPokemon(id));
    }
    
    return (
        <div className={styles.card}>
           
        <img src={imagen} alt={`Imagen de ${nombre}`} />
            <Link to={`/detail/${id}`}>
            <h2 className={styles.h2}>{nombre}</h2> 
            </Link>
            {/* <p>Id: {id}</p> */}
            {/* <p className={styles.p}>Vida: {vida}</p>
            <p className={styles.p}>Ataque: {ataque}</p>
            <p className={styles.p}>Defensa: {defensa}</p>
            <p className={styles.p}>Velocidad: {velocidad}</p>
            <p className={styles.p}>Altura: {altura}</p>
            <p className={styles.p}>Peso: {peso}</p>  */}
            <p className={styles.p}> 
            {tipo && tipo.map((tipo, index) => (
                <span key={index} className={styles.tipoItem}>
                    {tipo}
                </span>
            ))}
            </p>
            <button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
            <p></p>
        </div>
    );
};

export default PokeCardByName;