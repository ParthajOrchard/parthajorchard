import type { Metadata } from "next";
import type { Product } from "./types";

type ProductOpenGraph = {
  title: string;
  description: string;
  type: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://agriexportpro.com"),
  title: {
    default: "PARTHAJ ORCHARD Pvt. Ltd. - Premium Agricultural Products Export from India",
    template: "%s | PARTHAJ ORCHARD Pvt. Ltd.",
  },
  description:
    "Leading exporter of premium agricultural products including millets, spices, grains, and organic produce from India. Quality assured, globally delivered with FSSAI, APEDA certifications.",
  keywords: [
    "agricultural export India",
    "premium millets export",
    "Indian spices export",
    "basmati rice export",
    "turmeric powder export",
    "organic products export",
    "FSSAI certified exporter",
    "APEDA registered",
    "agricultural products supplier",
    "Indian food products export",
  ],
  authors: [{ name: "PARTHAJ ORCHARD Pvt. Ltd.", url: "https://agriexportpro.com" }],
  creator: "PARTHAJ ORCHARD Pvt. Ltd.",
  publisher: "PARTHAJ ORCHARD Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agriexportpro.com",
    siteName: "PARTHAJ ORCHARD Pvt. Ltd.",
    title: "PARTHAJ ORCHARD Pvt. Ltd. - Premium Agricultural Products Export from India",
    description:
      "Leading exporter of premium agricultural products including millets, spices, grains, and organic produce from India.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PARTHAJ ORCHARD Pvt. Ltd. - Premium Agricultural Products Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PARTHAJ ORCHARD Pvt. Ltd. - Premium Agricultural Products Export",
    description: "Leading exporter of premium agricultural products from India. Quality assured, globally delivered.",
    images: ["/images/twitter-image.jpg"],
    creator: "@agriexportpro",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://agriexportpro.com",
  },
};

export function generateProductMetadata(product: Product): Metadata {
  const title = `${product.name} - Premium ${product.category} Export from India`;
  const description = `${product.summary} HSN Code: ${product.hsCode}. Origin: ${product.origin.region}, India. MOQ: ${product.trade.moq}. Certified by ${product.certifications.join(", ")}.`;
  const openGraphData: ProductOpenGraph = {
    title,
    description,
    type: "website",
    images: [
      {
        url: product.images.cover,
        width: 800,
        height: 600,
        alt: product.name,
      },
      ...product.images.gallery.map((img) => ({
        url: img,
        width: 600,
        height: 400,
        alt: `${product.name} - Gallery Image`,
      })),
    ],
  };

  return {
    title,
    description,
    keywords: [
      product.name.toLowerCase(),
      product.category.toLowerCase(),
      product.subCategory.toLowerCase(),
      `${product.name} export`,
      `${product.category} export India`,
      `HSN ${product.hsCode}`,
      product.origin.region.toLowerCase(),
      ...product.certifications.map((cert) => cert.toLowerCase()),
      "agricultural export",
      "premium quality",
      "international shipping",
    ],
    openGraph: openGraphData,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.images.cover],
    },
    alternates: {
      canonical: `https://agriexportpro.com/products/${product.id}`,
    },
  };
}

export function generateCategoryMetadata(category: string, productCount: number): Metadata {
  const title = `${category} Export from India - Premium Quality Agricultural Products`;
  const description = `Explore our premium ${category.toLowerCase()} collection with ${productCount} products. Quality assured, internationally certified, and competitively priced for global markets.`;

  return {
    title,
    description,
    keywords: [
      `${category.toLowerCase()} export`,
      `Indian ${category.toLowerCase()}`,
      `premium ${category.toLowerCase()}`,
      `${category.toLowerCase()} supplier India`,
      "agricultural export",
      "quality certified",
      "international shipping",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
    alternates: {
      canonical: `https://agriexportpro.com/products?category=${encodeURIComponent(category)}`,
    },
  };
}