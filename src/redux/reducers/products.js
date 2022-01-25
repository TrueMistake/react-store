import {
    FETCH_ALL_PRODUCT_ASC,
    FETCH_ALL_PRODUCT_DESC,
    FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_LOADING, FETCH_BEST_SELLER, FETCH_BEST_SELLER_LOADING,
    FETCH_HERO_SLIDER,
    FETCH_IS_LOADING, FETCH_SINGLE_PRODUCT, FETCH_SINGLE_PRODUCT_LOADING,
    FETCH_TRENDING_LOADER,
    FETCH_TRENDING_PRODUCTS
} from "../actions/actionTypes";

export function productsReducer (state = {products: [], isLoading: false}, action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state, isLoading: false, products: action.payload
            }
        case FETCH_ALL_PRODUCTS_LOADING:
            return {
                ...state, isLoading: true
            }
        case FETCH_ALL_PRODUCT_DESC:
            const sortDesc = state.products.sort((a,b) => b.id - a.id);
            return {
                ...state, products: sortDesc
            }
        case FETCH_ALL_PRODUCT_ASC:
            const sortAsc = state.products.sort((a,b) => a.id - b.id);
            return {
                ...state, products: sortAsc
            }
        default:
            return state
    }
}

export function getSingleReducer(state = {isLoading: false, single: {}}, action) {
    switch (action.type) {
        case FETCH_SINGLE_PRODUCT_LOADING:
            return {
                ...state, isLoading: true
            }
        case FETCH_SINGLE_PRODUCT:
            return {
                ...state, isLoading: false, single: action.payload
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