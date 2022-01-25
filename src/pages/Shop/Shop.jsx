import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/Shop/Sidebar";
import Filter from "../../components/Shop/Filter";
import ShopList from "../../components/Shop/ShopList";
import BlockBanner from "../../components/BlockBanner";
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/products";

const Shop = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(9);

    const changeShowProduct = count => {
        setLimit(count)
    }

    useEffect(() => {
        dispatch(getProducts(limit))
    }, [limit])

    return (
        <main className="main">
            <BlockBanner title="Our Shop" text="Shop"/>
            <section className="section-margin--small mb-5">
                <div className="container">
                    <div className="row">
                        <Sidebar/>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <Filter changeShows={changeShowProduct}/>
                            <ShopList/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;