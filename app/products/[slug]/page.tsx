import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../SiteFooter";
import SiteHeader from "../../SiteHeader";
import {
  categoryOptions,
  getProductBySlug,
  getProductsByCategory,
  getProductVariants,
  products,
} from "../../products";
import InquiryButton from "./InquiryButton";
import ModelSpecificationPanel from "./ModelSpecificationPanel";
import ZoomableProductImage from "./ZoomableProductImage";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main>
        <SiteHeader />
        <section className="detail-not-found site-container">
          <span>PRODUCT NOT FOUND</span>
          <h1>找不到這項產品</h1>
          <Link href="/#products">返回產品列表</Link>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const categoryProducts = getProductsByCategory(product.category);
  const productVariants = getProductVariants(product);
  const currentCategory = categoryOptions.find((category) => category.id === product.category);

  return (
    <main>
      <SiteHeader activeCategory={product.category} />

      <section className="detail-hero" id="top">
        <div className="site-container detail-breadcrumb">
          <Link href="/">首頁</Link>
          <span>/</span>
          <Link href={`/?category=${product.category}#products`}>{product.categoryLabel}</Link>
          <span>/</span>
          <strong>{product.name}</strong>
        </div>
      </section>

      <section className="product-detail-area">
        <div className="site-container product-detail-layout">
          <aside className="detail-sidebar">
            <div className="sidebar-title">
              <span>PRODUCTS</span>
              <strong>產品介紹</strong>
            </div>
            <nav aria-label="產品分類">
              {categoryOptions
                .filter((category) => category.id !== "all")
                .map((category) => (
                  <Link
                    className={category.id === product.category ? "active" : ""}
                    href={`/?category=${category.id}#products`}
                    key={category.id}
                  >
                    <span>{category.label}</span>
                    <b>{category.count}</b>
                  </Link>
                ))}
            </nav>
          </aside>

          <article className="product-detail">
            <div className="product-detail-top">
              <ZoomableProductImage product={product} />
              <div className="detail-summary">
                <span className="section-kicker">{product.categoryLabel}</span>
                <h1>{product.name}</h1>
                <strong className="detail-model">{product.models}</strong>
                <p>{product.description}</p>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="detail-actions">
                  <InquiryButton productId={product.id} productName={product.name} />
                  <a href="tel:0909140519">電話詢問 0909-140-519</a>
                </div>
              </div>
            </div>

            <section className="detail-section product-introduction" aria-labelledby="introduction-title">
              <div className="detail-section-heading introduction-heading">
                <div>
                  <span>PRODUCT INTRODUCTION</span>
                  <h2 id="introduction-title">產品介紹</h2>
                </div>
                <p>{product.description}</p>
              </div>
              <div className="feature-detail-grid">
                {product.features.map((feature, index) => (
                  <div key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{feature}</strong>
                    <p>
                      {index === 0
                        ? "針對食品加工現場需求設計，兼顧操作效率與日常使用便利性。"
                        : index === 1
                          ? "穩定的機構配置有助於維持加工品質，降低人工作業負擔。"
                          : index === 2
                            ? "接觸面與機體配置重視清潔保養，適合食品製程環境。"
                            : "可依實際食材、產能、空間與電力條件評估合適配置。"}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section" aria-labelledby="applications-title">
              <div className="detail-section-heading">
                <span>APPLICATIONS</span>
                <h2 id="applications-title">適用範圍</h2>
              </div>
              <div className="application-tags">
                {product.applications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </section>

            <ModelSpecificationPanel
              productName={product.name}
              variants={productVariants}
            />

            <section className="detail-section related-products" aria-labelledby="related-title">
              <div className="detail-section-heading">
                <span>{currentCategory?.label}</span>
                <h2 id="related-title">同系列產品</h2>
              </div>
              <div className="related-grid">
                {categoryProducts
                  .filter((item) => item.id !== product.id)
                  .slice(0, 3)
                  .map((item) => (
                    <Link href={`/products/${item.slug}`} key={item.id}>
                      <span className="related-image">
                        <Image
                          src={item.image}
                          alt={`${item.name}完整機身`}
                          width={900}
                          height={675}
                          loading="lazy"
                          unoptimized
                        />
                      </span>
                      <small>{item.categoryLabel}</small>
                      <strong>{item.name}</strong>
                      <span>{item.models}</span>
                    </Link>
                  ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
