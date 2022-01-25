import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
                <div className="head">Browse Categories</div>
                <ul className="main-categories">
                    <li className="common-filter">
                        <form action="#">
                            <ul>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="men" name="brand" />
                                        <label htmlFor="men">Men<span> (3600)</span></label>
                                    </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="women" name="brand" />
                                        <label htmlFor="women">Women<span> (3600)</span></label>
                                </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="accessories" name="brand" />
                                        <label htmlFor="accessories">Accessories<span> (3600)</span></label>
                                </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="footwear" name="brand" />
                                    <label htmlFor="footwear">Footwear<span> (3600)</span></label>
                                </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="bayItem" name="brand" />
                                    <label htmlFor="bayItem">Bay item<span> (3600)</span></label>
                                </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="electronics" name="brand" />
                                    <label htmlFor="electronics">Electronics<span> (3600)</span></label>
                                </li>
                                <li className="filter-list">
                                    <input className="pixel-radio" type="radio" id="food" name="brand" />
                                    <label htmlFor="food">Food<span> (3600)</span></label>
                                </li>
                            </ul>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="sidebar-filter">
                <div className="top-filter-head">Product Filters</div>
                <div className="common-filter">
                    <div className="head">Brands</div>
                    <form action="#">
                        <ul>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="apple" name="brand" />
                                    <label htmlFor="apple">Apple<span>(29)</span></label>
                                </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="asus" name="brand"/>
                                    <label htmlFor="asus">Asus<span>(29)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="gionee" name="brand" />
                                <label htmlFor="gionee">Gionee<span>(19)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="micromax" name="brand" />
                                <label htmlFor="micromax">Micromax<span>(19)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="samsung" name="brand" />
                                <label htmlFor="samsung">Samsung<span>(19)</span></label>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="common-filter">
                    <div className="head">Color</div>
                    <form action="#">
                        <ul>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="black" name="color" />
                                    <label htmlFor="black">Black<span>(29)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="balckleather" name="color" />
                                    <label htmlFor="balckleather">Black Leather<span>(29)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="blackred" name="color" />
                                    <label htmlFor="blackred">Black with red<span>(19)</span></label>
                                </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="gold" name="color" />
                                <label htmlFor="gold">Gold<span>(19)</span></label>
                            </li>
                            <li className="filter-list">
                                <input className="pixel-radio" type="radio" id="spacegrey" name="color" />
                                <label htmlFor="spacegrey">Spacegrey<span>(19)</span></label>
                            </li>
                        </ul>
                    </form>
                </div>
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
        </div>
    );
};

export default Sidebar;