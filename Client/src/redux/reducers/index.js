import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET} from "../actions/types";

const initialGlobalState = {
favorites: [],
allCharacters: [],
access: false,
aunMas: []  
}


export default function rootReducer(state = initialGlobalState, action){
    switch(action.type){
        case ADDFAVORITE:
            const addPj = [...state.allCharacters, action.payload]
            return {...state, favorites:addPj, allCharacters: [...addPj]};

        case DELETEFAVORITE: 
            return {...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload),
            allCharacters: state.allCharacters.filter((fav) => fav.id !== action.payload)
            }


        case FILTER:
            return {...state, favorites: state.allCharacters.filter((pj) => pj.gender === action.payload),}

        case ORDER:
            let copy = state.favorites.sort((a, b) => {
                if(action.payload === "A"){
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1
                    return 0
                } else {
                    if (a.id > b.id) return -1;
                    if (b.id > a.id) return 1
                    return 0
                }
            })
            return{
                ...state,
                favorites: copy,
            } 

            case RESET:
               return {...state, favorites: state.allCharacters}

        default:
            return {...state};
    }
}