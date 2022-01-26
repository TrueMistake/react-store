import React from 'react';
import BlockBanner from "../components/BlockBanner";
import GoogleMapReact from 'google-map-react';

const Contact = () => {
    return (
        <main className="main">
            <BlockBanner title="Contact Us" text="Contact Us"/>
            <section className="section-margin--small">
                <div className="container">
                    <div className="d-none d-sm-block mb-5 pb-4">
                        <div id="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I' }}
                                defaultCenter={{lat: -31.197, lng: 150.744}}
                                defaultZoom={9}
                                yesIWantToUseGoogleMapApiInternals
                            >
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>California United States</h3>
                                    <p>Santa monica bullevard</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-headphone"></i></span>
                                <div className="media-body">
                                    <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <form action="#" className="form-contact contact_form" method="post" id="contactForm"
                                  noValidate="novalidate">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="form-group">
                                            <textarea className="form-control different-control w-100" name="message" id="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center text-md-right mt-3">
                                    <button type="submit" className="button button--active button-contactForm">Send
                                        Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;