import React, { useEffect, useState } from "react";
import SingleGallery from "../components/SingleGallery";
import { useParams } from "react-router-dom";
import GalleriesService from "../services/GalleriesService";

export default function AppSingleGallery() {
    const [singleGallery, setSingleGallery] = useState({
        id: "",
        title: "",
        description: "",

    });
    const { id } = useParams();

    useEffect(() => {
        handleGetSingleGallery();
    }, []);

    const handleGetSingleGallery = async () => {
        const response = await GalleriesService.get(id);
        setSingleGallery(response);
    };

    return (
        <div>
            <SingleGallery
                id={singleGallery.id}
                key={singleGallery.id}
                title={singleGallery.title}
                description={singleGallery.description}
            />
        </div>
    );
}