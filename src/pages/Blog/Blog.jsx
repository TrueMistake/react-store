import React from 'react';
import BlogArea from "../../components/BlogPage/BlogArea";
import Instagram from "../../components/Instagram";
import BlockBanner from "../../components/BlockBanner";

const Blog = () => {
    return (
        <main className="main">
            <BlockBanner title="Our Blog" text="Blog"/>
            <BlogArea/>
            <Instagram/>
        </main>
    );
};

export default Blog;