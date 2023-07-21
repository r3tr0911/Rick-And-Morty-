import React, { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {

   const [id, setId] = useState("");
   const handleChange = (evento) => {
   setId(evento.target.value);
   };

   return (
      <div>
         <input 
         className= {style.search} 
         type= 'text' 
         placeholder='Busca un personaje...' 
         onChange= {handleChange} 
         value= {id}
         />
         
         <button 
         className= {style.btn} 
         onClick= {() => {
            props.onSearch(id)
         }}
         >
           AGREGAR
         </button>
      </div>
   );
}
