import {FETCH_POST_AUTH, FETCH_POST_AUTH_LOADING} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    user:{}
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST_AUTH:
            return {
                ...state, isLoading: false, user: action.payload
            }
        case FETCH_POST_AUTH_LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state;
    }
}