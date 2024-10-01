import React from "react";
import ImageCarousel from "../ImageCarousel";
import { imagePathFormat } from "../../utils/imagePathFormat";

const ImagesSection = ({ images }) => {
  return (
    <ImageCarousel images={imagePathFormat(images)} />
  )
}

export default ImagesSection;