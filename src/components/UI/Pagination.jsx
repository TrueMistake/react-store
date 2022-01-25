import React from 'react';
import {getPageCount, getPagesArray} from "../../utils/pages";

const Pagination = ({total, limit, page, changePage}) => {
    const pages = getPageCount(total, limit);
    const pageArray = getPagesArray(pages);



    return (
        <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
                {pageArray.map(el =>
                    <li className={page === el ? 'page-item active' : 'page-item'} onClick={() => changePage(el)} key={el}>
                        <span className="page-link">{el < 10 ? `0${el}` : el}</span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;