import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <h1 className={style.title}>Sobre la App 💫</h1>
        <p className={style.description}>
          Esta SPA fue creada como parte de mi formación en programación. Consume datos de la API pública de Rick and Morty para mostrar personajes, permitir búsquedas, gestionar favoritos y más.
        </p>

        <div className={style.section}>
          <h3>🛠️ Tecnologías</h3>
          <ul>
            <li>⚛️ React</li>
            <li>📦 Redux</li>
            <li>🎨 CSS Módulos</li>
            <li>☁️ Axios + API REST</li>
            <li>🔐 Autenticación</li>
            <li>💖 SweetAlert2</li>
          </ul>
        </div>

        <div className={style.section}>
          <h3>👨‍💻 Autor</h3>
          <p>Creado por Kevin como proyecto técnico.</p>
          <p>Versión: 1.0.0</p>
        </div>

        <div className={style.section}>
          <h3>📬 Contacto</h3>
          <p>🔗 <a href="https://github.com/r3tr0911" target="_blank" rel="noreferrer">GitHub</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/kevin-steven-uribe-lara-212406258" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p>📧 <a href="mailto:kevinesteven0627@gmail.com">kevinesteven0627@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
