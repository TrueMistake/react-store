import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-area">
                <div className="container">
                    <div className="row section_gap">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget tp_widgets">
                                <h4 className="footer_title large_title">Our Mission</h4>
                                <p>
                                    So seed seed green that winged cattle in. Gathering thing made fly you're no
                                    divided deep moved us lan Gathering thing us land years living.
                                </p>
                                <p>
                                    So seed seed green that winged cattle in. Gathering thing made fly you're no divided
                                    deep moved
                                </p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget tp_widgets">
                                <h4 className="footer_title">Quick Links</h4>
                                <ul className="list">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget tp_widgets">
                                <h4 className="footer_title">Contact Us</h4>
                                <div className="ml-40">
                                    <p className="sm-head">
                                        <span className="fa fa-location-arrow"></span>
                                        Head Office
                                    </p>
                                    <p>123, Main Street, Your City</p>

                                    <p className="sm-head">
                                        <span className="fa fa-phone"></span>
                                        Phone Number
                                    </p>
                                    <p>
                                        +123 456 7890 <br/>
                                        +123 456 7890
                                    </p>

                                    <p className="sm-head">
                                        <span className="fa fa-envelope"></span>
                                        Email
                                    </p>
                                    <p>
                                        free@infoexample.com <br/>
                                        www.infoexample.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row d-flex">
                        <p className="col-lg-12 footer-text text-center">
                            Copyright ??
                            2022 All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;