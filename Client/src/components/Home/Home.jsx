import React from "react";
import Cards from "../cards/Cards.jsx"

export default function Home(props){
    return (
    <div>
        <span>Home</span>
        <Cards characters={props.characters} onClose={props.onClose}/>
    </div>
   );
}