import {
    FETCH_BLOG,
    FETCH_BLOG_LOADING,
    FETCH_BLOG_TOTAL, FETCH_DETAIL_COMMENTS,
    FETCH_DETAIL_COMMENTS_LOADING,
    FETCH_DETAIL_POST,
    FETCH_DETAIL_POST_LODAING,
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

const initialStateBlog = {
    isLoading: false,
    blog: [],
    total: null
}
export function blogPageReducer(state = initialStateBlog, action) {
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

export function detailPostReducer(state = {post: {}, isLoading: false,}, action) {
    switch (action.type) {
        case FETCH_DETAIL_POST_LODAING:
            return {
                ...state, isLoading: true
            }
        case FETCH_DETAIL_POST:
            return {
                ...state, isLoading: false, post: action.payload
            }
        default:
            return state
    }
}

export function detailPostCommentsReducer(state = {isLoading: false, comments:[]}, action) {
    switch (action.type) {
        case FETCH_DETAIL_COMMENTS_LOADING:
            return {
                ...state, isLoading: true
            }
        case FETCH_DETAIL_COMMENTS:
            return {
                ...state, comments: action.payload
            }
        default:
            return state
    }
}