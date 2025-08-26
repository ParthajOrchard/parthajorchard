"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Shield, CheckCircle, LucideIcon } from "lucide-react"

// Define the type for our theme keys to ensure type safety
type Theme = "green" | "blue" | "purple" | "gray";

// Define the structure for a certificate object
interface Certificate {
  title: string;
  number: string;
  details: string;
  legalEntity: string;
  pdfPath: string;
  theme: Theme;
  icon: LucideIcon;
}

export default function CertificationsPage() {
  const [pdfToShow, setPdfToShow] = useState<string | null>(null)
  const handleViewClick = (pdfPath: string) => {
    setPdfToShow(prevPdfToShow => (prevPdfToShow === pdfPath ? null : pdfPath))
  }

  const certificates: Certificate[] = [
    {
      title: "GSTIN Certificate",
      number: "27AAOCP5210C1ZN",
      details: "Goods and Services Tax Identification Number",
      legalEntity: "PARTHAJ ORCHARD PRIVATE LIMITED",
      pdfPath: "/certificates/gstin.pdf",
      theme: "green",
      icon: FileText,
    },
    {
      title: "APEDA Registration",
      number: "RCMC/APEDA/08297/2024-2025",
      details: "Agricultural and Processed Food Products Export Development Authority",
      legalEntity: "PARTHAJ ORCHARD PRIVATE LIMITED",
      pdfPath: "/certificates/apeda.pdf",
      theme: "blue",
      icon: Shield,
    },
    {
      title: "Import Export Code (IEC)",
      number: "AAOCP5210C",
      details: "Importer-Exporter Code by Directorate General of Foreign Trade",
      legalEntity: "PARTHAJ ORCHARD PRIVATE LIMITED",
      pdfPath: "/certificates/ice.pdf",
      theme: "purple",
      icon: Shield,
    },
    {
      title: "Certificate of Incorporation",
      number: "U46209PN2024PTC228632",
      details: "Corporate Identity Number (CIN)",
      legalEntity: "PARTHAJ ORCHARD PRIVATE LIMITED",
      pdfPath: "/certificates/co.pdf",
      theme: "gray",
      icon: FileText,
    },
  ]

  const themeClasses: Record<Theme, { border: string; bg: string; text: string; badge: string }> = {
    green: {
      border: "border-green-200",
      bg: "bg-green-50",
      text: "text-green-800",
      badge: "bg-green-100 text-green-800 border-green-300",
    },
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      text: "text-blue-800",
      badge: "bg-blue-100 text-blue-800 border-blue-300",
    },
    purple: {
      border: "border-purple-200",
      bg: "bg-purple-50",
      text: "text-purple-800",
      badge: "bg-purple-100 text-purple-800 border-purple-300",
    },
    gray: {
      border: "border-gray-200",
      bg: "bg-gray-50",
      text: "text-gray-800",
      badge: "bg-gray-100 text-gray-800 border-gray-300",
    },
  };

  return (
    <div className="min-h-screen bg-[rgb(249,250,251)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Legal Documents
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            View and download our official certifications that validate our compliance with all national and international trade regulations.
          </p>
        </div>

        {/* Grid for Certificate Cards */}
        <div className="space-y-8">
          {certificates.map((cert) => {
            // Dynamically select the theme and icon for the current certificate
            const currentTheme = themeClasses[cert.theme];
            const Icon = cert.icon;
            
            return (
              <Card key={cert.title} className={`transition-shadow hover:shadow-md ${currentTheme.border}`}>
                <CardHeader className={currentTheme.bg}>
                  <CardTitle className={`flex items-center text-lg sm:text-xl ${currentTheme.text}`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                    {cert.title} Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        {cert.details}
                      </h3>
                      <p className="text-gray-600 mb-1 text-sm sm:text-base">
                        Certificate Number: <span className="font-mono font-medium text-gray-900">{cert.number}</span>
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Legal Entity: {cert.legalEntity}
                      </p>
                    </div>
                    <Badge className={`self-start lg:self-center text-xs sm:text-sm ${currentTheme.badge}`}>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
                      Verified Active
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleViewClick(cert.pdfPath)}
                      className="flex items-center justify-center w-full sm:w-auto text-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {pdfToShow === cert.pdfPath ? "Hide Certificate" : "View Certificate"}
                    </Button>
                    <a href={cert.pdfPath} download className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center w-full bg-transparent text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>

                  {/* Conditionally render the PDF viewer */}
                  {pdfToShow === cert.pdfPath && (
                    <div className="mt-6 border rounded-lg overflow-hidden">
                      <iframe
                        src={cert.pdfPath}
                        width="100%"
                        height="600px"
                        className="border-0"
                        title={`${cert.title} PDF Viewer`}
                      ></iframe>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  )
}
