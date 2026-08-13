import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Image
            className="brand-logo-footer"
            src="/brand-logo.png"
            alt="金虹食品品牌標誌"
            width={1000}
            height={785}
            unoptimized
          />
          <h2>金虹食品股份有限公司</h2>
          <p>提供食品加工設備資訊與選型諮詢，讓每一次採購都有清楚可靠的判斷依據。</p>
        </div>
        <div className="footer-block">
          <span>聯絡方式</span>
          <a href="tel:0909140519">電話｜0909-140-519</a>
          <a href="mailto:lucky911228@gmail.com">信箱｜lucky911228@gmail.com</a>
          <a href="https://line.me/R/ti/p/%40453medfq" target="_blank" rel="noreferrer">
            LINE 官方帳號｜@453medfq
          </a>
        </div>
        <div className="footer-block">
          <span>公司資訊</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=台中市大雅區中清路四段93-18號"
            target="_blank"
            rel="noreferrer"
          >
            台中市大雅區中清路四段93-18號
          </a>
          <p>營業時間｜08:00–17:00</p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 金虹食品股份有限公司 All rights reserved.</span>
        <a href="#top">回到頂端 ↑</a>
      </div>
    </footer>
  );
}
