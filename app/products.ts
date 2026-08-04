export type ProductCategory =
  | "bone-saw"
  | "meat-grinder"
  | "mixer"
  | "slicer"
  | "skinner"
  | "meat-cutter"
  | "vacuum"
  | "forming"
  | "vegetable"
  | "juicer";

export type Product = {
  id: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  models: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  specs?: { label: string; value: string }[];
  scale: "compact" | "medium" | "large";
};

export type ModelVariant = {
  model: string;
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    id: "bone-saw-250",
    slug: "high-speed-meat-bandsaw",
    category: "bone-saw",
    categoryLabel: "鋸骨機",
    name: "多功能肉類高速鋸台",
    models: "HT-250SR / HT-260",
    description: "桌上、落地皆能彈性配置，適合市場、餐廳與超市的日常肉品分切。",
    features: ["固定工作台", "厚度刻度調整", "加強防水設計", "鋸帶張緊與穩定裝置"],
    applications: ["肉排", "豬腳", "冷凍肉", "家禽與魚肉"],
    image: "/products/ht-250sr.webp",
    scale: "compact",
  },
  {
    id: "bone-saw-300",
    slug: "stainlesssteel-highspeed-bandsaw",
    category: "bone-saw",
    categoryLabel: "鋸骨機",
    name: "全不鏽鋼高速鋸切機",
    models: "HT-300SR / HT-330",
    description: "全不鏽鋼結構與穩定鋸帶設計，適合中央廚房及較高頻率的鋸切工作。",
    features: ["不鏽鋼機身", "雙凸緣鋸帶輪", "厚度刻度工作台", "容易清潔保養"],
    applications: ["中央廚房", "超級市場", "餐廳", "肉品加工"],
    image: "/products/ht-300sr.webp",
    scale: "medium",
  },
  {
    id: "bone-saw-400",
    slug: "high-speed-bone-saw",
    category: "bone-saw",
    categoryLabel: "鋸骨機",
    name: "多功能肉類高速鋸骨機",
    models: "HT-400 / HT-360 / HT-360R",
    description: "針對加工廠、中央廚房與連鎖門市設計，兼顧切割效率與厚度精準度。",
    features: ["滑台／固定式可選", "高轉速切割", "耐高壓清洗", "精密厚度微調"],
    applications: ["肉品分切加工廠", "中央廚房", "連鎖門市", "冷凍與帶骨肉"],
    image: "/products/ht-400.webp",
    scale: "large",
  },
  {
    id: "bone-saw-420",
    slug: "stainlesssteel-highspeed-bonesaw",
    category: "bone-saw",
    categoryLabel: "鋸骨機",
    name: "全不鏽鋼高速鋸骨機",
    models: "HT-420LUX / HT-420SL",
    description: "大型全不鏽鋼機型，適合冷凍肉、帶骨肉、家禽與魚類的穩定連續作業。",
    features: ["食品級不鏽鋼", "雙凸緣鋸帶輪", "複合式工作台選配", "高壓清洗設計"],
    applications: ["大型肉品加工", "中央廚房", "冷凍肉", "帶骨肉"],
    image: "/products/ht-420sl.webp",
    scale: "large",
  },
  {
    id: "grinder-114",
    slug: "meat-grinding-mixing",
    category: "meat-grinder",
    categoryLabel: "絞肉機",
    name: "電動絞肉攪拌機",
    models: "HTG-114M-UN / HTG-130M-UN / HTG-130M-EN",
    description: "結合絞肉與攪拌功能的大型機種，適合追求產能與流程整合的加工現場。",
    features: ["絞肉＋攪拌", "速度可調", "上蓋安全裝置", "兩刀三網選配"],
    applications: ["肉品加工廠", "香腸餡料", "大量絞肉", "餡料混合"],
    image: "/products/htg-114m.webp",
    scale: "large",
  },
  {
    id: "grinder-120",
    slug: "stainless-steel-meat-grinder",
    category: "meat-grinder",
    categoryLabel: "絞肉機",
    name: "全不鏽鋼絞肉機",
    models: "HTG-120SS / HTG-220SS",
    description: "體積精巧、容易拆卸清潔，適合肉舖、餐廳、飯店與小型食品工作室。",
    features: ["桌上型設計", "正逆轉控制", "可拆式絞肉管", "安全入料口"],
    applications: ["肉舖", "餐廳", "飯店", "小型食品工作室"],
    image: "/products/htg-120ss.webp",
    scale: "compact",
  },
  {
    id: "grinder-320",
    slug: "stainless-steel-meat-mincer",
    category: "meat-grinder",
    categoryLabel: "絞肉機",
    name: "不鏽鋼大型絞肉機",
    models: "HTG-320S-98 / HTG-320S-100",
    description: "大馬力與過載保護兼備，適合需要快速出料的中大型肉品加工環境。",
    features: ["大馬力驅動", "過載保護", "正逆轉功能", "兩刀三網選配"],
    applications: ["中大型加工廠", "大量絞肉", "中央廚房", "生鮮處理"],
    image: "/products/htg-320s.webp",
    scale: "medium",
  },
  {
    id: "grinder-320af",
    slug: "auto-feeding-meat-grinding-machine",
    category: "meat-grinder",
    categoryLabel: "絞肉機",
    name: "自動進料絞肉機",
    models: "HTG-320AF",
    description: "透過自動進料斗降低人工負擔，兼顧移動性與穩定的加工產能。",
    features: ["20 公斤自動進料斗", "移動腳輪", "強力減速馬達", "可注油軸承"],
    applications: ["肉品加工廠", "中央廚房", "大量連續絞肉"],
    image: "/products/htg-320af.webp",
    scale: "large",
  },
  {
    id: "grinder-220",
    slug: "desk-type-meat-mincer",
    category: "meat-grinder",
    categoryLabel: "絞肉機",
    name: "桌上型絞肉機",
    models: "HTG-220UN / HTG-220EN",
    description: "方便清潔與保養的桌上型機種，適合空間有限但仍重視出料效率的場域。",
    features: ["低維修設計", "盛料盤可拆", "正逆轉功能", "過載保護"],
    applications: ["餐廳", "肉舖", "小型加工場", "中央廚房"],
    image: "/products/htg-220un.webp",
    scale: "compact",
  },
  {
    id: "mixer-100u",
    slug: "vertical-meat-mixer",
    category: "mixer",
    categoryLabel: "攪拌機",
    name: "立式食品攪拌機",
    models: "HTM-100U",
    description: "小占地立式機身搭配可傾倒攪拌桶，適合水餃餡、香腸餡、醬料與油飯等食品加工。",
    features: ["雙凸圓攪拌桶", "安全開關", "可傾倒出料", "移動腳輪"],
    applications: ["水餃餡", "香腸餡", "醬料", "油飯"],
    image: "/products/htm-100u.webp",
    specs: [
      { label: "攪拌桶容量", value: "100 公升" },
      { label: "工作能力", value: "30–60 公斤" },
      { label: "馬力", value: "0.55 kW（3/4 HP）" },
      { label: "機器尺寸", value: "600 × 1015 × 1230 mm" },
    ],
    scale: "large",
  },
  {
    id: "slicer-300w",
    slug: "desk-type-automatic-meat-slicer",
    category: "slicer",
    categoryLabel: "冷凍肉切片機",
    name: "桌上型自動切肉片機",
    models: "MST-300W",
    description: "手動與自動兩用的桌上型切片設備，適合餐飲現場與中小量冷凍肉切片。",
    features: ["手動／自動兩用", "285 mm 圓刀", "齒輪式傳動", "T 型棒穩定夾持"],
    applications: ["火鍋肉片", "冷凍肉", "餐廳", "超級市場"],
    image: "/products/desk-type-automatic-meat-slicer.webp",
    specs: [
      { label: "切片速度", value: "46 片／分鐘（60 Hz）" },
      { label: "切割厚度", value: "0–20 mm" },
      { label: "馬力", value: "1 HP" },
      { label: "機器尺寸", value: "750 × 630 × 750 mm" },
    ],
    scale: "medium",
  },
  {
    id: "slicer-350w",
    slug: "automatic-meat-slicer",
    category: "slicer",
    categoryLabel: "冷凍肉切片機",
    name: "全自動切片機",
    models: "MST-350W",
    description: "可調速的全自動切片設備，以大型圓刀與穩定夾持機構提高連續切片效率。",
    features: ["375 mm 圓刀", "皮帶式傳動", "切片速度可調", "穩定壓肉裝置"],
    applications: ["冷凍肉片", "中央廚房", "超級市場", "加工廠"],
    image: "/products/automatic-meat-slicer.webp",
    scale: "large",
  },
  {
    id: "slicer-htcc220",
    slug: "slicing-and-cutting-machine",
    category: "slicer",
    categoryLabel: "冷凍肉切片機",
    name: "冷凍肉片切割機／砍排機",
    models: "HTCC-220",
    description: "為高產能冷凍肉與肉排砍切設計，切片厚度以數字設定並可選配出料輸送帶。",
    features: ["#304 不鏽鋼機身", "數字厚度設定", "安全門蓋連鎖", "輸送帶選配"],
    applications: ["冷凍肉排", "肉品加工廠", "中央廚房", "大量連續切片"],
    image: "/products/slicing-and-cutting-machine.webp",
    specs: [
      { label: "切片效能", value: "200 片／分鐘" },
      { label: "切片厚度", value: "1–20 mm；鋸齒刀 1–60 mm" },
      { label: "馬力", value: "4.5 HP（3.375 kW）" },
      { label: "機器重量", value: "400 kg" },
    ],
    scale: "large",
  },
  {
    id: "skinner-450a",
    slug: "automatic-skinning-machine",
    category: "skinner",
    categoryLabel: "剝皮機",
    name: "自動去皮機",
    models: "HT-450A",
    description: "手動、自動兩用的不鏽鋼去皮設備，可依產品調整刀座厚度並方便移動清洗。",
    features: ["手自動兩用", "可調式刀座", "防水設計", "低噪音運轉"],
    applications: ["豬皮去除", "肉品修整", "加工廠", "中央廚房"],
    image: "/products/automatic-skinning-machine.webp",
    specs: [
      { label: "工作寬度", value: "434 mm" },
      { label: "馬力", value: "0.75 kW" },
      { label: "機器尺寸", value: "1167 × 854 × 1222 mm" },
      { label: "機器重量", value: "195 kg" },
    ],
    scale: "large",
  },
  {
    id: "skinner-450d",
    slug: "derinding-membrane-machine",
    category: "skinner",
    categoryLabel: "剝皮機",
    name: "剝皮機／剝膜機／剝魚皮機",
    models: "HT-450D / HT-450M / HT-450F",
    description: "依不同刀組處理肉皮、筋膜與魚皮，兼顧操作安全與清潔維護。",
    features: ["高級不鏽鋼機身", "可調式刀座", "腳踏式安全開關", "防水易清洗"],
    applications: ["豬皮", "筋膜", "魚皮", "肉品修整"],
    image: "/products/derinding-membrane-machine.webp",
    scale: "medium",
  },
  {
    id: "cutter-t200",
    slug: "desk-type-fresh-meat-slicer-stripper",
    category: "meat-cutter",
    categoryLabel: "鮮肉切割設備",
    name: "桌上型鮮肉切片切絲機",
    models: "HTS-T150 / T200 / T200L",
    description: "桌上型機身適合空間有限的餐飲與生鮮作業區，可依刀組完成鮮肉切片或切絲。",
    features: ["桌上型省空間", "切片切絲兩用", "不鏽鋼接觸面", "刀組容易更換"],
    applications: ["鮮肉切片", "肉絲", "餐廳", "生鮮門市"],
    image: "/products/desk-type-fresh-meat-slicer-stripper.webp",
    scale: "compact",
  },
  {
    id: "cutter-f300",
    slug: "floor-type-fresh-meat-slicer-stripper",
    category: "meat-cutter",
    categoryLabel: "鮮肉切割設備",
    name: "落地型冷藏肉切片切絲機",
    models: "HTS-F200 / F200L / F300 / F300L",
    description: "落地式高產能切片切絲設備，適合中央廚房與肉品加工場連續處理冷藏鮮肉。",
    features: ["落地式穩定機身", "切片切絲刀組", "不鏽鋼結構", "連續進料設計"],
    applications: ["冷藏鮮肉", "中央廚房", "肉品加工", "團膳"],
    image: "/products/floor-type-fresh-meat-slicer-stripper.webp",
    scale: "large",
  },
  {
    id: "cutter-300",
    slug: "rotary-cutter-for-poultry-and-fish",
    category: "meat-cutter",
    categoryLabel: "鮮肉切割設備",
    name: "雞鴨鵝魚切割機",
    models: "HTS-300",
    description: "以大型圓刀處理雞、鴨、鵝與魚類分切，適合餐飲備料及肉品加工現場。",
    features: ["不鏽鋼機體", "300 mm 切刀", "大型工作台", "穩定護刀結構"],
    applications: ["雞肉", "鴨鵝", "魚類", "禽肉加工"],
    image: "/products/rotary-cutter-for-poultry-and-fish.webp",
    scale: "medium",
  },
  {
    id: "vacuum-vt500",
    slug: "stainless-steel-vacuum-tumbling-machine",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "真空按摩嫩化機",
    models: "VT-150 / VT-300 / VT-500",
    description: "以真空滾揉縮短醃漬時間並提升入味均勻度，適合中小批次調理食品。",
    features: ["全機不鏽鋼", "IP65 防水", "攪拌與休息時間可調", "桶速可調"],
    applications: ["醃漬肉類", "海鮮", "調理食品", "冷凍食品"],
    image: "/products/stainless-steel-vacuum-tumbling-machine.webp",
    scale: "medium",
  },
  {
    id: "vacuum-vt1500",
    slug: "stainless-steel-vacuum-tumbler",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "大型真空按摩嫩化機",
    models: "VT-1000 / VT-1500",
    description: "大型真空滾揉設備，適用大量肉品、海鮮及調理食品的醃漬與嫩化作業。",
    features: ["大型不鏽鋼料桶", "IP65 防水", "程序時間可調", "轉速可調"],
    applications: ["大型加工廠", "醃漬肉類", "海鮮調理", "冷凍食品"],
    image: "/products/stainless-steel-vacuum-tumbler.webp",
    scale: "large",
  },
  {
    id: "vacuum-vpt310",
    slug: "single-chamber-vacuum-packing310",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "桌上型單槽真空包裝機",
    models: "VPT-310TC / VPT-420TC",
    description: "桌上型單槽真空包裝設備，透明上蓋方便確認包裝狀態，適合中小量作業。",
    features: ["#304 不鏽鋼", "透明壓克力真空蓋", "桌上型配置", "操作簡明"],
    applications: ["餐廳", "小型食品工作室", "生鮮門市", "調理包"],
    image: "/products/single-chamber-vacuum-packing310.webp",
    scale: "compact",
  },
  {
    id: "vacuum-vpt500",
    slug: "single-chamber-vacuum-packing450",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "落地型單槽真空包裝機",
    models: "VPT-420SC / VPT-500SC / VPT-650HSC",
    description: "適合長時間使用的專業單槽真空包裝機，腳輪設計方便產線調整。",
    features: ["#304 不鏽鋼", "透明立體上蓋", "專業長時間運轉", "活動腳輪"],
    applications: ["中央廚房", "肉品加工", "調理包", "冷凍食品"],
    image: "/products/single-chamber-vacuum-packing450.webp",
    scale: "medium",
  },
  {
    id: "vacuum-vpt900",
    slug: "single-chamber-vacuum-packing800",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "大型單槽真空包裝機",
    models: "VPT-800HSC / VPT-900HSC",
    description: "大型平面真空槽便於清潔，適合食品加工廠長時間與大包裝尺寸作業。",
    features: ["大型平面真空槽", "#304 不鏽鋼", "長時間專業運轉", "移動腳輪"],
    applications: ["大型肉品包裝", "食品加工廠", "冷凍食品", "團膳"],
    image: "/products/single-chamber-vacuum-packing800.webp",
    scale: "large",
  },
  {
    id: "vacuum-vpt-hdc",
    slug: "double-chamber-vacuum-packing-machine",
    category: "vacuum",
    categoryLabel: "真空調理包裝",
    name: "雙槽真空包裝機",
    models: "VPT-800HDC / 850HDC / 880HDC / 900HDC",
    description: "雙槽輪替操作提升包裝效率，並以多組記憶控制適應不同產品與袋材。",
    features: ["雙槽輪替作業", "40 組記憶控制", "換油警示", "平面槽易清潔"],
    applications: ["量產包裝", "肉品加工廠", "調理食品", "海鮮加工"],
    image: "/products/double-chamber-vacuum-packing-machine.webp",
    scale: "large",
  },
  {
    id: "forming-htf120",
    slug: "ham-stuffer",
    category: "forming",
    categoryLabel: "充填成型設備",
    name: "肉捲成型機",
    models: "HTF-120",
    description: "以氣壓腳踏方式控制肉料充填，彈性出料口方便安裝肉袋並維持作業節奏。",
    features: ["全不鏽鋼機身", "腳踏閥控制", "氣壓保護組", "彈性出料口"],
    applications: ["肉捲", "火腿成型", "肉品充填", "加工廠"],
    image: "/products/ham-stuffer.webp",
    scale: "medium",
  },
  {
    id: "forming-htgf220",
    slug: "grinding-sausage-stuffing-machine",
    category: "forming",
    categoryLabel: "充填成型設備",
    name: "香腸充填機",
    models: "HTGF-220",
    description: "結合絞肉與香腸充填功能，自動進料搭配腳踏開關，節省轉機與搬運時間。",
    features: ["絞肉與充填兩用", "自動進料斗", "正逆轉功能", "腳踏進料控制"],
    applications: ["香腸", "肉餡", "食品加工", "中央廚房"],
    image: "/products/grinding-sausage-stuffing-machine.webp",
    scale: "medium",
  },
  {
    id: "forming-hty120",
    slug: "small-dryer",
    category: "forming",
    categoryLabel: "充填成型設備",
    name: "小型香腸烘乾機",
    models: "HTY-70 / HTY-120",
    description: "熱風循環均勻烘乾香腸、烏魚子等產品，溫度與時間皆可依製程設定。",
    features: ["內外不鏽鋼", "熱風循環", "電子恆溫", "冷熱風自動切換"],
    applications: ["香腸", "烏魚子", "肉乾燥", "小型加工場"],
    image: "/products/small-dryer.webp",
    scale: "large",
  },
  {
    id: "forming-htcp510",
    slug: "tension-clipper",
    category: "forming",
    categoryLabel: "充填成型設備",
    name: "附拉力打釘機",
    models: "HTCP-510",
    description: "用於包裝束口與鋁釘封合，拉力與束口能力可調，搭配氣壓系統操作。",
    features: ["不鏽鋼切刀", "拉力可調", "束口能力可調", "401# 鋁釘適用"],
    applications: ["香腸束口", "肉品包裝", "網袋封口", "食品加工"],
    image: "/products/tension-clipper.webp",
    specs: [
      { label: "空壓需求", value: "2 HP 以上" },
      { label: "適用鋁釘", value: "401#" },
      { label: "機器尺寸", value: "550 × 650 × 850 mm" },
      { label: "機器重量", value: "25 kg" },
    ],
    scale: "medium",
  },
  {
    id: "vegetable-301",
    slug: "multi-function-vegetable-cutting-machine",
    category: "vegetable",
    categoryLabel: "切菜機",
    name: "多功能變頻雙頭切菜機",
    models: "HTV-301",
    description: "雙頭多功能設計可處理葉菜與根莖類，透過變頻調整切割速度與成品尺寸。",
    features: ["葉菜與根莖兩用", "變頻調速", "切片切絲切丁", "雙頭作業"],
    applications: ["高麗菜", "蔥", "蘿蔔", "瓜果根莖"],
    image: "/products/multi-function-vegetable-cutting-machine.webp",
    scale: "large",
  },
  {
    id: "vegetable-302",
    slug: "htv-302-avegetable-cutter",
    category: "vegetable",
    categoryLabel: "切菜機",
    name: "多用途切菜機",
    models: "HTV-302A / HTV-303",
    description: "依機型分別處理葉菜、瓜果與球根莖類，可完成切片、切絲與切丁。",
    features: ["多類蔬果適用", "切片切絲切丁", "機型依食材選擇", "移動式機身"],
    applications: ["蔥與洋蔥", "高麗菜", "芋頭與蕃薯", "蘿蔔與筍"],
    image: "/products/htv-302-avegetable-cutter.webp",
    scale: "large",
  },
  {
    id: "juicer-2000",
    slug: "industrial-citrus-juicer",
    category: "juicer",
    categoryLabel: "自動壓汁機",
    name: "大型柳橙榨汁機",
    models: "HT-JC2000",
    description: "工業用柑橘榨汁設備，自動切半後壓榨、不傷果皮，可搭配自動輸送設備。",
    features: ["自動切半壓榨", "每分鐘最高 200 顆", "高低速可調", "輸送設備可客製"],
    applications: ["柳橙", "檸檬", "柑橘加工", "果汁量產"],
    image: "/products/data-216397.webp",
    scale: "large",
  },
];

const productVariantSpecs: Record<string, ModelVariant[]> = {
  "bone-saw-250": [
    {
      model: "HT-250SR",
      specs: {
        輪徑: "230 mm",
        鋸帶長度: "1850 mm",
        鋸切高度: "220 mm",
        鋸切寬度: "210 mm",
        馬力: "1.5 HP",
        機器尺寸: "590 × 640 × 1020 mm（桌上型）／590 × 640 × 1575 mm（落地型）",
        機器重量: "65／120 kg；75／140 kg",
      },
    },
    {
      model: "HT-260",
      specs: {
        輪徑: "230 mm",
        鋸帶長度: "1900 mm",
        鋸切高度: "230 mm",
        鋸切寬度: "210 mm",
        馬力: "1.5 HP",
        機器尺寸: "575 × 740 × 980 mm（桌上型）／670 × 750 × 1490 mm（落地型）",
        機器重量: "65／120 kg；78／140 kg",
      },
    },
  ],
  "bone-saw-300": [
    {
      model: "HT-300SR",
      specs: {
        輪徑: "260 mm",
        鋸帶長度: "2150 mm",
        鋸切高度: "265 mm",
        鋸切寬度: "240 mm",
        馬力: "2 HP",
        機器尺寸: "810 × 805 × 1590 mm",
        機器重量: "120／180 kg",
      },
    },
    {
      model: "HT-330",
      specs: {
        輪徑: "300 mm",
        鋸帶長度: "2580 mm",
        鋸切高度: "360 mm",
        鋸切寬度: "290 mm",
        馬力: "3 HP",
        機器尺寸: "805 × 960 × 1750 mm",
        機器重量: "180／240 kg",
      },
    },
  ],
  "bone-saw-400": [
    {
      model: "HT-400",
      specs: {
        輪徑: "400 mm",
        鋸帶長度: "3020 mm",
        鋸切高度: "410 mm",
        鋸切寬度: "390 mm",
        馬力: "3 HP",
        機器尺寸: "980 × 1195 × 1850 mm",
        機器重量: "250／350 kg",
      },
    },
    {
      model: "HT-360",
      specs: {
        輪徑: "360 mm",
        鋸帶長度: "2715 mm",
        鋸切高度: "360 mm",
        鋸切寬度: "350 mm",
        馬力: "3 HP",
        機器尺寸: "875 × 1175 × 1760 mm",
        機器重量: "220／310 kg",
      },
    },
    {
      model: "HT-360R",
      specs: {
        輪徑: "360 mm",
        鋸帶長度: "2715 mm",
        鋸切高度: "360 mm",
        鋸切寬度: "350 mm",
        馬力: "3 HP",
        機器尺寸: "875 × 1175 × 1760 mm",
        機器重量: "220／310 kg",
      },
    },
  ],
  "bone-saw-420": [
    {
      model: "HT-420LUX",
      specs: {
        輪徑: "420 mm",
        鋸帶長度: "3300 mm",
        鋸切高度: "435 mm",
        鋸切寬度: "410 mm",
        馬力: "5 HP",
        機器尺寸: "1030 × 1115 × 1920 mm",
        機器重量: "350／450 kg",
      },
    },
    {
      model: "HT-420SL",
      specs: {
        輪徑: "420 mm",
        鋸帶長度: "3150 mm",
        鋸切高度: "400 mm",
        鋸切寬度: "400 mm",
        馬力: "5 HP",
        機器尺寸: "1040 × 1140 × 1870 mm",
        機器重量: "280／380 kg",
      },
    },
  ],
  "grinder-114": [
    {
      model: "HTG-114M-UN",
      specs: {
        絞肉馬力: "10 HP／三相",
        攪拌馬力: "2 HP",
        料槽容量: "170 L",
        產能: "800 kg/hr",
        網盤系統: "114 mm／兩刀三網",
        機器尺寸: "900 × 1210 × 1320 mm",
        機器重量: "460 kg",
      },
    },
    {
      model: "HTG-130M-UN",
      specs: {
        絞肉馬力: "10 HP／三相",
        攪拌馬力: "2 HP",
        料槽容量: "170 L",
        產能: "1000 kg/hr",
        網盤系統: "130 mm／兩刀三網",
        機器尺寸: "900 × 1230 × 1320 mm",
        機器重量: "485 kg",
      },
    },
    {
      model: "HTG-130M-EN",
      specs: {
        絞肉馬力: "10 HP／三相",
        攪拌馬力: "2 HP",
        料槽容量: "170 L",
        產能: "800 kg/hr",
        網盤系統: "130 mm／單刀網",
        機器尺寸: "900 × 1160 × 1320 mm",
        機器重量: "480 kg",
      },
    },
  ],
  "grinder-120": [
    {
      model: "HTG-120SS（#12）",
      specs: {
        馬力: "3/4 HP",
        產能: "120 kg",
        網盤直徑: "70 mm",
        機器尺寸: "250 × 410 × 410 mm",
        機器重量: "30 kg",
      },
    },
    {
      model: "HTG-220SS（#22）",
      specs: {
        馬力: "1.5 HP",
        產能: "240 kg",
        網盤直徑: "82 mm",
        機器尺寸: "300 × 500 × 500 mm",
        機器重量: "40 kg",
      },
    },
  ],
  "grinder-320": [
    {
      model: "HTG-320S-98",
      specs: {
        馬力: "5 HP",
        產能: "950 kg/hr",
        網盤系統: "98 mm／兩刀三網",
        機器尺寸: "605 × 1000 × 950 mm",
        淨重與毛重: "145／200 kg",
      },
    },
    {
      model: "HTG-320S-100",
      specs: {
        馬力: "5 HP",
        產能: "500 kg/hr",
        網盤系統: "100 mm／單刀網",
        機器尺寸: "605 × 950 × 950 mm",
        淨重與毛重: "145／200 kg",
      },
    },
  ],
  "grinder-220": [
    {
      model: "HTG-220UN",
      specs: {
        馬力: "2 HP（或 3 HP）／三相",
        產能: "380 kg/hr",
        網盤系統: "82 mm／兩刀三網 Unger System",
        機器尺寸: "600 × 530 × 480 mm（桌上型）／600 × 530 × 910 mm（落地型）",
        機器重量: "70 kg",
      },
    },
    {
      model: "HTG-220EN",
      specs: {
        馬力: "2 HP（單相或三相）／3 HP",
        產能: "300 kg/hr",
        網盤系統: "82 mm／單刀網 Enterprise System",
        機器尺寸: "600 × 480 × 480 mm（桌上型）／600 × 480 × 910 mm（落地型）",
        機器重量: "65 kg",
      },
    },
  ],
  "skinner-450d": [
    {
      model: "HT-450D",
      specs: {
        主要用途: "肉品剝皮",
        工作寬度: "434 mm",
        滾輪速度: "15 m/min",
        馬力: "0.75 kW",
        機器尺寸: "750 × 720 × 970 mm",
        機器重量: "105 kg",
      },
    },
    {
      model: "HT-450M",
      specs: {
        主要用途: "肉品筋膜處理",
        工作寬度: "434 mm",
        滾輪速度: "15 m/min",
        馬力: "0.75 kW",
        機器尺寸: "750 × 720 × 970 mm",
        機器重量: "105 kg",
      },
    },
    {
      model: "HT-450F",
      specs: {
        主要用途: "魚皮處理",
        工作寬度: "434 mm",
        滾輪速度: "15 m/min",
        馬力: "0.75 kW",
        機器尺寸: "750 × 720 × 970 mm",
        機器重量: "105 kg",
      },
    },
  ],
  "cutter-t200": [
    {
      model: "HTS-T150",
      specs: {
        肉槽尺寸: "150 × 70 mm",
        電壓與功率: "110／220 V；150 W",
        機器尺寸: "430 × 430 × 340 mm",
        機器重量: "36 kg",
      },
    },
    {
      model: "HTS-T200",
      specs: {
        肉槽尺寸: "200 × 70 mm",
        電壓與功率: "110／220 V；200 W",
        機器尺寸: "400 × 400 × 430 mm",
        機器重量: "39 kg",
      },
    },
    {
      model: "HTS-T200L",
      specs: {
        肉槽尺寸: "200 × 90 mm",
        電壓與功率: "110／220 V；200 W",
        機器尺寸: "440 × 400 × 430 mm",
        機器重量: "41 kg",
      },
    },
  ],
  "cutter-f300": [
    {
      model: "HTS-F200",
      specs: {
        肉槽尺寸: "200 × 60 mm",
        電壓與馬力: "220 V／1 HP",
        機器尺寸: "580 × 450 × 800 mm",
        機器重量: "80 kg",
      },
    },
    {
      model: "HTS-F200L",
      specs: {
        肉槽尺寸: "200 × 80 mm",
        電壓與馬力: "220 V／1 HP",
        機器尺寸: "580 × 550 × 800 mm",
        機器重量: "85 kg",
      },
    },
    {
      model: "HTS-F300",
      specs: {
        肉槽尺寸: "300 × 60 mm",
        電壓與馬力: "220 V／2 HP",
        機器尺寸: "650 × 450 × 800 mm",
        機器重量: "95 kg",
      },
    },
    {
      model: "HTS-F300L",
      specs: {
        肉槽尺寸: "300 × 80 mm",
        電壓與馬力: "220 V／2 HP",
        機器尺寸: "650 × 550 × 800 mm",
        機器重量: "100 kg",
      },
    },
  ],
  "vacuum-vt500": [
    {
      model: "VT-150",
      specs: { 產能: "60 kg", 真空幫浦: "21 m³/hr", 機器尺寸: "1100 × 920 × 1500 mm" },
    },
    {
      model: "VT-300",
      specs: { 產能: "120 kg", 真空幫浦: "21 m³/hr", 機器尺寸: "1270 × 1030 × 1650 mm" },
    },
    {
      model: "VT-500",
      specs: { 產能: "200 kg", 真空幫浦: "40 m³/hr", 機器尺寸: "1450 × 1180 × 1770 mm" },
    },
  ],
  "vacuum-vt1500": [
    {
      model: "VT-1000",
      specs: { 產能: "400 kg", 真空幫浦: "40 m³/hr", 機器尺寸: "1765 × 1500 × 1700 mm" },
    },
    {
      model: "VT-1500",
      specs: { 產能: "600 kg", 真空幫浦: "63 m³/hr", 機器尺寸: "2100 × 1590 × 1700 mm" },
    },
  ],
  "vacuum-vpt310": [
    {
      model: "VPT-310TC",
      specs: {
        幫浦: "6",
        封口線長度: "310 mm × 1",
        封口線距離: "300 mm",
        真空槽高度: "120 mm",
        機器尺寸: "520 × 430 × 510 mm",
      },
    },
    {
      model: "VPT-420TC",
      specs: {
        幫浦: "21",
        封口線長度: "420 mm × 2",
        封口線距離: "390 mm",
        真空槽高度: "140 mm",
        機器尺寸: "680 × 580 × 540 mm",
      },
    },
  ],
  "vacuum-vpt500": [
    {
      model: "VPT-420SC",
      specs: {
        幫浦: "21",
        封口線長度: "420 mm × 2",
        封口線距離: "390 mm",
        真空槽高度: "140 mm",
        機器尺寸: "680 × 570 × 900 mm",
      },
    },
    {
      model: "VPT-500SC",
      specs: {
        幫浦: "21",
        封口線長度: "500 mm × 2",
        封口線距離: "450 mm",
        真空槽高度: "140 mm",
        機器尺寸: "720 × 650 × 910 mm",
      },
    },
    {
      model: "VPT-650HSC",
      specs: {
        幫浦: "21",
        封口線長度: "760 mm × 2／450 mm × 2",
        封口線距離: "390／650 mm",
        真空槽高度: "140 mm",
        機器尺寸: "680 × 930 × 920 mm",
      },
    },
  ],
  "vacuum-vpt900": [
    {
      model: "VPT-800HSC",
      specs: {
        幫浦: "63",
        封口線長度: "800 mm × 2／520 mm × 2",
        封口線距離: "450／680 mm",
        真空槽高度: "160 mm",
        機器尺寸: "700 × 900 × 1060 mm",
      },
    },
    {
      model: "VPT-900HSC",
      specs: {
        幫浦: "100",
        封口線長度: "900 mm × 2",
        封口線距離: "530 mm",
        真空槽高度: "200 mm",
        機器尺寸: "790 × 1000 × 1060 mm",
      },
    },
  ],
  "vacuum-vpt-hdc": [
    {
      model: "VPT-800HDC",
      specs: {
        幫浦: "100",
        封口線長度: "800 mm × 4",
        封口線距離: "510 mm",
        真空槽高度: "200 mm",
        機器尺寸: "810 × 1940 × 1000 mm",
      },
    },
    {
      model: "VPT-850HDC",
      specs: {
        幫浦: "200",
        封口線長度: "850 mm × 4",
        封口線距離: "600 mm",
        真空槽高度: "220 mm",
        機器尺寸: "900 × 2060 × 1120 mm",
      },
    },
    {
      model: "VPT-880HDC",
      specs: {
        幫浦: "200",
        封口線長度: "880 mm × 4",
        封口線距離: "860 mm",
        真空槽高度: "300 mm",
        機器尺寸: "1160 × 2100 × 1100 mm",
      },
    },
    {
      model: "VPT-900HDC",
      specs: {
        幫浦: "300",
        封口線長度: "1000 mm × 4",
        封口線距離: "900 mm",
        真空槽高度: "300 mm",
        機器尺寸: "1240 × 2400 × 1180 mm",
      },
    },
  ],
  "forming-hty120": [
    {
      model: "HTY-70",
      specs: {
        產能: "70–90 斤（約 42 kg）",
        機器尺寸: "800 × 660 × 1230 mm",
        機體內尺寸: "550 × 620 × 1020 mm",
        最高溫度: "70°C",
        加熱與馬力: "電熱式；1/4 HP；220 V 單相",
      },
    },
    {
      model: "HTY-120",
      specs: {
        產能: "120–140 斤（約 72 kg）",
        機器尺寸: "910 × 660 × 1510 mm",
        機體內尺寸: "670 × 620 × 1300 mm",
        最高溫度: "70°C",
        加熱與馬力: "電熱式；1/4 HP；220 V 單相",
      },
    },
  ],
  "vegetable-302": [
    {
      model: "HTV-302A",
      specs: {
        適用食材: "蔥、洋蔥、瓜類、茄子、高麗菜",
        馬力: "1/2 HP × 1；1/4 HP × 1",
        機器尺寸: "800 × 490 × 1290 mm",
        機器重量: "75 kg",
      },
    },
    {
      model: "HTV-303",
      specs: {
        適用食材: "球根莖類；切片、切絲、切丁",
        馬力: "1 HP",
        機器尺寸: "750 × 520 × 900 mm",
        機器重量: "70 kg",
      },
    },
  ],
};

export const getProductVariants = (product: Product): ModelVariant[] => {
  const configured = productVariantSpecs[product.id];
  if (configured) return configured;

  const baseSpecs = Object.fromEntries(
    (product.specs ?? []).map((spec) => [spec.label, spec.value]),
  );

  return [
    {
      model: product.models,
      specs:
        Object.keys(baseSpecs).length > 0
          ? baseSpecs
          : {
              設備形式: product.scale === "compact" ? "精巧型" : product.scale === "large" ? "落地型" : "標準型",
              適用範圍: product.applications.join("、"),
              規格確認: "電壓、產能與選配內容請洽弘鼎確認",
            },
    },
  ];
};

export const categoryOptions = [
  { id: "all", label: "全部產品", count: products.length, enabled: true },
  { id: "bone-saw", label: "鋸骨機／切骨機", count: 4, enabled: true },
  { id: "meat-grinder", label: "絞肉機", count: 5, enabled: true },
  { id: "mixer", label: "攪拌機", count: 1, enabled: true },
  { id: "slicer", label: "冷凍肉切片機", count: 3, enabled: true },
  { id: "skinner", label: "剝皮機", count: 2, enabled: true },
  { id: "meat-cutter", label: "鮮肉切割設備", count: 3, enabled: true },
  { id: "vacuum", label: "真空調理包裝", count: 6, enabled: true },
  { id: "forming", label: "充填成型設備", count: 4, enabled: true },
  { id: "vegetable", label: "切菜機", count: 2, enabled: true },
  { id: "juicer", label: "自動壓汁機", count: 1, enabled: true },
] as const;

export const megaMenuGroups = [
  {
    eyebrow: "MEAT PROCESSING",
    title: "肉品前處理",
    categoryIds: ["bone-saw", "meat-grinder", "mixer"],
  },
  {
    eyebrow: "CUTTING SERIES",
    title: "切割與修整",
    categoryIds: ["slicer", "skinner", "meat-cutter"],
  },
  {
    eyebrow: "PACKAGING & FORMING",
    title: "包裝、成型與蔬果",
    categoryIds: ["vacuum", "forming", "vegetable", "juicer"],
  },
] as const;

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((product) => product.category === category);
