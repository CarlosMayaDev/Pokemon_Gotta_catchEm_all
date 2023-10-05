import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokeCardsByName from "./PokeCardsByName";
import style from "./NavBar.module.css";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";

const NavBar = (props) => {

    return (

    <div>
        <div className={style.container}>
            <div className={style.container2}>
                <UserInfo />
                <Link to="/home">
                    <p className={style.p}>Gotta Catch 'Em All</p>
                </Link>

                <Link to="/form">
                    <p className={style.p}>Create your Pokemon!</p>
                </Link> 
                <LogoutButton />
            </div>
        </div>
            <SearchBar onSearch={props.onSearch} />
            <PokeCardsByName />
    </div>
    )
};

export default NavBar;