import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokeCardsByName from "./PokeCardsByName";
import style from "./NavBar.module.css";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div className={style.container}>
        <div className={style.container2}>
          <UserInfo />
          {isAuthenticated ? (
            <>
              <Link to="/home">
                <p className={style.p}>Gotta Catch 'Em All</p>
              </Link>
              <Link to="/form">
                <p className={style.p}>Create your Pokemon!</p>
              </Link>
            </>
          ) : null}
            {isAuthenticated ? <LogoutButton /> : 
            <Link to="/">
                <p className={style.p}>Go back!</p>
            </Link>}
        </div>
      </div>
      {isAuthenticated ? (
        <>
          <SearchBar onSearch={props.onSearch} />
          <PokeCardsByName />
        </>
      ) : null}
    </div>
  );
};

export default NavBar;
