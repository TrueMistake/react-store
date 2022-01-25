import React from 'react';
import {Link} from "react-router-dom";
import Loader from "../Loader";

const Products = ({products, isLoading}) => {
    if (isLoading) {
        return <Loader/>
    }

    return (
        <>
        {products.map(product =>
            <div className="col-md-6 col-lg-4" key={product.id}>
                <div className="card text-center card-product">
                    <div className="card-product__img">
                        <img className="card-img" src={product.image} alt="" />
                        <ul className="card-product__imgOverlay">
                            <li>
                                <button><i className="ti-search"></i></button>
                            </li>
                            <li>
                                <button><i className="ti-shopping-cart"></i></button>
                            </li>
                            <li>
                                <button><i className="ti-heart"></i></button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <p>{product.category}</p>
                        <h4 className="card-product__title"><Link to={`/shop/${product.id}`}>{product.title}</Link></h4>
                        <p className="card-product__price">${product.price}</p>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default Products;