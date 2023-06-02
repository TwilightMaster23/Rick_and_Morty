import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions/actions_types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

function rootReducer (state = initialState, { type, payload}) {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload],
                allCharacters:[...state.allCharacters, payload]
            }
        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: payload === 'All' ? state.allCharacters : filtered
            }
        case ORDER:
            const orderChar = state.myFavorites.sort((x, y) => {
                if(payload === 'A') {
                    return x.id - y.id
                } else {
                    return y.id - x.id
                }
            })
            return {
                ...state,
                myFavorites:[...orderChar]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter(char => char.id !== payload)
            }
        default:
            return {...state}
    }
}

export default rootReducer;
