import { useState } from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../../redux/actions/actions";
import Card from "../card/Card";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [booleano, setBooleano] = useState(false);

  function handleOrder(event) {
    dispatch(orderCards(event.target.value));
    setBooleano(!booleano);
  }

  function handleFilter(event) {
    if (event.target.value === "RESET") {
      dispatch(reset());
    } else {
      dispatch(filterCards(event.target.value));
    }
  }

  return (
    <div className={style.container}>
      <div className={style.selects}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="unknown">UNKNOWN</option>
          <option value="Genderless">GENDERLESS</option>
          <option value="Female">FEMALE</option>
          <option value="Male">MALE</option>
        </select>

        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>

      <div className={style.cards}>
        {favorites?.map((char, index) => {
          if (!char || !char.id || !char.name) return null;

          return (
            <Card
              key={char.id || index}
              id={char.id}
              name={char.name}
              species={char.species}
              status={char.status}
              gender={char.gender}
              origin={char.origin?.name || "unknown"}
              image={char.image}
            />
          );
        })}
      </div>
    </div>
  );
}
