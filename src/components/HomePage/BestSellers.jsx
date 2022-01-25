import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
import {useDispatch, useSelector} from "react-redux";
import {getBestSellers} from "../../redux/actions/products";
import Loader from "../Loader";
SwiperCore.use([Pagination]);


const BestSellers = () => {
    const dispatch = useDispatch();
    const bestSeller = useSelector(state => state.bestSeller)

    useEffect(() => {
        dispatch(getBestSellers())
    }, []);

    if (bestSeller.isLoading) {
        return <Loader/>
    }

    return (
        <section className="section-margin calc-60px">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Popular Item in the market</p>
                    <h2>Best <span className="section-intro__style">Sellers</span></h2>
                </div>
                    <Swiper slidesPerView={4} spaceBetween={10} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        {bestSeller.products.map(product =>
                            <SwiperSlide key={product.id}>
                                <div className="card text-center card-product">
                                    <div className="card-product__img">
                                        <img className="img-fluid" src={product.image} alt="" />
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
                                        <h4 className="card-product__title"><Link to="/">{product.title}</Link></h4>
                                        <p className="card-product__price">${product.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
            </div>
        </section>
    );
};

export default BestSellers;