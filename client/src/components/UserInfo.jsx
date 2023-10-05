import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./UserInfo.module.css"; // Importa el módulo CSS

const UserInfo = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className={styles.container}>
        <img src={user.picture} alt={user.name} className={styles.picture} />
        <p className={styles.name}>welcome! <br></br>{user.name}</p>
        <p className={styles.email}>{user.email}</p>
      </div>
    );
  }

  return null;
};

export default UserInfo;

