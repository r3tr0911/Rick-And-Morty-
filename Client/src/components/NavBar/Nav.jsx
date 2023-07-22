import React from "react";
import SearchBar from "./searchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className={style.container}>
            <Link to="/about" className={style.about}>ABOUT</Link>
            <Link to="/home" className={style.home}>HOME</Link>
            <Link to="/favorites">FAVS💖</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}