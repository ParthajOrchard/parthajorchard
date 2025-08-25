import { Product, type IProduct } from "./types"

const productsData: IProduct[] = [
  {
    id: "basmati-rice-1121",
    name: "Basmati Rice 1121 Pusa Sella",
    hsCode: "10063020",
    category: "Grains",
    subCategory: "Rice",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "Premium long-grain aromatic Basmati rice with exceptional cooking quality and distinct fragrance, ideal for international markets.",
    specs: {
      grade: "1121 Pusa Basmati Sella",
      keyParameters: {
        moisture: "12-13%",
        purityOrActives: "Purity 95%",
        sizeOrLength: "8.35 mm AGL",
        defects: "Broken <2%, Damage/Discoloration Nil",
        foreignMatter: "<1%",
      },
      compliance: {
        marketMRLs: ["EU", "US", "GCC", "ASEAN"],
        gmo: "Non-GMO",
        allergens: "Gluten-free",
      },
    },
    origin: { country: "India", region: "Punjab, Haryana" },
    packaging: {
      options: ["5kg PP bags", "10kg PP bags", "25kg PP bags", "50kg jute bags", "Custom packaging available"],
      palletization: true,
      containerLoadability: { "20ft": 25, "40ft": 27 },
    },
    trade: {
      moq: "1 x 20ft Container (~25 MT)",
      leadTime: "2-3 weeks from advance payment",
      incoterms: ["FOB Mundra", "CIF destination port"],
      paymentTerms: ["LC at sight", "30% TT advance, 70% against shipping documents"],
      inspection: "SGS/BV at buyer's cost",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "Phytosanitary Certificate",
        "Fumigation Certificate",
        "Certificate of Analysis",
      ],
    },
    certifications: ["FSSAI", "APEDA RCMC", "ISO 22000:2018", "HACCP", "BRC"],
    shelfLife: "24 months from manufacturing date",
    storage: "Store in cool, dry place away from direct sunlight and moisture",
    capabilities: { privateLabel: true, monthlyCapacityMT: 500, samples: "Available - 3-5 days lead time" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Prices quoted based on destination, quantity, and specifications",
    },
    notes: "Prices subject to market fluctuations. Quality parameters as per buyer specifications.",
  },
  {
    id: "turmeric-powder-salem",
    name: "Turmeric Powder Salem Quality",
    hsCode: "09103000",
    category: "Spices",
    subCategory: "Ground Spices",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "Premium Salem quality turmeric powder with high curcumin content and vibrant golden color, perfect for culinary and medicinal applications.",
    specs: {
      grade: "Salem/Erode Quality",
      keyParameters: {
        moisture: "10-12%",
        purityOrActives: "Curcumin 3-5%",
        defects: "Foreign matter <2%",
        contaminants: "Aflatoxin <10 ppb",
        microbiological: "Total plate count <10^5 cfu/g",
      },
      compliance: {
        marketMRLs: ["EU", "US", "Japan", "Australia"],
        gmo: "Non-GMO",
        allergens: "None",
      },
    },
    origin: { country: "India", region: "Tamil Nadu, Andhra Pradesh" },
    packaging: {
      options: ["25kg PP bags with inner liner", "50kg PP bags", "Retail packaging on request"],
      palletization: true,
      containerLoadability: { "20ft": 18, "40ft": 20 },
    },
    trade: {
      moq: "5 Metric Tons",
      leadTime: "2-3 weeks from order confirmation",
      incoterms: ["FOB Chennai", "CIF destination"],
      paymentTerms: ["LC at sight", "CAD", "30% advance, 70% against documents"],
      inspection: "SGS/Intertek at loading port",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "Spices Board Certificate",
        "Certificate of Analysis",
        "Fumigation Certificate",
      ],
    },
    certifications: ["Spices Board India", "FSSAI", "ISO 22000:2018", "USDA Organic (organic variant)", "EU Organic"],
    shelfLife: "36 months from manufacturing date",
    storage: "Store in cool, dry conditions below 25°C, away from light and moisture",
    capabilities: { privateLabel: true, monthlyCapacityMT: 200, samples: "Available - 500g samples, 5-7 days" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Pricing varies based on curcumin content and market conditions",
    },
    notes: "Available in both conventional and organic variants. Custom curcumin content available on request.",
  },
  {
    id: "finger-millet-ragi",
    name: "Finger Millet (Ragi)",
    hsCode: "10082900",
    category: "Millets",
    subCategory: "Small Millets",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "Nutrient-dense finger millet rich in calcium, iron, and dietary fiber, perfect for health-conscious consumers and gluten-free diets.",
    specs: {
      grade: "FAQ (Fair Average Quality)",
      keyParameters: {
        moisture: "12% max",
        purityOrActives: "Purity 98%",
        defects: "Damaged grains <3%",
        foreignMatter: "<2%",
        contaminants: "Aflatoxin <4 ppb",
      },
      compliance: {
        marketMRLs: ["EU", "US", "Canada"],
        gmo: "Non-GMO",
        allergens: "Gluten-free",
      },
    },
    origin: { country: "India", region: "Karnataka, Tamil Nadu" },
    packaging: {
      options: ["25kg PP bags", "50kg jute bags", "1kg retail packs", "Custom packaging"],
      palletization: true,
      containerLoadability: { "20ft": 22, "40ft": 24 },
    },
    trade: {
      moq: "10 Metric Tons",
      leadTime: "3-4 weeks from harvest season",
      incoterms: ["FOB Bangalore/Chennai", "CIF destination"],
      paymentTerms: ["LC at sight", "30% TT advance, 70% against BL copy"],
      inspection: "Third party inspection available",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "APEDA Certificate",
        "Phytosanitary Certificate",
        "Certificate of Analysis",
      ],
    },
    certifications: ["APEDA", "FSSAI", "India Organic", "Fair Trade (organic variant)", "Non-GMO Project Verified"],
    shelfLife: "18 months from packaging date",
    storage: "Store in cool, dry place with good ventilation, protect from pests",
    capabilities: { privateLabel: true, monthlyCapacityMT: 150, samples: "1kg samples available, 7-10 days" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Seasonal pricing, best rates during harvest season (Oct-Jan)",
    },
    notes: "Available in both conventional and organic certified variants. Seasonal availability affects pricing.",
  },
  {
    id: "red-chili-powder-teja",
    name: "Red Chili Powder Teja Quality",
    hsCode: "09042200",
    category: "Spices",
    subCategory: "Ground Spices",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "Premium Teja quality red chili powder with intense heat and vibrant color, ideal for food processing and culinary applications worldwide.",
    specs: {
      grade: "Teja/Byadgi Quality",
      keyParameters: {
        moisture: "10-12%",
        purityOrActives: "Capsaicin 25,000-40,000 SHU",
        defects: "Foreign matter <1.5%",
        contaminants: "Aflatoxin <10 ppb, Sudan dye negative",
        microbiological: "Salmonella negative, E.coli <10 cfu/g",
      },
      compliance: {
        marketMRLs: ["EU", "US", "Middle East", "ASEAN"],
        gmo: "Non-GMO",
        allergens: "None",
      },
    },
    origin: { country: "India", region: "Andhra Pradesh, Karnataka" },
    packaging: {
      options: ["25kg PP bags with inner liner", "50kg PP bags", "Retail packaging available"],
      palletization: true,
      containerLoadability: { "20ft": 16, "40ft": 18 },
    },
    trade: {
      moq: "5 Metric Tons",
      leadTime: "2-3 weeks from order",
      incoterms: ["FOB Visakhapatnam", "CIF destination"],
      paymentTerms: ["LC at sight", "CAD", "TT payment terms"],
      inspection: "SGS/BV inspection at loading",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "Spices Board Certificate",
        "Phytosanitary Certificate",
        "Certificate of Analysis",
        "Fumigation Certificate",
      ],
    },
    certifications: ["Spices Board India", "FSSAI", "ISO 22000:2018", "HACCP", "Kosher", "Halal"],
    shelfLife: "24 months from manufacturing",
    storage: "Store in cool, dry place away from direct sunlight, maintain below 25°C",
    capabilities: { privateLabel: true, monthlyCapacityMT: 300, samples: "500g samples, 3-5 days delivery" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Pricing based on capsaicin content and color value requirements",
    },
    notes: "Custom heat levels and color specifications available. Steam sterilization option available.",
  },
  {
    id: "pearl-millet-bajra",
    name: "Pearl Millet (Bajra)",
    hsCode: "10082100",
    category: "Millets",
    subCategory: "Major Millets",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "High-protein pearl millet with excellent nutritional profile, drought-resistant crop perfect for sustainable agriculture and health food markets.",
    specs: {
      grade: "FAQ (Fair Average Quality)",
      keyParameters: {
        moisture: "12% max",
        purityOrActives: "Purity 97%",
        defects: "Damaged grains <2%",
        foreignMatter: "<3%",
        contaminants: "Aflatoxin <4 ppb",
      },
      compliance: {
        marketMRLs: ["EU", "US", "Australia", "Japan"],
        gmo: "Non-GMO",
        allergens: "Gluten-free",
      },
    },
    origin: { country: "India", region: "Rajasthan, Gujarat, Maharashtra" },
    packaging: {
      options: ["25kg PP bags", "50kg PP bags", "1kg retail packs", "Bulk packaging"],
      palletization: true,
      containerLoadability: { "20ft": 25, "40ft": 27 },
    },
    trade: {
      moq: "20 Metric Tons",
      leadTime: "2-4 weeks depending on season",
      incoterms: ["FOB Kandla", "CIF destination"],
      paymentTerms: ["LC at sight", "30% advance, 70% against shipping documents"],
      inspection: "Third party inspection available at origin",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "APEDA Certificate",
        "Phytosanitary Certificate",
        "Certificate of Analysis",
      ],
    },
    certifications: ["APEDA", "FSSAI", "India Organic", "Non-GMO Project Verified", "Fair Trade Certified"],
    shelfLife: "18 months from packaging",
    storage: "Store in cool, dry, well-ventilated area, protect from rodents and insects",
    capabilities: { privateLabel: true, monthlyCapacityMT: 400, samples: "2kg samples available, 5-7 days" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Competitive pricing for bulk orders, seasonal variations apply",
    },
    notes: "Excellent source of protein and minerals. Available year-round with seasonal price variations.",
  },
  {
    id: "black-pepper-malabar",
    name: "Black Pepper Malabar Garbled",
    hsCode: "09041100",
    category: "Spices",
    subCategory: "Whole Spices",
    images: {
      cover: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    summary:
      "Premium Malabar black pepper, the 'King of Spices', with intense aroma and pungency from Kerala's Western Ghats plantations.",
    specs: {
      grade: "TGSEB/Malabar Garbled",
      keyParameters: {
        moisture: "12% max",
        purityOrActives: "Piperine 5-9%",
        defects: "Light berries <2%, Pinheads <2%",
        foreignMatter: "<1%",
        contaminants: "Aflatoxin <5 ppb",
      },
      compliance: {
        marketMRLs: ["EU", "US", "Japan", "Middle East"],
        gmo: "Non-GMO",
        allergens: "None",
      },
    },
    origin: { country: "India", region: "Kerala, Karnataka" },
    packaging: {
      options: ["25kg jute bags with inner liner", "50kg jute bags", "Retail packaging available"],
      palletization: true,
      containerLoadability: { "20ft": 12, "40ft": 14 },
    },
    trade: {
      moq: "5 Metric Tons",
      leadTime: "2-3 weeks from harvest season",
      incoterms: ["FOB Cochin", "CIF destination"],
      paymentTerms: ["LC at sight", "CAD", "TT payment"],
      inspection: "SGS/Intertek inspection at origin",
      documents: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Certificate of Origin",
        "Spices Board Certificate",
        "Phytosanitary Certificate",
        "Certificate of Analysis",
        "Fumigation Certificate",
      ],
    },
    certifications: [
      "Spices Board India",
      "FSSAI",
      "Rainforest Alliance",
      "Fair Trade Certified",
      "Organic (organic variant)",
    ],
    shelfLife: "36 months from packaging",
    storage: "Store in cool, dry place away from strong odors and direct sunlight",
    capabilities: { privateLabel: true, monthlyCapacityMT: 100, samples: "250g samples, 5-7 days" },
    pricing: {
      currency: "USD",
      basis: ["FOB", "CIF"],
      priceOnRequest: true,
      notes: "Premium pricing for high-grade Malabar pepper, subject to international market rates",
    },
    notes: "Seasonal availability (Dec-Feb harvest). Premium grades command higher prices. Organic variant available.",
  },
]

export const products = productsData.map(
  (data) =>
    new Product(
      data.id,
      data.name,
      data.hsCode,
      data.category,
      data.subCategory,
      data.images,
      data.summary,
      data.specs,
      data.origin,
      data.packaging,
      data.trade,
      data.certifications,
      data.shelfLife,
      data.storage,
      data.capabilities,
      data.pricing,
      data.notes,
    ),
)

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category)
}

export const getAllCategories = (): string[] => {
  return Array.from(new Set(products.map((product) => product.category)))
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.summary.toLowerCase().includes(lowercaseQuery) ||
      product.hsCode.includes(lowercaseQuery),
  )
}
