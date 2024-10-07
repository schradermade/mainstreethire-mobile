import React from "react";
import ImageCarousel from "../ImageCarousel";

const ImagesSection = ({ images }) => {
  if (!images || !Array.isArray(images)) {
    return <></>
  }

  return (
    <ImageCarousel images={images} isFullView />
  )
}

export default ImagesSection;