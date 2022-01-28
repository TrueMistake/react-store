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
                                            <input className="pixel-radio" type="radio" name="category" onChange={() => changeCategory(cat.name)} checked={category === cat.name}/>
                                            {cat.name}<span> ({cat.count})</span>
                                        </label>
                                    </li>
                                )}
                            </ul>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="button primary-btn mt-3" onClick={() => changeCategory('')}>Clear</div>
        </div>
    );
};

export default Sidebar;