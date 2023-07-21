import Card from "../card/Card.jsx";
import style from './Cards.module.css';

export default function Cards(props) {
   
   return (
      <div className={style.container}>
         {props.characters.map((pj)=> (
            <Card
            key = {pj.id}
            id = {pj.id}
            name = {pj.name}
            species = {pj.species}
            status = {pj.status} 
            gender = {pj.gender}
            origin = {pj.origin.name}
            image = {pj.image}
            onClose={props.onClose}
            />          
         ))}
      </div>
   );
}

