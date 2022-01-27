import React from 'react';
import BlockBanner from "../components/BlockBanner";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <main className="main">
            <BlockBanner title="Login / Register" text="Login/Register"/>
            <section className="login_box_area section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <div className="hover">
                                    <h4>Already have an account?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good
                                        example of this is the</p>
                                    <Link className="button button-account" to="/login">Login Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner register_form_inner">
                                <h3>Create an account</h3>
                                <form className="row login_form" action="/" id="register_form">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name"
                                               placeholder="Username" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="email" name="email"
                                               placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="password" name="password"
                                               placeholder="Password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="confirmPassword"
                                               name="confirmPassword" placeholder="Confirm Password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                                <label htmlFor="f-option2">Keep me logged in</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit"
                                                className="button button-register w-100">Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;