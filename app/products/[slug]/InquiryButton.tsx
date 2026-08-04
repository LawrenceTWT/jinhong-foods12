"use client";

import { saveInquiryIds, useInquiryIds } from "../../inquiryStorage";

export default function InquiryButton({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const inquiryIds = useInquiryIds();
  const added = inquiryIds.includes(productId);

  const addProduct = () => {
    if (!added) saveInquiryIds([...inquiryIds, productId]);
  };

  return (
    <button
      className={`detail-inquiry-button ${added ? "added" : ""}`}
      type="button"
      onClick={addProduct}
      aria-label={`將${productName}加入詢價單`}
    >
      {added ? "已加入詢價單 ✓" : "加入詢價單 ＋"}
    </button>
  );
}
