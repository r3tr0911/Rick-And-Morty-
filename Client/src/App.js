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
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function logout() {
      setAccess(false);
    }

   async function login(userData) {
    const { email, password } = userData;
   //  const URL = "http://localhost:3001/rickandmorty/login";
    const URL = "http://localhost:3001/user/login";
    try {
      const backendLogin = await axios(
         URL + `?email=${email}&password=${password}`
      );
      const { data } = backendLogin;
      const { access } = data;
      setAccess(access);
      access && navigate("/home")
    } catch (error) {
      
    }
   //  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //    const { access } = data;
   //    setAccess(access);
   //    access && navigate("/home");
   //  });
  }

  useEffect(() => {
     !access && navigate('/');
  }, [access]);


   async function onSearch(dato) {
      // axios(`http://localhost:3001/character/${dato}`)
      // .then((respuesta) => {
      //    if (respuesta.data.name) {
      //       // antes de agregar busco si "ya existe". Como lo harias?
      //     // tu codigo aquí:
      //     if (characters.some((char) => char.id === respuesta.data.id)) {
      //       return window.alert("Este personaje ya existe!")
      //    }  
      //       setCharacters((oldChars) => [...oldChars, respuesta.data]);
      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // })
      // .catch((err) => alert(err.response.data.error));

      try {
         const backRequest = await  axios(`http://localhost:3001/character/${dato}`)
         if (backRequest.data.name) {
            // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          if (characters.some((char) => char.id === backRequest.data.id)) {
            return window.alert("Este personaje ya existe!")
         }  
            setCharacters((oldChars) => [...oldChars, backRequest.data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         alert(error.response.data.error)
      }


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

   const location = useLocation();


   return (
      <div className={style.App}>
         {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout}/>}
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
