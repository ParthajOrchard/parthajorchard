export interface ProductImages {
  cover: string
  gallery: string[]
}

export interface KeyParameters {
  moisture?: string
  purityOrActives?: string
  sizeOrLength?: string
  defects?: string
  microbiological?: string
  contaminants?: string
  foreignMatter?: string
  [key: string]: string | undefined
}

export interface ProductSpecs {
  grade: string
  keyParameters: KeyParameters
  compliance: {
    marketMRLs: string[]
    gmo: string
    allergens: string
  }
}

export interface ProductOrigin {
  country: string
  region: string
}

export interface ProductPackaging {
  options: string[]
  palletization: boolean
  containerLoadability: {
    "20ft": number
    "40ft": number
  }
}

export interface ProductTrade {
  moq: string
  leadTime: string
  incoterms: string[]
  paymentTerms: string[]
  inspection: string
  documents: string[]
}

export interface ProductCapabilities {
  privateLabel: boolean
  monthlyCapacityMT: number
  samples: string
}

export interface ProductPricing {
  currency: string
  basis: string[]
  priceOnRequest: boolean
  notes: string
}

export interface IProduct {
  id: string
  name: string
  hsCode: string
  category: string
  subCategory: string
  images: ProductImages
  summary: string
  specs: ProductSpecs
  origin: ProductOrigin
  packaging: ProductPackaging
  trade: ProductTrade
  certifications: string[]
  shelfLife: string
  storage: string
  capabilities: ProductCapabilities
  pricing: ProductPricing
  notes?: string
}

export class Product implements IProduct {
  constructor(
    public id: string,
    public name: string,
    public hsCode: string,
    public category: string,
    public subCategory: string,
    public images: ProductImages,
    public summary: string,
    public specs: ProductSpecs,
    public origin: ProductOrigin,
    public packaging: ProductPackaging,
    public trade: ProductTrade,
    public certifications: string[],
    public shelfLife: string,
    public storage: string,
    public capabilities: ProductCapabilities,
    public pricing: ProductPricing,
    public notes?: string,
  ) {}

  // Utility methods
  getDisplayPrice(): string {
    return this.pricing.priceOnRequest ? "Price on Request" : `Contact for Quote`
  }

  getMainImage(): string {
    return this.images.cover
  }

  getGalleryImages(): string[] {
    return this.images.gallery
  }

  getCertificationsList(): string {
    return this.certifications.join(", ")
  }

  getKeySpecs(): Array<{ label: string; value: string }> {
    return Object.entries(this.specs.keyParameters)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
        value: value!,
      }))
  }

  getStructuredData() {
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: this.name,
      description: this.summary,
      category: this.category,
      brand: {
        "@type": "Brand",
        name: "PARTHAJ ORCHARD Pvt. Ltd.",
      },
      manufacturer: {
        "@type": "Organization",
        name: "PARTHAJ ORCHARD Pvt. Ltd.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Maharashtra",
          addressLocality: "Mumbai",
        },
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: this.pricing.currency,
        price: "0",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: this.pricing.currency,
          valueAddedTaxIncluded: false,
        },
      },
      image: [this.images.cover, ...this.images.gallery],
      additionalProperty: this.getKeySpecs().map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    }
  }
}
