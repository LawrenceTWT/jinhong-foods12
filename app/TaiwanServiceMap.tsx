import Image from "next/image";

const serviceRegions = [
  { name: "台中", detail: "台中市全區" },
  { name: "苗栗", detail: "苗栗縣" },
  { name: "新竹", detail: "新竹縣、市" },
  { name: "彰化", detail: "彰化縣" },
];

export default function TaiwanServiceMap() {
  return (
    <section className="service-coverage-card" aria-labelledby="coverage-title">
      <header className="service-coverage-header">
        <div>
          <span>ON-SITE COVERAGE</span>
          <h3 id="coverage-title">到府維修服務範圍</h3>
        </div>
        <strong>4 個地區</strong>
      </header>

      <div className="service-coverage-body">
        <div className="taiwan-map-wrap">
          <Image
            className="taiwan-service-map"
            src="/service-coverage-taiwan.svg"
            alt="台灣本島縣市服務地圖；橘色的台中、苗栗、新竹與彰化為到府維修服務地區"
            width={515}
            height={950}
            unoptimized
          />
          <div className="map-coverage-key" aria-hidden="true">
            <span />
            橘色區域提供到府服務
          </div>
        </div>

        <div className="service-region-list" aria-label="到府維修服務地區清單">
          {serviceRegions.map((region, index) => (
            <div key={region.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                <strong>{region.name}</strong>
                <small>{region.detail}</small>
              </p>
            </div>
          ))}
          <p className="service-region-note">
            目前僅提供以上地區到府服務，其他地區歡迎先來電確認。
          </p>
        </div>
      </div>
    </section>
  );
}
