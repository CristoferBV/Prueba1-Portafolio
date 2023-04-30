import React from 'react'
import Image from 'next/image'
import Logo from '../public/img/logo2.jpg'
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
        <button
        type='button'>
            <Image src={Logo} alt="Imagen Portafolio" width={60} height={60}/>

        </button>

        <button type='button'>Free Consultation</button>
    </nav>
  );
};

export default Header