import React from 'react';

const Subscribe = () => {
    return (
        <section className="subscribe-position">
            <div className="container">
                <div className="subscribe text-center">
                    <h3 className="subscribe__title">Get Update From Anywhere</h3>
                    <p>Bearing Void gathering light light his eavening unto dont afraid</p>
                    <div id="mc_embed_signup">
                        <form target="_blank"
                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" className="subscribe-form form-inline mt-5 pt-1" noValidate="true">
                            <div className="form-group ml-sm-auto">
                                <input className="form-control mb-1" type="email" name="EMAIL"
                                       placeholder="Enter your email" onFocus="this.placeholder = ''"
                                       onBlur="this.placeholder = 'Your Email Address '" />
                                    <div className="info"></div>
                            </div>
                            <button className="button button-subscribe mr-auto mb-1" type="submit">Subscribe Now</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Subscribe;