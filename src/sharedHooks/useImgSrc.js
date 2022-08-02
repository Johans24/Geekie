import React from "react";
import { useSelector } from "react-redux/es/exports";
import defaultSrc from "../assets/default-poster.png";

const useImgSrc = () => {
  const { base_url: baseUrl = "" } = useSelector(
    ({ ApiConfigStore }) => ApiConfigStore.apiConfig.images
  );

  const imgSrc = (imgPath) => `${baseUrl}/w500/${imgPath}`;

  const onImgError = e => e.target.src = defaultSrc;

  return {
    imgSrc,
    onImgError,
    defaultSrc
  };
};

export default useImgSrc;
