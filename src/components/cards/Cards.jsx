import Card from '../card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   
   return (
      <div className={style.div}>
         {props.characters.map((personaje)=> (
            <Card
            key = {personaje.id}
            name = {personaje.name}
            status = {personaje.status} 
            species = {personaje.species}
            gender = {personaje.gender}
            origin = {personaje.origin.name}
            image = {personaje.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />          
         ))}
         
      </div>
   )
}

