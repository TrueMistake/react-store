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
    singleProduct: getSingleReducer
})

export default rootReducer;