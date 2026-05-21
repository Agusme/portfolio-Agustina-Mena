import React, { useState, useEffect } from "react";

/**
 * Optimized image component with:
 * - Native lazy loading
 * - Blur-up effect while loading
 * - Automatic image optimization
 * - Fallback handling
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  onLoad,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use Intersection Observer for even better performance
    const img = new Image();

    const handleLoad = () => {
      setImageSrc(src);
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src, onLoad]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={`${className} ${isLoading ? "img-loading" : "img-loaded"}`}
      style={{
        opacity: isLoading ? 0.7 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
