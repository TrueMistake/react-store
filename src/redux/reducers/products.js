import {
    FETCH_ALL_PRODUCTS, FETCH_BEST_SELLER, FETCH_BEST_SELLER_LOADING,
    FETCH_HERO_SLIDER,
    FETCH_IS_LOADING,
    FETCH_TRENDING_LOADER,
    FETCH_TRENDING_PRODUCTS
} from "../actions/actionTypes";

const initialState = {
    products: []
}

export function productsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

export function heroSliderReducer(state = {categories: [], isLoading: false}, action) {
    switch (action.type) {
        case FETCH_HERO_SLIDER:
            return {
                ...state, isLoading: false, categories: action.payload
            }
        case FETCH_IS_LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}


export function trendingProductReducer(state = {isLoading: false, products: []}, action) {
    switch (action.type) {
        case FETCH_TRENDING_LOADER:
            return {
                ...state, isLoading: true
            }
        case FETCH_TRENDING_PRODUCTS:
            return {
                ...state, isLoading: false, products: action.payload
            }
        default:
            return state
    }
}


export function bestSellersReducer(state = {isLoading: false, products: []}, action) {
    switch (action.type) {
        case FETCH_BEST_SELLER_LOADING:
            return {
                ...state, isLoading: true
            }
        case FETCH_BEST_SELLER:
            return {
                ...state, isLoading: false, products: action.payload
            }
        default:
            return state
    }
}