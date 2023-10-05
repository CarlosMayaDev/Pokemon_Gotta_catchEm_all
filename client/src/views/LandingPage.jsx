import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./LandingPage.module.css";
import LoginButton from "../components/LoginButton";

const LandingPage = () => {
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push("/home");
    // };

    return (
        <div className={styles["landing-container"]}>
            <div className={styles.div}>
                <h1 className={styles["landing-title"]}> individual project </h1>
                <h3 className={styles["landing-subtitle"]}> created by CarlosMayaDev </h3>
                <h2 className={styles["landing-tagline"]}> find your Pokemons here! </h2>
                <LoginButton />
                <br /><br />
            </div>
        </div>
    );
};

export default LandingPage;
