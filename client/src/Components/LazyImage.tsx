import React, { useState, useEffect, useRef } from "react";
import ImageSpinner from "./ImageSpinner";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            observer.unobserve(img);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(imgElement);

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
        setIsLoading(true);
      }
    };
  }, [imgRef]);

  return (
    <div className="relative">
      {isLoading && <ImageSpinner />}
      <img
        ref={imgRef}
        data-src={src}
        alt={alt}
        className={`${className} ${isLoading ? "hidden" : "block"}`}
        onLoad={() => setIsLoading(false)}
        onClick={onClick}
      />
    </div>
  );
};

export default LazyImage;
