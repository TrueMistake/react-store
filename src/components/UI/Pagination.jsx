import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogsFivePosts} from "../../redux/actions/blog";

const Pagination = ({total}) => {
    const dispatch = useDispatch();
    const limit = 5;
    const [page, setPage] = useState(1);

    const changePage = (count) => {
        dispatch(getBlogsFivePosts({limit: limit, page: count}))
    }

    return (
        <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
                {/*<li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                          <span className="lnr lnr-chevron-left"></span>
                      </span>
                    </a>
                </li>*/}
                <li className="page-item" onClick={changePage(1)}>
                    <Link to="/" className="page-link">01</Link>
                </li>
                <li className="page-item active">
                    <Link to="/" className="page-link">02</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">03</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">04</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">09</Link>
                </li>
                {/*<li className="page-item">
                    <Link to="/" className="page-link" aria-label="Next">
                      <span aria-hidden="true">
                          <span className="lnr lnr-chevron-right"></span>
                      </span>
                    </Link>
                </li>*/}
            </ul>
        </nav>
    );
};

export default Pagination;