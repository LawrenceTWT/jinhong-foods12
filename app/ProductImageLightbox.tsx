"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Product } from "./products";

type ProductImageLightboxProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductImageLightbox({
  product,
  onClose,
}: ProductImageLightboxProps) {
  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, product]);

  if (!product) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name}圖片放大檢視`}
      onClick={onClose}
    >
      <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button
          className="image-lightbox-close"
          type="button"
          aria-label="關閉圖片"
          onClick={onClose}
        >
          ×
        </button>
        <div className="image-lightbox-stage">
          <Image
            src={product.image}
            alt={`${product.name} ${product.models} 完整機身放大圖`}
            width={1400}
            height={1400}
            unoptimized
          />
        </div>
        <div className="image-lightbox-caption">
          <div>
            <span>{product.categoryLabel}</span>
            <strong>{product.name}</strong>
          </div>
          <small>{product.models}</small>
        </div>
      </div>
    </div>
  );
}
