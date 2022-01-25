import axios from "axios";
import {FETCH_PHOTOS, FETCH_PHOTOS_LOADING} from "./actionTypes";

export function getPhotos() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_PHOTOS_LOADING})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6');

            dispatch({type: FETCH_PHOTOS, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}