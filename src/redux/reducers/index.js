import {combineReducers} from "redux";
import {productsReducer, heroSliderReducer, trendingProductReducer, bestSellersReducer} from "./products";
import {blogPageReducer, blogReducer} from "./blog";

const rootReducer = combineReducers({
    products: productsReducer,
    heroSlider: heroSliderReducer,
    trending: trendingProductReducer,
    bestSeller: bestSellersReducer,
    blogLates: blogReducer,
    blog: blogPageReducer
})

export default rootReducer;