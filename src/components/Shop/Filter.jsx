import React from 'react';
import {useDispatch} from "react-redux";
import {FETCH_ALL_PRODUCT_ASC, FETCH_ALL_PRODUCT_DESC} from "../../redux/actions/actionTypes";

const Filter = ({changeShows}) => {
    const dispatch = useDispatch();

    const sortProduct = (prod) => {
        if (prod === 'asc') {
            dispatch({type: FETCH_ALL_PRODUCT_ASC})
        } else {
            dispatch({type: FETCH_ALL_PRODUCT_DESC})
        }
    }

    return (
        <div className="filter-bar d-flex flex-wrap align-items-center">
            <div className="sorting">
                <select className="nice-select" onChange={e => sortProduct(e.target.value)}>
                    <option value="asc">Sorting asc</option>
                    <option value="desc">Sorting desc</option>
                </select>
            </div>
            <div className="sorting mr-auto">
                <select className="nice-select" onChange={e => changeShows(e.target.value)}>
                    <option value="9">Show 9</option>
                    <option value="12">Show 12</option>
                    <option value="20">Show 20</option>
                </select>
            </div>
            <div>
                <div className="input-group filter-bar-search">
                    <input type="text" placeholder="Search" />
                        <div className="input-group-append">
                            <button type="button"><i className="ti-search"></i></button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;