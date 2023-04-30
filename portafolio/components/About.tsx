import React from "react";
import styles from "../styles/Home.module.css";
import Profile from "../public/img/Mi proyecto.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <figure>
        <Image src={Profile} alt="Imagen de perfil" />
      </figure>
      <article>
        <h2 className={styles.desktop}>
          I am Cristofer Barrios Valverde and I would love to
          <br />
          work on your next project
        </h2>
        <p className={styles.desktop}>
          I love working with others to create beautiful design solutions.
          <br />
          I’ve designed everything from brand illustrations to complete
          <br />
          mobile apps. I’m also handy with a camera!
        </p>
      </article>
    </div>
  );
};

export default About;
