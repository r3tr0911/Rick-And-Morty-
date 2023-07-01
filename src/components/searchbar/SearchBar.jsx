import style from './SearchBar.module.css'
export default function SearchBar(props) {
   return (
      <div>
         <input className={style.search} type='search' placeholder='Busca un personaje...' />
         <button className={style.button} onClick={props.oneSearch}>AGREGAR</button>
      </div>
   );
}
