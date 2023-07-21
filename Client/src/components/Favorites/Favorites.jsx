import { useState } from "react"
import style from "./Favorites.module.css"
import { connect, useSelector, useDispatch } from "react-redux"
import { filterCards, orderCards, reset } from "../../redux/actions/actions"
import Card from "../card/Card"


function Favorites(props){

    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const [booleano, setBooleano] = useState(false)

    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setBooleano(!booleano)
    }
    function handleFilter(event){
        if(event.target.value ==="RESET"){
            dispatch(reset())
        }else{
            dispatch(filterCards (event.target.value))  
        }

    }

    return (

        <div>
            <div className={style.selects}>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="RESET">RESET</option>
                    <option value="unknown">UNKNOWN</option>
                    <option value="Genderless">GENDERLESS</option>
                    <option value="Female">FEMALE</option>
                    <option value="Male">MALE</option>
                </select>
            </div>
            <div className={style.container}>
                {favorites?.map((char) => (
                    <Card
                    key = {char.id}
                    id = {char.id}
                    name = {char.name}
                    species = {char.species}
                    status = {char.status} 
                    gender = {char.gender}
                    origin = {char.origin.name}
                    image = {char.image}
                    char/>
                ))}
            </div>
        </div>
        
        
    )
}

export function mapStateToProps(state){
    return {
        favorites: state.favorites 
    }
}

export default connect(mapStateToProps)(Favorites)