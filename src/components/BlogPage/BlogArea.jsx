import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../UI/Pagination";
import {getBlogsFivePosts} from "../../redux/actions/blog";
import Loader from "../Loader";

const BlogArea = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog);
    const limit = 5;
    const total = blogs.total;
    const [page, setPage] = useState(1);

    const changePage = page => {
        setPage(page)
    }

    useEffect(() => {
        dispatch(getBlogsFivePosts({limit: limit, page: page}))
    }, [page])

    if (blogs.isLoading) {
        return <Loader/>
    }

    return (
        <section className="blog_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog_left_sidebar">
                            {blogs.blog.map(blog =>
                                <article className="row blog_item" key={blog.id}>
                                    <div className="col-md-3">
                                        <div className="blog_info text-right">
                                            <div className="post_tag">
                                                <Link to="/">Food,</Link>
                                                <Link to="/" className="active">Technology,</Link>
                                                <Link to="/">Politics,</Link>
                                                <Link to="/">Lifestyle</Link>
                                            </div>
                                            <ul className="blog_meta list">
                                                <li>
                                                    <Link to="/">Mark wiens
                                                        <i className="lnr lnr-user"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">12 Dec, 2017
                                                        <i className="lnr lnr-calendar-full"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">1.2M Views
                                                        <i className="lnr lnr-eye"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">06 Comments
                                                        <i className="lnr lnr-bubble"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                            <img src={require ('../../img/home/hero-slide1.png')} alt="" />
                                            <div className="blog_details">
                                                <Link to={`/blog/${blog.id}`}>
                                                    <h2>{blog.title}</h2>
                                                </Link>
                                                <p>{blog.body}</p>
                                                <Link className="button button-blog" to={`/blog/${blog.id}`} >View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )}
                            <Pagination total={total} limit={limit} page={page} changePage={changePage}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogArea;