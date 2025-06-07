import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET } from "./types";
import axios from "axios";

// ACTION | addFav
export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/favorites/";
  return async  (dispatch) => {
    try {
      const response = await axios.post(endpoint, character)
      const { data } = response
      return dispatch({
        type: ADDFAVORITE,
        payload: data,
    });
    } catch (error) {
      alert(error.message)
    }
  }
}
  

export const deleteFavorite = (id) => {
  const endpoint = "http://localhost:3001/favorites/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      return dispatch({
        type: DELETEFAVORITE,
        payload: data,
      });
    } catch (error) {
      alert(error.message)
    }
  }
};

export function filterCards(gender) {
  return { type: FILTER, payload: gender };
}

export function orderCards(order) {
  return { type: ORDER, payload: order };
}

export function reset() {
  return { type: RESET };
}