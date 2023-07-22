import React, {useEffect, useState} from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { ADDFAVORITE, addFavorite, deleteFavorite } from '../../redux/actions/actions';
import { connect } from "react-redux";

function Card({
   name,
   species,
   onClose,
   gender,
   status,
   origin,
   image,
   id,
   removeFavorites, 
   addFavorite,
   favorites
 }) {
   //   console.log(props, "props"); cardInfo
   const [isFav, setIsFav] =useState(false);
   function handleClick(){
      if(isFav){
         setIsFav(false)
         removeFavorites(id)
      } else {
         setIsFav(true)
         addFavorite({name, species, onClose, gender, status, origin, image, id})
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
            <button onClick={handleClick}>💖</button>
         ) : (
            <button onClick={handleClick}>💔</button>
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

export default connect(mapStateToprops, mapDispatchToProps)(Card);









