import React from "react";
import SearchBar from "./searchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <Link to="/favorites" className={style.button}>FAVS 💖</Link>
        <Link to="/home" className={style.button}>HOME 🏡</Link>
        <Link to="/about" className={style.button}>ABOUT 👽</Link>
      </div>

      <div className={style.middleSection}>
        <SearchBar onSearch={props.onSearch} />
      </div>

      <div className={style.rightSection}>
        <button className={`${style.button} ${style.logout}`} onClick={props.out}>
          SALIR 🚪
        </button>
      </div>
    </div>
  );
}
