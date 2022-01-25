import {FETCH_PHOTOS, FETCH_PHOTOS_LOADING} from "../actions/actionTypes";

const initialState = {
    photos: [],
    isLoading: false
}

export function instargramReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS:
            return {
                ...state, isLoading: false, photos: action.payload
            }
        case FETCH_PHOTOS_LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}