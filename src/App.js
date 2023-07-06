import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Nav from './components/NavBar/Nav.jsx';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import axios from "axios"
import style from './App.module.css';
// import Cards from './components/cards/Cards.jsx';


function App() {
   function onSearch(dato) {
      axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((respuesta) => {
         if (respuesta.data.name) {
            // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          if (characters.some((char) => char.id === respuesta.data.id)) {
            return window.alert("Este personaje ya existe!")
         }  
            setCharacters((oldChars) => [...oldChars, respuesta.data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }
   function onClose(id){
      // window.alert("onClose:)")
      setCharacters(
         characters.filter((pj) => {
         return pj.id !== Number(id)
      })
     );
   }
   
   const [characters, setCharacters] = useState([]);


   return (
      <div className={style.App}>
         <Nav onSearch={onSearch}/>
         <Routes> 
            <Route 
               path='/home' 
               element={<Home characters={characters} onClose={onClose}/>} 
            />
            <Route path='/about' element= {<About/>}/>
            <Route path='/detail/:id/' element={<Detail/>}/>
         </Routes>
         {/* <Cards characters={characters} onClose={onClose}/> */}
      </div>
   );
}

export default App;
