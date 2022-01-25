import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getLatesBlog} from "../../redux/actions/blog";
import Loader from "../Loader";

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogLates)

    useEffect(() => {
        dispatch(getLatesBlog())
    }, [])

    if (blogs.isLoading){
        return <Loader/>
    }

    return (
        <section className="blog">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Popular Item in the market</p>
                    <h2>Latest <span className="section-intro__style">News</span></h2>
                </div>
                <div className="row">
                    {blogs.blogs.map(blog =>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={blog.id}>
                            <div className="card card-blog">
                                <div className="card-blog__img">
                                    <img className="card-img rounded-0" src={require ('../../img/home/hero-slide1.png')} alt="" />
                                </div>
                                <div className="card-body">
                                    <ul className="card-blog__info">
                                        <li><Link to="/">By Admin</Link></li>
                                        <li><Link to="/"><i className="ti-comments-smiley"></i> 2 Comments</Link></li>
                                    </ul>
                                    <h4 className="card-blog__title">
                                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                    </h4>
                                    <p>{blog.body}</p>
                                    <Link className="card-blog__link" to={`/blog/${blog.id}`}>Read More <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blogs;