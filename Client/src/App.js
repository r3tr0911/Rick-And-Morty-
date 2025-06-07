import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Nav from './components/NavBar/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from 'axios';
import Form from './components/Form/Form.jsx';
import style from './App.module.css';
import Favorites from './components/Favorites/Favorites.jsx';
import Swal from 'sweetalert2';

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  function logout() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Cerrarás sesión y volverás al inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        setAccess(false);
        setLoginError("");
        Swal.fire({
          title: "Sesión cerrada",
          icon: "success",
          timer: 1200,
          showConfirmButton: false
        });
      }
    });
  }

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/user/login';

    try {
      const backendLogin = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = backendLogin.data;
      setAccess(access);

      if (access) {
        setLoginError("");
        navigate("/home");
      } else {
        setLoginError("Credenciales incorrectas. Verifica tu email y contraseña.");
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
          text: "Verifica tu email y contraseña.",
          confirmButtonColor: "#d33"
        });
      }
    } catch (error) {
      setLoginError("Error al conectar con el servidor.");
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor.",
        confirmButtonColor: "#d33"
      });
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  async function onSearch(dato) {
    if (!dato || isNaN(dato)) {
      return Swal.fire({
        icon: "warning",
        title: "ID inválido",
        text: "Debes ingresar un número válido.",
        confirmButtonColor: "#ff6f61"
      });
    }

    try {
      const backRequest = await axios(`http://localhost:3001/character/${dato}`);
      if (backRequest.data.name) {
        if (characters.some((char) => char.id === backRequest.data.id)) {
          return Swal.fire({
            icon: "info",
            title: "Ya existe",
            text: "Este personaje ya fue agregado.",
            confirmButtonColor: "#ffc107"
          });
        }

        setCharacters((oldChars) => [...oldChars, backRequest.data]);

        Swal.fire({
          icon: "success",
          title: "¡Agregado!",
          text: `Se agregó ${backRequest.data.name} correctamente.`,
          timer: 1200,
          showConfirmButton: false
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "No encontrado",
          text: "¡No hay personajes con este ID!",
          confirmButtonColor: "#d33"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.error || "Error al buscar el personaje",
        confirmButtonColor: "#d33"
      });
    }
  }

  function onClose(id) {
    setCharacters(characters.filter((pj) => pj.id !== Number(id)));
  }

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} loginError={loginError} />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id/' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
