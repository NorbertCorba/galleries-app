import React, { useState, useEffect } from "react";

import GalleriesService from "../services/GalleriesService";

export default function AppGalleries() {
    const [galleries, setGalleries] = useState([]);

    const handleGetGalleries = async () => {
        const galleries = await GalleriesService.getAll();
        setGalleries(galleries);
        console.log(galleries);
    };

    useEffect(() => {
        handleGetGalleries();
    }, []);

    return (
        <div>
            <h2>Galleries:</h2>
            {galleries && galleries.map((gallery) => (
                <div key={gallery.id}>
                    <p><strong>Title: </strong> {gallery.title}</p>
                    <p><strong>Description: </strong> {gallery.description}</p>

                </div>
            ))}
        </div>
    );
}
