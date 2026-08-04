"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInquiryIds } from "./inquiryStorage";
import { categoryOptions, megaMenuGroups } from "./products";

type SiteHeaderProps = {
  activeCategory?: string;
  inquiryCount?: number;
  onOpenInquiry?: () => void;
  onSelectCategory?: (categoryId: string) => void;
};

export default function SiteHeader({
  activeCategory,
  inquiryCount,
  onOpenInquiry,
  onSelectCategory,
}: SiteHeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const storedCount = useInquiryIds().length;
  const productMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeFromOutside = (event: PointerEvent) => {
      if (!productMenuRef.current?.contains(event.target as Node)) {
        setProductMenuOpen(false);
      }
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setProductMenuOpen(false);
      if (productMenuRef.current?.contains(document.activeElement)) {
        (document.activeElement as HTMLElement).blur();
      }
    };

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  const closeProductMenu = (releaseFocus = false) => {
    setProductMenuOpen(false);
    if (releaseFocus && productMenuRef.current?.contains(document.activeElement)) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  const chooseCategory = (categoryId: string) => {
    closeProductMenu(true);
    setMobileNavOpen(false);
    if (onSelectCategory) onSelectCategory(categoryId);
  };

  const categoryControl = (category: (typeof categoryOptions)[number]) =>
    onSelectCategory ? (
      <button
        key={category.id}
        className={activeCategory === category.id ? "active" : ""}
        type="button"
        onClick={() => chooseCategory(category.id)}
      >
        <span>{category.label}</span>
        <small>{category.count} 項</small>
      </button>
    ) : (
      <Link
        key={category.id}
        className={activeCategory === category.id ? "active" : ""}
        href={`/?category=${category.id}#products`}
        onClick={() => {
          closeProductMenu(true);
          setMobileNavOpen(false);
        }}
      >
        <span>{category.label}</span>
        <small>{category.count} 項</small>
      </Link>
    );

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>食品加工設備｜專業諮詢與服務</span>
          <div className="utility-links">
            <a href="tel:0909140519">0909-140-519</a>
            <span className="utility-divider" />
            <span>週一至週五 08:00–17:00</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <Link className="brand" href="/" aria-label="弘鼎食品股份有限公司首頁">
            <span className="brand-mark">弘鼎</span>
            <span className="brand-copy">
              <strong>弘鼎食品股份有限公司</strong>
              <small>HONG DING FOOD CO., LTD.</small>
            </span>
          </Link>

          <nav className={`main-nav ${mobileNavOpen ? "is-open" : ""}`} aria-label="主要導覽">
            <Link href="/" onClick={() => setMobileNavOpen(false)}>
              首頁
            </Link>
            <div
              ref={productMenuRef}
              className={`nav-product-menu ${productMenuOpen ? "is-open" : ""}`}
              onMouseLeave={() => closeProductMenu(true)}
            >
              <button
                className="nav-product-trigger"
                type="button"
                aria-expanded={productMenuOpen}
                aria-controls="nav-product-dropdown"
                onClick={() => setProductMenuOpen((open) => !open)}
              >
                產品介紹
                <span aria-hidden="true">⌄</span>
              </button>
              <div className="nav-product-dropdown" id="nav-product-dropdown">
                <div className="mega-menu-inner site-container">
                  <div className="mega-menu-intro">
                    <span className="mega-menu-eyebrow">PRODUCTS</span>
                    <h2>產品介紹</h2>
                    <p>依加工流程快速找到適合的食品機械與設備規格。</p>
                    {onSelectCategory ? (
                      <button type="button" onClick={() => chooseCategory("all")}>
                        查看全部產品 <span aria-hidden="true">→</span>
                      </button>
                    ) : (
                      <Link href="/#products">
                        查看全部產品 <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>

                  {megaMenuGroups.map((group) => (
                    <div className="mega-menu-column" key={group.title}>
                      <span className="mega-menu-eyebrow">{group.eyebrow}</span>
                      <strong>{group.title}</strong>
                      <div className="mega-menu-links">
                        {group.categoryIds.map((categoryId) => {
                          const category = categoryOptions.find(
                            (option) => option.id === categoryId,
                          );
                          return category ? categoryControl(category) : null;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#service" onClick={() => setMobileNavOpen(false)}>
              維修服務
            </Link>
            <Link href="/#map" onClick={() => setMobileNavOpen(false)}>
              查看地圖
            </Link>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>
              聯絡我們
            </a>
          </nav>

          <div className="header-actions">
            {onOpenInquiry ? (
              <button className="inquiry-counter" onClick={onOpenInquiry} type="button">
                <span className="counter-icon" aria-hidden="true">▤</span>
                詢價單
                <strong>{inquiryCount ?? 0}</strong>
              </button>
            ) : (
              <Link className="inquiry-counter" href="/#products">
                <span className="counter-icon" aria-hidden="true">▤</span>
                詢價單
                <strong>{storedCount}</strong>
              </Link>
            )}
            <button
              className="menu-toggle"
              type="button"
              aria-label="開啟導覽選單"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
