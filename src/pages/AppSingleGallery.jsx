import React, { useEffect, useState } from "react";
import SingleGallery from "../components/SingleGallery";
import { useParams } from "react-router-dom";
import GalleriesService from "../services/GalleriesService";

export default function AppSingleGallery() {
    const [singleGallery, setSingleGallery] = useState();
    const { id } = useParams();

    useEffect(() => {
        handleGetSingleGallery();
    }, []);

    const handleGetSingleGallery = async () => {
        const response = await GalleriesService.get(id);
        if (response.status === 200) {
            setSingleGallery(response.data);
            console.log(response)
        }
    };

    return (
        <div>
            <SingleGallery
                key={singleGallery.id}
                title={singleGallery.title}
                description={singleGallery.description}
            />

        </div>
    );
}
