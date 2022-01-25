import React, {useEffect} from 'react';
import Products from "./Products";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/actions/products";

const ShopList = () => {
    const products = useSelector(state => state.products)

    return (
        <section className="lattest-product-area pb-40 category-list">
            <div className="row">
                <Products products={products.products} isLoading={products.isLoading}/>
            </div>
        </section>
    );
};

export default ShopList;