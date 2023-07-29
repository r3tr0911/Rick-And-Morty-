import React from "react";
import Cards from "../cards/Cards.jsx"
import style from "./Home.module.css";

export default function Home(props){
    return (
    <div className={style.container}>
        <span className={style.btn}></span>
        <Cards characters={props.characters} onClose={props.onClose}/>
    </div>
   );
}