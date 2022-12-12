import React, { useState, useEffect } from "react";
import SingleGallery from "../components/SingleGallery";
import { Link } from "react-router-dom";


import GalleriesService from "../services/GalleriesService";

export default function AppGalleries() {
    const [galleries, setGalleries] = useState();

    const handleGalleriesData = async () => {
        const response = await GalleriesService.getAll();
        setGalleries(response.data);
        console.log(response)
    };

    useEffect(() => {
        handleGalleriesData();
    }, []);

    return (
        <div>
            <h2>Galleries:</h2>
            {galleries && galleries.map((gallery) => (
                <div key={gallery.id}>
                       <p><Link to={`/galleries/${gallery.id}`}>{gallery.title}</Link></p>
                        <p>description {gallery.description}</p>
                    
                    <p>Created at: {gallery.created_at}</p>
                    <p>Created by: {gallery.user_id}</p>

                </div>
            ))}
        </div>
    );
}
