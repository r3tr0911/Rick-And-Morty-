import Card from './Card';

export default function Cards(props) {

 
   
   
   
   return (
      <div>
         <input type='search' placeholder='Busca un personaje...' />
         <button onClick={props.oneSearch}>Agreagar</button>
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

// onClose={() => window.alert('Emulamos que se cierra la card')}