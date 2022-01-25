import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../redux/actions/instagram";

const Instagram = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.instagram.photos);

    useEffect(() => {
        dispatch(getPhotos())
    }, [])

    return (
        <section className="instagram_area">
            <div className="container box_1620">
                <div className="insta_btn">
                    <a className="btn theme_btn" href="#">Follow us on instagram</a>
                </div>
                <div className="instagram_image row m0">
                    {photos.map(photo =>
                        <span key={photo.id}><img src={photo.thumbnailUrl} alt="" /></span>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Instagram;