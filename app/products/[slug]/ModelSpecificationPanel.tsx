"use client";

import { useMemo, useState } from "react";
import type { ModelVariant } from "../../products";

export default function ModelSpecificationPanel({
  productName,
  variants,
}: {
  productName: string;
  variants: ModelVariant[];
}) {
  const [selectedModel, setSelectedModel] = useState(variants[0]?.model ?? "");
  const selectedVariant =
    variants.find((variant) => variant.model === selectedModel) ?? variants[0];

  const specLabels = useMemo(
    () =>
      Array.from(
        new Set(variants.flatMap((variant) => Object.keys(variant.specs))),
      ),
    [variants],
  );

  if (!selectedVariant) return null;

  return (
    <section
      className="detail-section model-specification-section"
      aria-labelledby="model-specification-title"
    >
      <div className="detail-section-heading specification-heading">
        <div>
          <span>MODEL &amp; SPECIFICATIONS</span>
          <h2 id="model-specification-title">型號選擇與規格比較</h2>
        </div>
        <p>
          {variants.length > 1
            ? "選擇型號可先查看該機型重點，完整差異請對照下方表格。"
            : "此產品為單一型號，主要規格整理如下。"}
        </p>
      </div>

      <div className="model-selector-card">
        <label htmlFor="model-variant-select">
          <span>{variants.length > 1 ? "請選擇規格" : "目前型號"}</span>
          <strong>{selectedVariant.model}</strong>
        </label>
        {variants.length > 1 ? (
          <div className="model-select-control">
            <select
              id="model-variant-select"
              value={selectedVariant.model}
              onChange={(event) => setSelectedModel(event.target.value)}
              aria-label={`選擇${productName}型號`}
            >
              {variants.map((variant) => (
                <option key={variant.model} value={variant.model}>
                  {variant.model}
                </option>
              ))}
            </select>
            <span aria-hidden="true">⌄</span>
          </div>
        ) : (
          <span className="single-model-badge">單一規格</span>
        )}
      </div>

      <div className="selected-spec-grid" aria-live="polite">
        {Object.entries(selectedVariant.specs)
          .slice(0, 4)
          .map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
      </div>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <caption>{productName}各型號規格差異</caption>
          <thead>
            <tr>
              <th scope="col">規格項目</th>
              {variants.map((variant) => (
                <th
                  className={
                    variant.model === selectedVariant.model ? "is-selected" : ""
                  }
                  scope="col"
                  key={variant.model}
                >
                  {variant.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specLabels.map((label) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {variants.map((variant) => (
                  <td
                    className={
                      variant.model === selectedVariant.model ? "is-selected" : ""
                    }
                    key={variant.model}
                  >
                    {variant.specs[label] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="specification-note">
        實際電壓、產能、機器配置與選配內容，請以弘鼎最終確認資料為準。
      </p>
    </section>
  );
}
