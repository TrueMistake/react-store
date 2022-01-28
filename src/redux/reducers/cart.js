import {FETCH_CART_BUY, FETCH_CART_BUY_LOADING} from "../actions/actionTypes";

function checkBuyProduct(array, obj) {
    if (array.length === 0) {
        array.push(obj)
        return array
    }

    let flag = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i].product.id === obj.product.id) {
            array[i].buy += +obj.buy
            flag = false;
        }
    }

    if (flag) {
        array.push(obj)
    }
    return array
}
function totalPrice(array) {
    let total = 0;
    array.forEach(item => {
        total += +item.product.price * +item.buy
    })
    return total
}

const initialState = {
    buy:[],
    isLoading: false,
    total: 0
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CART_BUY_LOADING:
            return {
                ...state, isLoading: true
            }
        case FETCH_CART_BUY:
            return {
                isLoading: false, buy: checkBuyProduct(state.buy,action.payload), total: totalPrice(state.buy)
            }
        default:
            return state
    }
}