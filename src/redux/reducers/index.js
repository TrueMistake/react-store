import {combineReducers} from "redux";
import {
    productsReducer,
    heroSliderReducer,
    trendingProductReducer,
    bestSellersReducer,
    getSingleReducer
} from "./products";
import {blogPageReducer, blogReducer, detailPostCommentsReducer, detailPostReducer} from "./blog";
import {instargramReducer} from "./instagram";
import {authReducer} from "./auth";
import {cartReducer} from "./cart";

const rootReducer = combineReducers({
    products: productsReducer,
    heroSlider: heroSliderReducer,
    trending: trendingProductReducer,
    bestSeller: bestSellersReducer,
    blogLates: blogReducer,
    blog: blogPageReducer,
    instagram: instargramReducer,
    detailPost: detailPostReducer,
    detailComments: detailPostCommentsReducer,
    singleProduct: getSingleReducer,
    auth: authReducer,
    buy: cartReducer
})

export default rootReducer;