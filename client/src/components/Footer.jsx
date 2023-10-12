import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  const githubProfileUrl = "https://github.com/CarlosMayaDev";
  const linkedInProfileUrl = "https://www.linkedin.com/in/carlosmayadev/";

  const openGithubProfile = () => {
    window.open(githubProfileUrl, "_blank");
  };

  const openLinkedInProfile = () => {
    window.open(linkedInProfileUrl, "_blank");
  };

  return (
    <div className={style.footer}>
      <p className={style.p1} onClick={openGithubProfile}>
        GitHub: CarlosMayaDev!
      </p>
      <p className={style.p1} onClick={openLinkedInProfile}>
        LinkedIn: CarlosMayaDev!
      </p>
      <p className={style.p}>© 2023 Pokémon. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

