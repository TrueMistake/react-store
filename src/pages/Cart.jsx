import React from 'react';
import BlockBanner from "../components/BlockBanner";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Cart = () => {
    const products = useSelector(state => state.buy)

    return (
        <main className="main">
            <BlockBanner title="Shopping Cart" text="Shopping Cart"/>
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            {products.buy.length === 0
                            ? <h1 className="center mb-10">Корзина пустая</h1>
                            : <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.buy.map(product =>
                                    <tr key={product.product.id}>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src={product.product.image} alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>{product.product.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${product.product.price}</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input type="number" name="qty" maxLength="12"
                                                       title="Quantity:" className="input-text qty" value={product.buy}/>
                                                <button className="increase items-count" type="button">
                                                    <i className="lnr lnr-chevron-up"></i>
                                                </button>
                                                <button className="reduced items-count" type="button">
                                                    <i className="lnr lnr-chevron-down"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${product.product.price * product.buy}</h5>
                                        </td>
                                    </tr>
                                )}

                                <tr>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${products.total}</h5>
                                    </td>
                                </tr>
                                <tr className="shipping_area">
                                    <td className="d-none d-md-block">

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Shipping</h5>
                                    </td>
                                    <td>
                                        <div className="shipping_box">
                                            <ul className="list">
                                                <li><span>Flat Rate: $5.00</span></li>
                                                <li><span>Free Shipping</span></li>
                                                <li><span>Flat Rate: $10.00</span></li>
                                                <li className="active"><span>Local Delivery: $2.00</span></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="out_button_area">
                                    <td className="d-none-l">

                                    </td>
                                    <td className="">

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div className="checkout_btn_inner d-flex flex-end align-items-center">
                                            <Link className="primary-btn ml-2" to="/checkout">Proceed to checkout</Link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;