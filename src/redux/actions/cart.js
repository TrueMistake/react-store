import {FETCH_CART_BUY, FETCH_CART_BUY_LOADING} from "./actionTypes";

export function getBuyPorducts(obj) {
    return async dispatch => {
        try {
            dispatch({type: FETCH_CART_BUY_LOADING})
            dispatch({type: FETCH_CART_BUY, payload: obj})
        } catch (e) {
            console.log(e)
        }
    }
}