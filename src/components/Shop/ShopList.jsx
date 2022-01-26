import React from 'react';
import Products from "./Products";

const ShopList = ({products, isLoading}) => {
    return (
        <section className="lattest-product-area pb-40 category-list">
            <div className="row">
                <Products products={products} isLoading={isLoading}/>
            </div>
        </section>
    );
};

export default ShopList;