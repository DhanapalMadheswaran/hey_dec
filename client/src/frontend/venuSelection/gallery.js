import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

const Gallery = (props) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const { images = [] } = props;
    setImages(
      images.map((image) => ({
        original: `${image.url}`,
        thumbnail: `${image.url}`,
      }))
    );
  }, [props, props.images]);

  return images ? <ImageGallery items={images} /> : <h4>No Data Found</h4>;
};
export default Gallery;
