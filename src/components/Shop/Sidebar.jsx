import React, {useEffect} from 'react';
import {filterCategoryCount} from "../../utils/filter";
import {useDispatch, useSelector} from "react-redux";
import {getHeroSliderCategories} from "../../redux/actions/products";

const Sidebar = ({products, category, changeCategory}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.heroSlider.categories);
    const countProductCategories = filterCategoryCount(products.products, categories);

    useEffect(() => {
        dispatch(getHeroSliderCategories())
    }, [])

    return (
        <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
                <div className="head">Browse Categories</div>
                <ul className="main-categories">
                    <li className="common-filter">
                        <form action="#">
                            <ul>
                                {countProductCategories.map((cat,index) =>
                                    <li className="filter-list" key={index}>
                                        <label>
                                            <input className="pixel-radio" type="radio" name="category" onChange={() => changeCategory(cat.name)} checked={category !== ''}/>
                                            {cat.name}<span> ({cat.count})</span>
                                        </label>
                                    </li>
                                )}
                            </ul>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="sidebar-filter">
                <div className="top-filter-head">Product Filters</div>
                <div className="common-filter">
                    <div className="head">Price</div>
                    <div className="price-range-area">
                        <div id="price-range" className="noUi-target noUi-ltr noUi-horizontal">
                            <div className="noUi-base">
                                <div className="noUi-origin">
                                    <div className="noUi-handle noUi-handle-lower" data-handle="0" tabIndex="0"
                                         role="slider" aria-orientation="horizontal" aria-valuemin="0.0"
                                         aria-valuemax="50.0" aria-valuenow="10.0" aria-valuetext="500.00"></div>
                                </div>
                                <div className="noUi-connect"></div>
                                <div className="noUi-origin">
                                    <div className="noUi-handle noUi-handle-upper" data-handle="1" tabIndex="0"
                                         role="slider" aria-orientation="horizontal" aria-valuemin="10.0"
                                         aria-valuemax="100.0" aria-valuenow="50.0" aria-valuetext="4000.00"></div>
                                </div>
                            </div>
                        </div>
                        <div className="value-wrapper d-flex">
                            <div className="price">Price:</div>
                            <span>$</span>
                            <div id="lower-value">500.00</div>
                            <div className="to">to</div>
                            <span>$</span>
                            <div id="upper-value">4000.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button primary-btn mt-3" onClick={() => changeCategory('')}>Clear</div>
        </div>
    );
};

export default Sidebar;