import {FETCH_POST_AUTH, FETCH_POST_AUTH_LOADING} from "./actionTypes";
import axios from "axios";

export function authPost(obj) {
    return async dispatch => {
        try {
            dispatch({type: FETCH_POST_AUTH_LOADING})
            const response = await axios.post('https://fakestoreapi.com/auth/login',{
                method:'POST',
                mode: 'no-cors',
                body:JSON.stringify({
                    username: obj.username.value,
                    password: obj.password.value
                })
            })
            dispatch({type: FETCH_POST_AUTH, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}