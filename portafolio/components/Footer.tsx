import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Logo from "../public/img/Mi proyecto.jpg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <article>
            <h2>Call with me</h2>
            <p className={styles.desktop}>
             I had like to have a chat to see how I can help. he first thing
              <br/>
              hat could be done is to coincide in a meeting to get to know each other.
              <br/>
              So from there we can continue with the work.
            </p>
          </article>
          <button type="button">Press to know about me</button>
        </div>
      </footer>
  )
}

export default Footer