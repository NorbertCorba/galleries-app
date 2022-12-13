import React, { useState } from "react";
import CreateGalleryForm from "../components/CreateGalleryForm";
import galleryService from "../services/GalleriesService";
import { useHistory, useParams } from "react-router-dom";


const defaultGalleries = {
    title: "",
    description: "",

};

export default function AddGallery() {

    const history = useHistory();
    const [newGallery, setNewGallery] = useState(defaultGalleries);

    const handleCreateNewGallery = async (e) => {
        e.preventDefault();
        const response = await galleryService.add(newGallery);
        if (response.status === 200) {
            setNewGallery(response.data);
            history.push("/");
        }
    };
    return (
        <div>
            <CreateGalleryForm
                newGallery={newGallery}
                setNewGallery={setNewGallery}
                onCreateNewGallery={handleCreateNewGallery}
            />
        </div>

    )
}

