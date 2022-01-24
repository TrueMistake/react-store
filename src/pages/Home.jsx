import React from 'react';
import HeroBanner from "../components/HomePage/HeroBanner";
import HeroCarousel from "../components/HomePage/HeroCarousel";
import TrendingProducts from "../components/HomePage/TrendingProducts";
import Banner from "../components/HomePage/Banner";
import BestSellers from "../components/HomePage/BestSellers";
import Blogs from "../components/HomePage/Blogs";
import Subscribe from "../components/HomePage/Subscribe";

const Home = () => {
    return (
        <main className="main">
            <HeroBanner/>
            <HeroCarousel/>
            <TrendingProducts/>
            <Banner/>
            <BestSellers/>
            <Blogs/>
            <Subscribe/>
        </main>
    );
};

export default Home;