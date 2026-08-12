"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProductImageLightbox from "./ProductImageLightbox";
import { saveInquiryIds, useInquiryIds } from "./inquiryStorage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import TaiwanServiceMap from "./TaiwanServiceMap";
import { categoryOptions, Product, products } from "./products";

const serviceCases = [
  {
    image: "/services/service-equipment-inspection.webp",
    label: "現場設備檢查",
    description: "依設備實際運轉狀況進行檢查，協助釐清異常原因。",
    featured: true,
  },
  {
    image: "/services/service-installation-guidance.webp",
    label: "安裝與操作教學",
    description: "完成設備安裝與基本設定，並提供免費操作教學。",
  },
  {
    image: "/services/service-maintenance-consultation.webp",
    label: "維修與保養評估",
    description: "依機器現況評估維修、定期保養與零件更換需求。",
  },
  {
    image: "/services/service-onsite-support.webp",
    label: "到府技術服務",
    description: "服務台中、苗栗、新竹與彰化地區的食品機械使用者。",
  },
];

function MachineVisual({ product }: { product: Product }) {
  return (
    <div className="machine-visual" role="img" aria-label={`${product.name} ${product.models} 實機圖`}>
      <span className="visual-status">完整實機圖</span>
      <Image
        src={product.image}
        alt={`${product.name} ${product.models} 完整機身`}
        width={900}
        height={900}
        loading="lazy"
        unoptimized
      />
      <span className="visual-model">{product.models.split(" / ")[0]}</span>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const inquiryIds = useInquiryIds();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [zoomedProduct, setZoomedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const requestedCategory = new URLSearchParams(window.location.search).get("category");
      if (
        requestedCategory &&
        categoryOptions.some((category) => category.id === requestedCategory)
      ) {
        setActiveCategory(requestedCategory);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const visibleProducts = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const inquiryProducts = useMemo(
    () => products.filter((product) => inquiryIds.includes(product.id)),
    [inquiryIds],
  );

  const selectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    window.setTimeout(() => {
      document.getElementById("product-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 20);
  };

  const addInquiry = (product: Product) => {
    if (inquiryIds.includes(product.id)) {
      setDrawerOpen(true);
      return;
    }
    saveInquiryIds([...inquiryIds, product.id]);
    setNotice(`已將「${product.name}」加入詢價清單`);
  };

  

  return (
    <main>
      <SiteHeader
        activeCategory={activeCategory}
        inquiryCount={inquiryIds.length}
        onOpenInquiry={() => setDrawerOpen(true)}
        onSelectCategory={selectCategory}
      />

      <section className="hero" id="top">
        <div className="hero-grid site-container">
          <div className="hero-copy">
            <span className="eyebrow">FOOD PROCESSING SOLUTIONS</span>
            <h1>
              讓每一道加工流程
              <br />
              <em>更穩定、更有效率</em>
            </h1>
            <p>
              從肉品鋸切、切片與絞肉，到真空包裝、充填成型和蔬果處理，
              金虹協助您依產能、空間與製程找到合適設備。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                瀏覽全部產品 <span aria-hidden="true">→</span>
              </a>
              <a className="button button-ghost" href="tel:0909140519">
                立即諮詢 0909-140-519
              </a>
            </div>
            <div className="hero-points">
              <span>完整產品分類</span>
              <span>規格評估</span>
              <span>在地服務</span>
            </div>
          </div>
          <div
            className="hero-visual"
            role="group"
            aria-label="金虹食品三款代表性加工設備"
          >
            <div className="hero-orbit orbit-one" aria-hidden="true" />
            <div className="hero-orbit orbit-two" aria-hidden="true" />
            <div className="hero-product-stack">
              <Link
                className="hero-product hero-product-left"
                href="/products/automatic-meat-slicer"
                aria-label="查看全自動切片機 MST-350W"
              >
                <Image
                  src="/products/automatic-meat-slicer.webp"
                  alt="全自動切片機 MST-350W"
                  width={900}
                  height={900}
                  priority
                  unoptimized
                />
                <span className="hero-product-caption">
                  <small>冷凍肉切片</small>
                  <strong>MST-350W</strong>
                </span>
              </Link>
              <Link
                className="hero-product hero-product-center"
                href="/products/high-speed-bone-saw"
                aria-label="查看多功能肉類高速鋸骨機 HT-400"
              >
                <Image
                  src="/products/ht-400.webp"
                  alt="多功能肉類高速鋸骨機 HT-400"
                  width={900}
                  height={1200}
                  priority
                  unoptimized
                />
                <span className="hero-product-caption">
                  <small>肉品鋸切</small>
                  <strong>HT-400</strong>
                </span>
              </Link>
              <Link
                className="hero-product hero-product-right"
                href="/products/double-chamber-vacuum-packing-machine"
                aria-label="查看雙槽式真空包裝機"
              >
                <Image
                  src="/products/double-chamber-vacuum-packing-machine.webp"
                  alt="雙槽式真空包裝機"
                  width={900}
                  height={600}
                  priority
                  unoptimized
                />
                <span className="hero-product-caption">
                  <small>真空包裝</small>
                  <strong>雙槽式機型</strong>
                </span>
              </Link>
            </div>
            <div className="hero-card hero-card-top">
              <small>加工流程</small>
              <strong>分切・處理・包裝</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area" id="products">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PRODUCT CATEGORIES</span>
              <h2>產品介紹</h2>
            </div>
            <p>
              全系列產品皆可依分類瀏覽。點擊產品照片、名稱或「了解詳情」，
              會進入該機器的獨立介紹頁。
            </p>
          </div>

          <div className="category-select-wrap">
            <label htmlFor="product-category-select">
              <span>快速選擇</span>
              產品分類
            </label>
            <div className="category-select-control">
              <select
                id="product-category-select"
                value={activeCategory}
                onChange={(event) => selectCategory(event.target.value)}
                aria-label="選擇產品分類"
              >
                {categoryOptions.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}（{category.count}）
                  </option>
                ))}
              </select>
              <span aria-hidden="true">⌄</span>
            </div>
          </div>

          <div className="product-layout">
            <aside className="category-sidebar">
              <div className="sidebar-title">
                <span>PRODUCTS</span>
                <strong>產品分類</strong>
              </div>
              <div className="category-list">
                {categoryOptions.map((category) => (
                  <button
                    key={category.id}
                    className={activeCategory === category.id ? "active" : ""}
                    onClick={() => selectCategory(category.id)}
                    type="button"
                  >
                    <span>{category.label}</span>
                    <b>{category.count}</b>
                  </button>
                ))}
              </div>
              <div className="sidebar-help">
                <span aria-hidden="true">?</span>
                <div>
                  <strong>不確定該選哪台？</strong>
                  <a href="tel:0909140519">來電由專人協助評估</a>
                </div>
              </div>
            </aside>

            <div className="product-results" id="product-results">
              <div className="results-toolbar">
                <div>
                  <span>目前顯示</span>
                  <strong>
                    {activeCategory === "all"
                      ? "全部產品"
                      : categoryOptions.find((category) => category.id === activeCategory)?.label}
                  </strong>
                </div>
                <span>共 {visibleProducts.length} 項設備</span>
              </div>

              <div className="product-grid" aria-live="polite">
                {visibleProducts.map((product) => {
                  const added = inquiryIds.includes(product.id);
                  return (
                    <article className="product-card" key={product.id}>
                      <a
                        className="product-image-link"
                        href={`/products/${product.slug}`}
                        aria-label={`查看${product.name}完整介紹`}
                      >
                        <MachineVisual product={product} />
                      </a>
                      <button
                        className="product-zoom-button"
                        type="button"
                        onClick={() => setZoomedProduct(product)}
                        aria-label={`放大查看${product.name}完整機身`}
                      >
                        <span aria-hidden="true">⌕</span>
                        放大查看
                      </button>
                      <div className="product-body">
                        <div className="product-meta">
                          <span>{product.categoryLabel}</span>
                          <small>食品加工設備</small>
                        </div>
                        <h3>
                          <a href={`/products/${product.slug}`}>{product.name}</a>
                        </h3>
                        <strong className="product-model">{product.models}</strong>
                        <p>{product.description}</p>
                        <ul>
                          {product.features.slice(0, 3).map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                        <div className="product-actions">
                          <button
                            className={`button-inquiry ${added ? "added" : ""}`}
                            type="button"
                            onClick={() => addInquiry(product)}
                          >
                            {added ? "已加入詢價單" : "加入詢價單"}
                            <span aria-hidden="true">{added ? "✓" : "+"}</span>
                          </button>
                          <a href={`/products/${product.slug}`}>了解詳情 →</a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="service" aria-labelledby="service-title">
        <div className="site-container service-layout">
          <div className="service-copy">
            <span className="section-kicker">AFTER-SALES SERVICE</span>
            <h2 id="service-title">
              設備交付之後，
              <br />
              現場服務也能找得到人
            </h2>
            <p>
              金虹提供食品機械到府安裝、操作教學、定期保養、故障維修與零件更換，
              協助設備維持穩定運作。
            </p>

            <div className="service-pricing">
              <div>
                <span aria-hidden="true">✓</span>
                <p>
                  <strong>操作教學不收費</strong>
                  <small>協助了解正確使用方式與日常注意事項</small>
                </p>
              </div>
              <div>
                <span aria-hidden="true">$</span>
                <p>
                  <strong>其餘技術服務皆為收費服務</strong>
                  <small>安裝、維修、定期保養與零件更換，依機器狀況及現場需求評估</small>
                </p>
              </div>
            </div>

            <div className="service-actions">
              <a className="button button-primary" href="tel:0909140519">
                聯絡技術服務 <span aria-hidden="true">→</span>
              </a>
              <small>實際費用由專人了解設備狀況後說明，不提供固定價格。</small>
            </div>
          </div>

          <TaiwanServiceMap />

          <div className="service-gallery service-gallery-wide" aria-label="金虹現場服務實績">
            {serviceCases.map((item) => (
              <figure className={item.featured ? "service-case featured" : "service-case"} key={item.label}>
                <div className="service-photo">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={1200}
                    height={1600}
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <figcaption>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section" id="map" aria-labelledby="map-title">
        <div className="site-container map-layout">
          <div className="map-copy">
            <span className="section-kicker">FIND US</span>
            <h2 id="map-title">查看地圖</h2>
            <p>
              地址位於台中市大雅區中清路四段 93-18 號。您可以直接在地圖上拖曳、
              放大與縮小，查看周邊道路與位置。
            </p>
            <div className="map-address">
              <span aria-hidden="true">⌖</span>
              <div>
                <small>金虹食品股份有限公司</small>
                <strong>台中市大雅區中清路四段93-18號</strong>
              </div>
            </div>
            <a
              className="button button-primary"
              href="https://www.google.com/maps/search/?api=1&query=台中市大雅區中清路四段93-18號"
              target="_blank"
              rel="noreferrer"
            >
              在 Google 地圖開啟 <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="金虹食品股份有限公司 Google 地圖"
              src="https://www.google.com/maps?q=台中市大雅區中清路四段93-18號&hl=zh-TW&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <SiteFooter />

      <ProductImageLightbox
        product={zoomedProduct}
        onClose={() => setZoomedProduct(null)}
      />

      <div
        className={`drawer-backdrop ${drawerOpen ? "visible" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`inquiry-drawer ${drawerOpen ? "open" : ""}`}
        aria-hidden={!drawerOpen}
        aria-label="詢價清單"
      >
        <div className="drawer-header">
          <div>
            <span>INQUIRY LIST</span>
            <h2>我的詢價清單</h2>
          </div>
          <button type="button" onClick={() => setDrawerOpen(false)} aria-label="關閉詢價清單">
            ×
          </button>
        </div>
        <div className="drawer-content">
          {inquiryProducts.length === 0 ? (
            <div className="empty-inquiry">
              <span aria-hidden="true">▤</span>
              <h3>清單目前是空的</h3>
              <p>在產品卡片按下「加入詢價單」，設備就會暫存在這裡。</p>
              <button type="button" onClick={() => setDrawerOpen(false)}>
                繼續瀏覽產品
              </button>
            </div>
          ) : (
            <>
              <div className="drawer-list">
                {inquiryProducts.map((product) => (
                  <div className="drawer-item" key={product.id}>
                    <span className={`drawer-thumb ${product.category}`}>
                      <Image
                        src={product.image}
                        alt=""
                        width={180}
                        height={180}
                        loading="lazy"
                        unoptimized
                      />
                    </span>
                    <div>
                      <strong>{product.name}</strong>
                      <small>{product.models}</small>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        saveInquiryIds(inquiryIds.filter((id) => id !== product.id))
                      }
                      aria-label={`從詢價清單移除${product.name}`}
                    >
                      移除
                    </button>
                  </div>
                ))}
              </div>
              <div className="drawer-footer">
                <div>
                  <span>已選設備</span>
                  <strong>{inquiryProducts.length} 項</strong>
                </div>
                <a
                  className="line-inquiry"
                  href="https://line.me/ti/p/~0907406307"
                  target="_blank"
                  rel="noreferrer"
                >
                  使用 LINE 詢價
                </a>
                <a className="phone-inquiry" href="tel:0909140519">
                  或直接撥打 0909-140-519
                </a>
                <button className="clear-inquiry" type="button" onClick={() => saveInquiryIds([])}>
                  清空清單
                </button>
              </div>
            </>
          )}
        </div>
      </aside>

      {notice && (
        <div className="toast" role="status">
          <span>✓</span>
          {notice}
        </div>
      )}
    </main>
  );
}
