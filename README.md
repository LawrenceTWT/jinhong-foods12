# 弘鼎食品股份有限公司網站

弘鼎食品機械的多頁式形象與產品網站。首頁可依分類瀏覽設備，點擊產品後會進入獨立介紹頁；同時包含 Mega Menu、型號規格比較、圖片放大、詢價清單、維修服務與互動地圖。

## 使用技術

- React 19 + TypeScript
- Next.js App Router 相容頁面結構
- Vinext / Vite 建置
- CSS 響應式版面
- Cloudflare Worker 部署輸出

這個專案不是傳統單一 `index.html`。頁面的 HTML 結構寫在 `.tsx` 元件中，建置時會產生瀏覽器可讀取的 HTML、CSS 與 JavaScript。

## 目錄結構

```text
hongding-foods/
├─ app/
│  ├─ page.tsx                      # 首頁 HTML 結構與首頁互動
│  ├─ globals.css                   # 全站 CSS、RWD 與元件樣式
│  ├─ products.ts                   # 產品、分類、型號與規格資料
│  ├─ inquiryStorage.ts             # 詢價清單的瀏覽器儲存邏輯
│  ├─ SiteHeader.tsx                # 導覽列、Mega Menu、手機選單
│  ├─ SiteFooter.tsx                # 頁尾與聯絡資訊
│  ├─ ProductImageLightbox.tsx      # 產品圖片放大視窗
│  └─ products/[slug]/
│     ├─ page.tsx                   # 每項產品的獨立介紹頁
│     ├─ InquiryButton.tsx          # 詳細頁詢價按鈕
│     ├─ ModelSpecificationPanel.tsx# 型號選單與規格差異表
│     └─ ZoomableProductImage.tsx   # 詳細頁圖片放大功能
├─ public/
│  ├─ products/                     # 產品實機圖片
│  └─ services/                     # 維修服務實績圖片
├─ tests/                           # 建置結果測試
├─ scripts/                         # 安裝、建置與驗證腳本
├─ worker/                          # Cloudflare Worker 進入點
├─ package.json                     # 套件與常用指令
└─ vite.config.ts                   # 本機開發及正式建置設定
```

## 本機啟動

需求：Node.js 22.13.0 以上版本。

```bash
npm install
npm run dev
```

啟動後，依終端機顯示的本機網址開啟網站。

## 常用指令

```bash
npm run dev                 # 本機開發模式
npm run lint                # 檢查 TypeScript、React 與程式品質
npm test                    # 正式建置並執行測試
npm run build               # 產生正式部署檔案
npm run validate:artifact   # 驗證既有部署檔案
```

## 修改內容的位置

- 新增或修改產品：編輯 `app/products.ts`，圖片放入 `public/products/`。
- 修改公司電話、地址或 LINE：檢查 `app/SiteHeader.tsx`、`app/SiteFooter.tsx` 與 `app/page.tsx`。
- 修改顏色、間距、圖片比例或手機排版：編輯 `app/globals.css`。
- 修改產品詳細頁結構：編輯 `app/products/[slug]/page.tsx`。
- 修改維修服務照片與文字：編輯 `app/page.tsx` 的 `serviceCases`。

## 圖片規則

- 產品圖使用等比例縮放與 `object-fit: contain`，確保完整機身留在圖片範圍內。
- 圖片檔名使用英文小寫與連字號，避免網址或伺服器產生編碼問題。
- 替換產品圖時，建議保留足夠四周留白並使用 WebP 格式。
- 首頁與產品詳細頁的產品圖片可點擊放大；維修服務照片不會開啟放大視窗。

## 功能備註

- 詢價清單保存在使用者目前瀏覽器的 `localStorage`，不會上傳到資料庫。
- 地圖採 Google Maps 嵌入模式，可拖曳與縮放，不需要另外設定 API Key。
- 產品詳細頁網址由產品資料中的 `slug` 產生；每個 `slug` 必須保持唯一。
- 正式上線前，請再次確認公司聯絡資料、設備規格及所有圖片的公開使用權。
