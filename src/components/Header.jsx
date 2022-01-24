import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand logo_h" to="/">
                            <img src={require ('../img/logo.png')} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="/shop" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                          role="button" aria-haspopup="true"
                                          aria-expanded="false">Shop</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Shop Category</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Product Details</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Product Checkout</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Confirmation</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Shopping Cart</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="/blog" className="nav-link dropdown-toggle">Blog</Link>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                          role="button" aria-haspopup="true"
                                          aria-expanded="false">Pages</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Register</Link></li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Tracking</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>

                            <ul className="nav-shop">
                                <li className="nav-item">
                                    <button><i className="ti-search"></i></button>
                                </li>
                                <li className="nav-item">
                                    <button>
                                        <i className="ti-shopping-cart"></i>
                                        <span className="nav-shop__circle">3</span>
                                    </button>
                                </li>
                                <li className="nav-item"><Link className="button button-header" to="/">Buy Now</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;