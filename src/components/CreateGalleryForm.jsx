import React from "react";

export default function CreateGalleryForm({

  onCreateNewGallery,
  newGallery,
  setNewGallery

}) {
  return (
    <form onSubmit={onCreateNewGallery}>
      <div className="form-group">
        <label>Title:</label>
        <input
          className="form-control"
          required
          type="text"
          value={newGallery.title}
          onChange={({ target }) => setNewGallery({ ...newGallery, title: target.value })}
        />
        <label>Description:</label>
        <input
          className="form-control"
          required
          type="text"
          value={newGallery.description}
          onChange={({ target }) => setNewGallery({ ...newGallery, description: target.value })}
        />
      </div>
      <button className="button" type="submit"><strong>ADD NEW GALLERY</strong></button>
    </form>

  )
}