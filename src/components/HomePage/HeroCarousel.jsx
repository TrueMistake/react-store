import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getHeroSliderCategories} from "../../redux/actions/products";
import Loader from "../Loader";

SwiperCore.use([Pagination]);

const HeroCarousel = () => {
    const dispatch = useDispatch();
    const heroCategories = useSelector(state => state.heroSlider);
    useEffect(() => {
        dispatch(getHeroSliderCategories())
    }, [])

    if (heroCategories.isLoading) {
        return <Loader/>
    }

    return (
        <div className="section-margin mt-0">
            <Swiper slidesPerView={3} spaceBetween={10} pagination={{
                "clickable": true
            }} className="mySwiper">
                {heroCategories.categories.map((cat, index) =>
                    <SwiperSlide key={index}>
                        <div className="hero-carousel__slide">
                            <img src="" alt="" className="img-fluid" />
                            <Link to={`/shop/`} className="hero-carousel__slideOverlay">
                                <h3>{cat}</h3>
                                <p>Accessories Item</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;