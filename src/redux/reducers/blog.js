import {
    FETCH_BLOG,
    FETCH_BLOG_LOADING,
    FETCH_BLOG_TOTAL,
    FETCH_LATES_BLOG,
    FETCH_LATES_BLOG_LOADING
} from "../actions/actionTypes";

const initialState = {
    blogs: [],
    isLoading: false
}

export function blogReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LATES_BLOG:
            return {
                ...state, isLoading: false, blogs: action.payload
            }
        case FETCH_LATES_BLOG_LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}

export function blogPageReducer(state = {isLoading: false, blog: [], total: null}, action) {
    switch (action.type) {
        case FETCH_BLOG:
            return {
                ...state, isLoading: false, blog: action.payload
            }
        case FETCH_BLOG_TOTAL:
            return {
                ...state, total: action.payload
            }
        case FETCH_BLOG_LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}