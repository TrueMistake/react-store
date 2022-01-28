import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import Nav from "./Nav";

const Header = () => {
    const count = useSelector(state => state.buy)

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
                            <Nav/>

                            <ul className="nav-shop">
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-item__link">
                                        <i className="ti-shopping-cart"></i>
                                        {count.buy.length
                                        ? <span className="nav-shop__circle">{count.buy.length}</span>
                                        : null}
                                    </Link>
                                </li>
                                <li className="nav-item"><Link className="button button-header" to="/cart">Buy Now</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;