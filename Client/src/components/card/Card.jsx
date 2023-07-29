import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
// import { connect } from "react-redux";

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
}) {
  //   console.log(props, "props"); cardInfo

  const dispatch = useDispatch(); // CREO UN DISPATCH
  const favorites = useSelector((state) => state.favorites); // ME TRAIGO "favorites" DEL GLOBAL 

  const [isFav, setIsFav] = useState(false);

  function handleClick() {
    //despachar el objeto de la accion
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          name,
          species,
          onClose,
          gender,
          status,
          origin,
          image,
          id,
        })
      );
    }
  }

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   return (
      <div className={style.container}>
            {
         isFav ? (
            <button className={style.btnfav} onClick={handleClick}>💖</button>
         ) : (
            <button className={style.btnfav} onClick={handleClick}>💔</button>
         )
            }
         {onClose ? (
               <button className={style.btn} onClick={()=> onClose(id)}>
                  X
                  </button>
            ) : null}
         <Link to={`/detail/${id}`}>
            <img className={style.img} src={image} alt ={name} />
         </Link>
         <h2 className={style.name}>{name}</h2>
         <div className={style.data}>
            <h3 className={style.info}>{species}</h3>
            <h3 className={style.info}>{gender}</h3>
            <h3 className={style.info}>{status}</h3>
            <h3 className={style.info}>{origin}</h3>
            
         </div>
      </div> 
   );
 }

 export function mapDispatchToProps(dispatch){
   return  {
      addFavorite: function(character){
         dispatch(addFavorite(character))
      },
      removeFavorites: function(id){
         dispatch(deleteFavorite(id))
      }
   }
 }

 export function mapStateToprops(globalState){
   return {
      favorites: globalState.favorites
   }
 }










