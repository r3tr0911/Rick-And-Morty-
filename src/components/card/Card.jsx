import React from 'react';
import style from './Card.module.css';

const Card =({name,species, onClose,gender,status,origin,image, key}) => {
   // const {character} = props;
   return (
      <div className={style.container}>
         <button className={style.btn} onClick={onClose}>X</button>
            <img className={style.img} src={image} alt ={name} />
            <h2 className={style.name}>{name}</h2>

         <div className={style.data}>
            <h3 className={style.info}>{species}</h3>
            <h3 className={style.info}>{gender}</h3>
         </div>
      </div>
   );
};

export default Card
