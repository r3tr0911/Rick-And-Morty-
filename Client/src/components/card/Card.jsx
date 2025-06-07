import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import Swal from 'sweetalert2';

export default function Card({ name, status, image, onClose, id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isFav, setIsFav] = useState(false);

  function handleClick() {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
      Swal.fire({
        icon: "info",
        title: "Eliminado de favoritos",
        text: `${name} fue removido.`,
        timer: 1000,
        showConfirmButton: false
      });
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, status, image, id }));
      Swal.fire({
        icon: "success",
        title: "¡Agregado a favoritos!",
        text: `${name} fue añadido.`,
        timer: 1000,
        showConfirmButton: false
      });
    }
  }

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) setIsFav(true);
    });
  }, [favorites, id]);

  return (
    <div className={style.container}>
      <div className={style.cardHeader}>
        <button className={style.btnfav} onClick={handleClick}>
          {isFav ? "💖" : "💔"}
        </button>
        {onClose && (
          <button className={style.btn} onClick={() => onClose(id)}>X</button>
        )}
      </div>

      <Link to={`/detail/${id}`}>
        <img className={style.img} src={image} alt={name} />
      </Link>

      <h2 className={style.name}>{name}</h2>
      <p className={style.status}>
        {status === "Alive" ? "❤️ Alive" : status === "Dead" ? "☠️ Dead" : "❓ Unknown"}
      </p>
    </div>
  );
}
