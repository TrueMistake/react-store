import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTrendingProducts} from "../../redux/actions/products";
import {Link} from "react-router-dom";
import Loader from "../Loader";

const TrendingProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.trending);

    useEffect(() => {
        dispatch(getTrendingProducts())
    },[])

    if (products.isLoading) {
        return <Loader/>
    }

    return (
        <section className="section-margin calc-60px">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Popular Item in the market</p>
                    <h2>Trending <span className="section-intro__style">Product</span></h2>
                </div>
                <div className="row">
                    {products.products.map(product =>
                        <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                            <div className="card text-center card-product">
                                <div className="card-product__img">
                                    <img className="card-img" src={product.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <p>{product.category}</p>
                                    <h4 className="card-product__title">
                                        <Link to="/">{product.title}</Link>
                                    </h4>
                                    <p className="card-product__price">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;