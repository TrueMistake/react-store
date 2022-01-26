import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/Shop/Sidebar";
import ShopList from "../../components/Shop/ShopList";
import BlockBanner from "../../components/BlockBanner";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/actions/products";
import Subscribe from "../../components/HomePage/Subscribe";
import Sorting from "../../components/Shop/Sorting";
import {searchProduct} from "../../utils/search";
import {findProductCategory} from "../../utils/filter";

const Shop = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(9);
    const products = useSelector(state => state.products);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const searchProducts = searchProduct(search, products.products);
    const filterCategory = findProductCategory(products.products, category);
    const resultProducts = category.length ? filterCategory : searchProducts

    const changeShowProduct = count => {
        setLimit(count)
    }

    const setSearchProduct = str => {
        setSearch(str)
    }

    const changeCategory = cat => {
        setCategory(cat)
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
                        <Sidebar products={products} category={category} changeCategory={changeCategory}/>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <Sorting changeShows={changeShowProduct} setSearchProduct={setSearchProduct}/>
                            <ShopList products={resultProducts} isLoading={products.isLoading}/>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe/>
        </main>
    );
};

export default Shop;