import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {singleProduct} from "../../redux/actions/products";
import BlockBanner from "../../components/BlockBanner";
import {getBuyPorducts} from "../../redux/actions/cart";

const ShopDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.singleProduct.single);
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [])

    const buyProduct = (product) => {
        dispatch(getBuyPorducts({product: product, buy: +count}))
    }

    return (
        <main className="main">
            <BlockBanner title="Our ShopDetail" text="Detail shop"/>
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={product.image} alt="" />
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{product.title}</h3>
                                <h2>${product.price}</h2>
                                <ul className="list">
                                    <li><a className="active" href="#"><span>Category</span> : {product.category}</a></li>
                                </ul>
                                <p>{product.description}</p>
                                <div className="product_count">
                                    <label htmlFor="qty">Quantity:</label>
                                    <input type="number" name="qty" id="sst" size="2" maxLength="12"
                                           value={count}
                                           title="Quantity:" className="input-text qty" onChange={e => setCount(e.target.value)}/>
                                    <div className="button primary-btn" onClick={() => buyProduct(product)}>Add to Cart</div>
                                </div>
                                <div className="card_area d-flex align-items-center">
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a>
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ShopDetail;