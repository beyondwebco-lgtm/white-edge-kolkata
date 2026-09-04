export interface SignProjectItem {
  id: string;
  client: string;
  title: string;
  category: string;
  images: string[];
  tagline: string;
  description: string;
  specifications: string[];
  materials: string[];
  framework?: string;
  lighting?: string;
  warranty?: string;
}

export const OUR_WORK_PROJECTS: SignProjectItem[] = [
  {
    id: "tea-kettle",
    client: "Tea Kettle",
    title: "Tea Kettle – Acrylic LED 3D Signage",
    category: "Round 3D Box Signage",
    images: ["/assets/our-work/tea-kettle-signage.jpeg"],
    tagline: "Custom round illuminated box signage with premium acrylic face & aluminium trim",
    description:
      "Custom-designed round illuminated signage featuring the Tea Kettle logo, premium acrylic face, printed graphics, and internal LED illumination. Finished with an aluminium box frame and mounted on the existing wall.",
    specifications: [
      "Signage Type: Round 3D Box Signage",
      "Design: Custom Tea Kettle logo with circular branding",
      "Structure: MS square pipe frame",
      "Face Finish: Premium acrylic face with printed graphics",
      "Side Finish: Aluminium trim / box finish",
      "Lighting: Internal LED illumination with SMPS",
      "Mounting: Custom wall-mounted signage"
    ],
    materials: ["Premium Cast Acrylic", "Aluminium Box Trim", "MS Square Pipe", "Internal LED Modules", "SMPS Power Supply"],
    framework: "MS square pipe frame with aluminium trim / box finish",
    lighting: "Internal LED illumination with SMPS"
  },
  {
    id: "eylore-opticals",
    client: "Eylore Opticals",
    title: "Eylore Opticals – ACP Cladding with 3D Letters",
    category: "ACP Cladding with 3D Letters",
    images: [
      "/assets/our-work/eylore-opticals-1.jpeg",
      "/assets/our-work/eylore-opticals-2.jpeg"
    ],
    tagline: "Virgo ACP cladding with ceiling & pillar coverage and 60mm 3D letters",
    description:
      "Complete exterior branding solution featuring Virgo ACP cladding with ceiling and pillar coverage, supported by a 25 × 25 mm MS square pipe single frame with 60 mm 3D acrylic letters.",
    specifications: [
      "Signage Type: ACP cladding with illuminated 3D letters",
      "Framework: 25 × 25 mm MS square pipe single frame",
      "ACP Cladding: Virgo ACP cladding with ceiling and pillar coverage",
      "Acrylic Letters: 3 mm Astari Brand 040 acrylic",
      "Letter Projection: 60 mm 3D projection",
      "Back Tray: 5 mm sunboard back tray",
      "Lighting: ADS 1.5W LED modules with SMPS"
    ],
    materials: ["Virgo ACP Cladding", "3mm Astari 040 Acrylic", "25×25mm MS Square Pipe", "5mm Sunboard Back Tray", "ADS 1.5W LEDs"],
    framework: "25 × 25 mm MS square pipe single frame",
    lighting: "ADS 1.5W LED modules with SMPS"
  },
  {
    id: "damro-furniture",
    client: "DAMRO FURNITURE",
    title: "DAMRO FURNITURE – Large-Format ACP Signage",
    category: "ACP Signage",
    images: [
      "/assets/our-work/damro-furniture-1.jpeg",
      "/assets/our-work/damro-furniture-2.jpeg"
    ],
    tagline: "Fabrication & installation with 3mm VIRGO ACP panels & ADS 1.5W LEDs (10-Yr Warranty)",
    description:
      "Fabrication and installation of ACP signage using a 25 × 25 mm MS square pipe structure with 3 mm VIRGO Brand ACP panels. The existing 3D acrylic letters retained and fitted with new ADS Brand 1.5W LED modules and SMPS.",
    specifications: [
      "Client Name: DAMRO FURNITURE",
      "Signage Type: ACP Signage",
      "ACP Cladding: 3 mm VIRGO Brand ACP panels",
      "Framework: 25 × 25 mm MS square pipe structure",
      "Existing Letters: Existing 3D acrylic letters retained & upgraded",
      "Lighting: ADS Brand 1.5W LED modules with SMPS",
      "ACP Cladding Warranty: 10 years"
    ],
    materials: ["3mm VIRGO ACP Panels", "25×25mm MS Square Pipe", "ADS 1.5W LED Modules", "SMPS Power Supply", "Acrylic 3D Letters"],
    framework: "25 × 25 mm MS square pipe structure",
    lighting: "ADS Brand 1.5W LED modules with SMPS",
    warranty: "10 Years ACP Cladding Warranty"
  },
  {
    id: "hyp-signage",
    client: "HYP",
    title: "HYP – Suspended 3D Letter Signage & Complete ACP Cladding",
    category: "Suspended 3D Letter Signage",
    images: [
      "/assets/our-work/hyp-suspended-signage-1.jpeg",
      "/assets/our-work/hyp-suspended-signage-2.jpeg"
    ],
    tagline: "Hanging frame with 60mm SS mirror-finished acrylic lip letters & UV-printed backlit panels",
    description:
      "Complete signage and ACP cladding project featuring ACP-covered panelling, illuminated main signage, aluminium profile signage, and backlit LED signage. The project combines durable MS square pipe structures, premium aluminium profiles, SS mirror-finished acrylic letters, and UV-printed graphics with LED illumination.",
    specifications: [
      "Client: HYP - COMPLETE SIGNAGE & ACP CLADDING",
      "Signage Type: Suspended 3D Letter Signage",
      "Structure: 25 × 25 mm MS square pipe hanging frame",
      "Letter Finish: 60 mm SS mirror-finished acrylic lip letters",
      "Lighting: ADS 1.5W LED modules with SMPS",
      "Additional Works: ACP-covered panelling & UV-printed backlit graphics"
    ],
    materials: ["SS Mirror Finish Acrylic Lip Letters", "25×25mm MS Hanging Structure", "Aluminium Profile", "UV Printed Graphics", "ADS 1.5W LEDs"],
    framework: "25 × 25 mm MS square pipe hanging frame",
    lighting: "ADS 1.5W LED modules with SMPS"
  },
  {
    id: "bellezza-boutique",
    client: "Bellezza Boutique",
    title: "Bellezza Boutique – Backlit LED Signage",
    category: "Backlit LED Signage",
    images: ["/assets/our-work/bellezza-boutique.jpeg"],
    tagline: "19 × 19 mm MS frame with UV high-quality printed graphics & LED tube illumination",
    description:
      "Premium backlit signage featuring a 19 × 19 mm MS square pipe structure, UV high-quality printed graphics, and LED tube illumination.",
    specifications: [
      "Client: Bellezza Boutique",
      "Signage Type: Backlit LED Signage",
      "Structure: 19 × 19 mm MS square pipe structure",
      "Graphics: UV high-quality printed graphics",
      "Lighting: LED tube illumination",
      "Mounting: Exterior facade mounting"
    ],
    materials: ["19×19mm MS Square Pipe", "UV Printed Backlit Substrate", "LED Tube Illumination", "Weatherproof Enclosure"],
    framework: "19 × 19 mm MS square pipe structure",
    lighting: "LED tube illumination"
  },
  {
    id: "grill-chowk",
    client: "Grill Chowk",
    title: "Grill Chowk – LED 3D Letters",
    category: "LED 3D Letters",
    images: ["/assets/our-work/grill-chowk.jpeg"],
    tagline: "Bold, illuminated dimensional restaurant signage engineered for evening footfall",
    description:
      "Custom illuminated LED 3D letter signage designed for restaurant storefront prominence, delivering intense illumination and crisp font silhouette in evening hours.",
    specifications: [
      "Client: Grill Chowk",
      "Signage Type: LED 3D Letters",
      "Letter Finish: Precision laser-cut frontlit acrylic dimensional letters",
      "Structure: Heavy-duty backframe mounting",
      "Lighting: High-density waterproof LED modules with SMPS power unit"
    ],
    materials: ["Cast Acrylic", "Internal LED Modules", "Weatherproof SMPS", "Aluminium Trim Returns"],
    framework: "Custom rigid backplate & framing",
    lighting: "High-density waterproof LED modules"
  },
  {
    id: "kaibaby",
    client: "KAIBABY",
    title: "KAIBABY – Acrylic 3D Letters",
    category: "Acrylic 3D Letters",
    images: ["/assets/our-work/kaibaby-signage.jpeg"],
    tagline: "Complete exterior branding & facade cladding featuring custom illuminated 3D letters",
    description:
      "Complete exterior branding and facade cladding project featuring custom illuminated signage and premium ACP cladding.",
    specifications: [
      "Client: KAIBABY",
      "Signage Type: Acrylic 3D Letters & ACP Cladding",
      "Letter Type: Custom fabricated acrylic 3D letters",
      "Facade: Complete exterior ACP cladding coverage",
      "Illumination: Uniform frontlit LED illumination"
    ],
    materials: ["Premium Cast Acrylic", "Exterior ACP Cladding Panels", "Waterproof LED Modules", "MS Subframe Structure"],
    framework: "MS Subframe with ACP Cladding",
    lighting: "Uniform frontlit LED modules"
  },
  {
    id: "wez-brain",
    client: "WEZ BRAIN",
    title: "WEZ BRAIN – ACP Rooftop Signage",
    category: "ACP Rooftop Signage",
    images: ["/assets/our-work/wez-brain-rooftop.jpeg"],
    tagline: "Visible from ~900 metres with Alstar / Virgo ACP & opal white illuminated acrylic letters",
    description:
      "Premium ACP rooftop signage designed for long-distance visibility, featuring a 25 × 25 mm MS square pipe structure with aluminium cross-section, Alstar / Virgo Brand ACP cladding, and illuminated opal white acrylic letters. Visible from approximately 900 metres.",
    specifications: [
      "Client: WEZ BRAIN",
      "Signage Type: ACP Rooftop Signage",
      "Visibility Range: Visible from approx. 900 metres",
      "Structure: 25 × 25 mm MS square pipe structure with aluminium cross-section",
      "Cladding: Alstar / Virgo Brand ACP cladding",
      "Lettering: Illuminated opal white acrylic letters",
      "Engineering: High wind-load structural anchoring"
    ],
    materials: ["Alstar / Virgo Brand ACP Cladding", "Opal White Cast Acrylic", "25×25mm MS Structure", "Aluminium Cross-Section", "High-Lumen LEDs"],
    framework: "25 × 25 mm MS square pipe structure with aluminium cross-section",
    lighting: "High-lumen LED modules with SMPS"
  },
  {
    id: "zycho",
    client: "Zycho",
    title: "Zycho – Reception Logo",
    category: "Reception Logo & Interior Branding",
    images: ["/assets/our-work/zycho-reception-logo.jpeg"],
    tagline: "Titanium Gold 25mm beading letters with warm white LED shadow lighting",
    description:
      "Premium Titanium Gold 25 mm Beading Letters with Warm White LED Shadow Lighting, creating an elegant and welcoming reception backdrop.",
    specifications: [
      "Client: Zycho",
      "Signage Type: Reception Logo / Interior Dimensional Branding",
      "Letter Finish: Premium Titanium Gold 25 mm Beading Letters",
      "Lighting: Warm White LED Shadow / Halo Lighting",
      "Mounting: Concealed stud floating mount on interior feature wall"
    ],
    materials: ["Titanium Gold Finish Metal / Beading", "Warm White 3000K LEDs", "Concealed Standoffs", "Low-Voltage Power Supply"],
    framework: "Concealed floating wall studs",
    lighting: "Warm White LED Shadow Lighting"
  },
  {
    id: "thana-square-mall",
    client: "THANA SQUARE MALL",
    title: "THANA SQUARE MALL, KANNUR – SS Mirror Double Lip 3D Letters",
    category: "Mall Entrance Signage",
    images: [
      "/assets/our-work/thana-square-mall-1.jpeg",
      "/assets/our-work/thana-square-mall-2.jpeg"
    ],
    tagline: "SS Mirror Double Lip 3D letters with 60mm projection & 30mm side beading",
    description:
      "Premium SS Mirror Double Lip 3D Letters with 60 mm projection, 30 mm side beading, and illuminated ADS LED modules, creating a bold and elegant mall entrance in Kannur.",
    specifications: [
      "Client: THANA SQUARE MALL, KANNUR",
      "Signage: SS Mirror Double Lip Letters",
      "Projection: 60 mm 3D with 30 mm side beading",
      "Structure: SS square pipe back structure",
      "Lighting: 1.5W ADS LED modules & SMPS"
    ],
    materials: ["Stainless Steel Mirror Double Lip", "30mm Side Beading", "SS Square Pipe Back Structure", "1.5W ADS LED Modules", "SMPS"],
    framework: "SS square pipe back structure",
    lighting: "1.5W ADS LED modules & SMPS"
  }
];
