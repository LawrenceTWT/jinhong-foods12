"use client";

import Image from "next/image";
import { useState } from "react";
import ProductImageLightbox from "../../ProductImageLightbox";
import { Product } from "../../products";

export default function ZoomableProductImage({ product }: { product: Product }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <button
        className="detail-image detail-image-button"
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={`放大查看${product.name}完整機身`}
      >
        <span>點擊放大查看</span>
        <Image
          src={product.image}
          alt={`${product.name} ${product.models} 完整機身`}
          width={1000}
          height={1000}
          unoptimized
        />
      </button>
      <ProductImageLightbox
        product={zoomed ? product : null}
        onClose={() => setZoomed(false)}
      />
    </>
  );
}
