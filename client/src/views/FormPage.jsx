import React, { useState } from "react";
import axios from "axios";
import styles from "./FormPage.module.css";

const FormPage = () => {

    const tiposPokemon = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];

    const preset_key = "ml_default";
    const cloud_name = "dxal0nlxi";
    const [image, setImage] = useState()

    const [form, setForm] = useState({
        nombre: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        tipo: [],
    });

    const [errors, setErrors] = useState({
        nombre: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        tipo: [],
    })

    const handleFile = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", preset_key);
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(response => setImage(response.data.secure_url))
        .catch(error => console.log(error));
    }

    const changeHandler = (event) => { // lee lo que escribo y lo guarda en el estado
        const property = event.target.name;
        let value = event.target.value;

        if (property === "tipo") {
            value = Array.from(event.target.selectedOptions, option => option.value);
        }

        setForm({ ...form, [property]: value });
        validate(property, value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const hasEmptyFields = Object.values(form).some(value => value === '');

        if (hasEmptyFields) {
            alert('Please complete all fields.');
            return;
        }

        const pokemonDataToSend = {
            ...form,
            imagen: image,
            creado: true, 
        };

        const response = axios.post("http://localhost:3001/pokemons", pokemonDataToSend)
        .then(res =>  alert("Pokemon added to database!", res))
        .catch(error=>alert(error));
        
        setForm({
            nombre: "",
            imagen: "",
            vida: "",
            ataque: "",
            defensa: "",
            velocidad: "",
            altura: "",
            peso: "",
            tipo: [],
        });
        setErrors({
            nombre: "",
            imagen: "",
            vida: "",
            ataque: "",
            defensa: "",
            velocidad: "",
            altura: "",
            peso: "",
            tipo: [],
        });
    }

    const validate = (property, value) => {

        let newErrors = { ...errors };
       
        if (property === "nombre") {
            if (/^[A-Za-z\s]+$/.test(value)) {
                newErrors.nombre = "";
            } else {
                newErrors.nombre = `field "Name" must only contain letters`;
            }
        }

        if (property === "vida") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.vida = "";
            } else {
                newErrors.vida = `field "life" must only contain numbers`;
            }
        }

        if (property === "ataque") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.ataque = "";
            } else {
                newErrors.ataque = `field "attack" must only contain numbers`;
            }
        }

        if (property === "defensa") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.defensa = "";
            } else {
                newErrors.defensa = `field "defense" must only contain numbers`;
            }
        }

        if (property === "velocidad") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.velocidad = "";
            } else {
                newErrors.velocidad = `field "velocity" must only contain numbers`;
            }
        }

        if (property === "altura") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.altura = "";
            } else {
                newErrors.altura = `field "height" must only contain numbers`;
            }
        }

        if (property === "peso") {
            if (/^[0-9]+$/.test(value)) {
                newErrors.peso = "";
            } else {
                newErrors.peso = `field "weight" must only contain numbers`;
            }
        }

        if (property === "tipo") {
            if (value.length === 0) {
                newErrors.tipo = `choose at least one type`;
            } else {
                newErrors.tipo = "";
            }
        }

        setErrors(newErrors);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>

            <h1 className={styles.h1}>Create your own Pokemon!</h1>
            <div className={styles.formGroup}>
                <label className={styles.label}>name: </label>
                <input type="text" value={form.nombre} onChange={changeHandler} name="nombre" className={styles.input}/>
            </div>
            {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}

            {/* <div className={styles.formGroup}>
                <label className={styles.label}>image URL: </label>
                <input type="text" value={form.imagen} onChange={changeHandler} name="imagen" className={styles.input}/>
            </div> */}

            <div>
                <input type="file" name="image" onChange={handleFile} />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>life: </label>
                <input type="text" value={form.vida} onChange={changeHandler} name="vida" className={styles.input}/>
            </div>
            {errors.vida && <span className={styles.error}>{errors.vida}</span>}

            <div className={styles.formGroup}>
                <label className={styles.label}>attack: </label>
                <input type="text" value={form.ataque} onChange={changeHandler} name="ataque" className={styles.input}/>
            </div>
            {errors.ataque && <span className={styles.error}>{errors.ataque}</span>}

            <div className={styles.formGroup}>
                <label className={styles.label}>defense: </label>
                <input type="text" value={form.defensa} onChange={changeHandler} name="defensa" className={styles.input}/>
            </div>
            {errors.defensa && <span className={styles.error}>{errors.defensa}</span>}

            <div className={styles.formGroup}>
                <label className={styles.label}>velocity: </label>
                <input type="text" value={form.velocidad} onChange={changeHandler} name="velocidad" className={styles.input}/>
            </div>
            {errors.velocidad && <span className={styles.error}>{errors.velocidad}</span>}

            <div className={styles.formGroup}>
                <label className={styles.label}>hight: </label>
                <input type="text" value={form.altura} onChange={changeHandler} name="altura" className={styles.input}/>
            </div>
            {errors.altura && <span className={styles.error}>{errors.altura}</span>}

            <div className={styles.formGroup}>
                <label className={styles.label}>weight: </label>
                <input type="text" value={form.peso} onChange={changeHandler} name="peso" className={styles.input}/>
            </div>
            {errors.peso && <span className={styles.error}>{errors.peso}</span>}

            <div className={styles.formGroup}>
                <label htmlFor="tipo" className={styles.label}>type:</label>
                <select
                    id="tipo"
                    value={form.tipo}
                    onChange={changeHandler}
                    name="tipo"
                    multiple
                    >
                    <option value="">select a type</option>
                    {tiposPokemon.map((tipo) => (
                        <option key={tipo} value={tipo}>
                        {tipo}
                        </option>
                    ))}
                </select>
                {errors.tipo && <span className={styles.error}>{errors.tipo}</span>}
            </div>
            <button type="submit" className={styles.button}>create pokemon</button>
        </form>
    )
};

export default FormPage;