import {
    FETCH_ALL_PRODUCTS, FETCH_BEST_SELLER, FETCH_BEST_SELLER_LOADING,
    FETCH_HERO_SLIDER,
    FETCH_IS_LOADING,
    FETCH_TRENDING_LOADER,
    FETCH_TRENDING_PRODUCTS
} from "./actionTypes";
import axios from "axios";

export function getProducts() {
    return async dispatch => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');

            dispatch({type: FETCH_ALL_PRODUCTS, products: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getHeroSliderCategories() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_IS_LOADING});
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            dispatch({type: FETCH_HERO_SLIDER, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getTrendingProducts() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_TRENDING_LOADER});
            const response = await axios.get('https://fakestoreapi.com/products?limit=8');
            dispatch({type: FETCH_TRENDING_PRODUCTS, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getBestSellers() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_BEST_SELLER_LOADING});
            const response = await axios.get('https://fakestoreapi.com/products?limit=8');
            dispatch({type: FETCH_BEST_SELLER, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}