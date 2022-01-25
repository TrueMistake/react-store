import React from 'react';
import Post from "../../components/BlogDetail/Post";
import {useParams} from "react-router-dom";
import Instagram from "../../components/Instagram";
import BlockBanner from "../../components/BlockBanner";

const BlogDetail = () => {
    const {id} = useParams()
    return (
        <main className="main">
            <BlockBanner title="Our Detail blog" text="Detail blog"/>
            <Post id={id}/>
            <Instagram/>
        </main>
    );
};

export default BlogDetail;