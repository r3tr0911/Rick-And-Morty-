import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

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
 
   return (
      <div className={style.container}>
         <button className={style.btn} onClick={()=> onClose(id)}>X</button>
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














