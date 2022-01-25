import axios from "axios";
import {
    FETCH_BLOG,
    FETCH_BLOG_LOADING,
    FETCH_BLOG_TOTAL,
    FETCH_DETAIL_COMMENTS,
    FETCH_DETAIL_COMMENTS_LOADING,
    FETCH_DETAIL_POST,
    FETCH_DETAIL_POST_LODAING,
    FETCH_LATES_BLOG,
    FETCH_LATES_BLOG_LOADING
} from "./actionTypes";

export function getLatesBlog() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_LATES_BLOG_LOADING})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
            dispatch({type: FETCH_LATES_BLOG, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getBlogsFivePosts(obj) {
    return async dispatch => {
        try {
            dispatch({type: FETCH_BLOG_LOADING})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: obj.limit,
                    _page: obj.page
                }
            });

            dispatch({type: FETCH_BLOG, payload: response.data})
            dispatch({type: FETCH_BLOG_TOTAL, payload: response.headers['x-total-count']})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getPost(idx) {
    return async dispatch => {
        try {
            dispatch({type: FETCH_DETAIL_POST_LODAING})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idx}`);
            dispatch({type: FETCH_DETAIL_POST, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getPostComments(idx) {
    return async disptach => {
        try {
            disptach({type: FETCH_DETAIL_COMMENTS_LOADING})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idx}/comments`);
            disptach({type: FETCH_DETAIL_COMMENTS, payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}