import { REMOVE_FAV, ADD_FAV, ORDER, FILTER } from "./actions_types";
import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty'

export const addFav = (payload) => {
    return async (dispatch) => {
        try {
        const {data} = await axios.post(`${URL}/fav`, payload)
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
        const {data} = await axios.delete(`${URL}/fav/${id}`)
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterCards = (filterValue) => {
    return {
        type: FILTER,
        payload: filterValue
    }
}

export const orderCards = (payload) => {
    return {
        type: ORDER,
        payload
    }
}