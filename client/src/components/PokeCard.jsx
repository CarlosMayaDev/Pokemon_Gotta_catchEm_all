import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokeCard.module.css";

const PokeCard = ({ id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo }) => {
    
    return (
        <div className={styles.card}>
           
        <img src={imagen} alt={`Imagen de ${nombre}`} />
            <Link to={`/detail/${id}`}>
            <h2 className={styles.h2}>{nombre}</h2> 
            </Link>
                {/* <p>Id: {id}</p> */}
                {/* <p>Vida: {vida}</p>
                <p>Ataque: {ataque}</p>
                <p>Defensa: {defensa}</p>
                <p>Velocidad: {velocidad}</p>
                <p>Altura: {altura}</p>
                <p>Peso: {peso}</p> */}
            <p className={styles.p}> 
            {tipo && tipo.map((tipo, index) => (
                <span key={index} className={styles.tipoItem}>
                    {index > 0 && " "} 
                    {tipo}
                </span>
            ))}
            </p>
        </div>
    );
};

export default PokeCard;
