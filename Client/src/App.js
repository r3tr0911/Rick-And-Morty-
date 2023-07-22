import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Nav from './components/NavBar/Nav.jsx';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import axios from "axios"
import Form from "./components/Form/Form.jsx"
import style from './App.module.css';
import Favorites from './components/Favorites/Favorites.jsx';
// import Cards from './components/cards/Cards.jsx';  


function App() {
   function onSearch(dato) {
      axios(`http://localhost:3001/rickandmorty/onSearch/${dato}`)
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
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else{
         alert("Email o Password incorrecto!")
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const location = useLocation();
   console.log(location.pathname)

   return (
      <div className={style.App}>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         <Routes> 
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>} />
            <Route path='/about' element= {<About/>}/>
            <Route path='/detail/:id/' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         {/* <Cards characters={characters} onClose={onClose}/> */}
      </div>
   );
}

export default App;
