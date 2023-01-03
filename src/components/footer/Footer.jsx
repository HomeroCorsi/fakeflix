import React from 'react';
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <>
    <footer className={styles.footery}>
          <div className={styles.center}>
            <div className={styles.footer_links}>
              <p className={styles.footer_question}>
                ¿Preguntas? Llama al 0800 345 1593
              </p>
            </div>

            <div className={styles.footer_links}>
              <a href="#" className={styles.footer_question}>
                Preguntas frecuentes
              </a>
              <a href="#" className={styles.footer_question}>
                Centro de ayuda
              </a>
              <a href="#" className={styles.footer_question}>
                Términos de uso
              </a>
              <a href="#" className={styles.footer_question}>
                Privacidad
              </a>
            </div>
            <div className={styles.footer_links}>
              <a href="#" className={styles.footer_question}>
                Preferencias de cookies
              </a>
              <a href="#" className={styles.footer_question}>
                Información corporativa
              </a>
            </div>
          </div>
        </footer>
        </>

  )
}

export default Footer

