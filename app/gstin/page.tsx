"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Shield, CheckCircle } from "lucide-react"

export default function GSTINPage() {
  const [showPDF, setShowPDF] = useState(false)

  const certifications = [
    {
      title: "GSTIN Certificate",
      number: "27AABCA1234M1Z5",
      issueDate: "January 15, 2020",
      validUntil: "Valid until cancelled",
      status: "Active",
      description: "Goods and Services Tax Identification Number certificate issued by the Government of India.",
    },
    {
      title: "FSSAI License",
      number: "12345678901234",
      issueDate: "March 10, 2021",
      validUntil: "March 09, 2026",
      status: "Active",
      description: "Food Safety and Standards Authority of India license for food business operations.",
    },
    {
      title: "APEDA Registration",
      number: "APEDA/REG/2020/1234",
      issueDate: "February 20, 2020",
      validUntil: "February 19, 2025",
      status: "Active",
      description: "Agricultural and Processed Food Products Export Development Authority registration.",
    },
    {
      title: "IEC Certificate",
      number: "1234567890",
      issueDate: "January 05, 2020",
      validUntil: "Lifetime validity",
      status: "Active",
      description: "Import Export Code certificate issued by the Directorate General of Foreign Trade.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Certifications & Legal Documents
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            View our official certifications and legal documents that validate our compliance with Indian and
            international trade regulations.
          </p>
        </div>

        {/* GSTIN Certificate Viewer */}
        <div className="mb-8 sm:mb-12">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-green-800 text-lg sm:text-xl">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                GSTIN Certificate Viewer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 sm:mb-6 space-y-3 lg:space-y-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Goods and Services Tax Identification Number
                  </h3>
                  <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
                    Certificate Number: <span className="font-mono font-medium">27AABCA1234M1Z5</span>
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">Legal Entity: PARTHAJ ORCHARD Pvt. Ltd. Private Limited</p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-300 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Verified Active
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={() => setShowPDF(!showPDF)}
                  className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showPDF ? "Hide Certificate" : "View Certificate"}
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>

              {showPDF && (
                <div className="mt-4 sm:mt-6 border rounded-lg bg-white">
                  <div className="p-3 sm:p-4 bg-gray-50 border-b">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                      This is a placeholder for the actual GSTIN certificate PDF. In a real implementation, you would
                      use a library like react-pdf to display the actual certificate document.
                    </p>
                  </div>
                  <div className="p-6 sm:p-8 text-center bg-gray-100 min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                    <div>
                      <FileText className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                      <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">GSTIN Certificate</p>
                      <p className="text-xs sm:text-sm text-gray-500">Certificate Number: 27AABCA1234M1Z5</p>
                      <p className="text-xs sm:text-sm text-gray-500">PARTHAJ ORCHARD Pvt. Ltd. Private Limited</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* All Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <span className="flex items-center text-base sm:text-lg">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
                    {cert.title}
                  </span>
                  <Badge
                    variant={cert.status === "Active" ? "default" : "secondary"}
                    className="bg-green-100 text-green-800 text-xs sm:text-sm w-fit"
                  >
                    {cert.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Certificate Number:</span>
                    <p className="font-mono font-medium text-sm sm:text-base break-all">{cert.number}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <span className="text-xs sm:text-sm text-gray-500">Issue Date:</span>
                      <p className="font-medium text-sm sm:text-base">{cert.issueDate}</p>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-gray-500">Valid Until:</span>
                      <p className="font-medium text-sm sm:text-base">{cert.validUntil}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Description:</span>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm bg-transparent">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm bg-transparent">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Information */}
        <div className="mt-12 sm:mt-16 bg-blue-50 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Compliance & Quality Assurance</h2>
            <p className="text-blue-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              Our certifications ensure that we meet all regulatory requirements for agricultural exports from India. We
              maintain transparency and compliance at every level of our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Legal Compliance</h3>
              <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                All necessary licenses and registrations are maintained and regularly updated as per Indian regulations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Quality Standards</h3>
              <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                International quality certifications ensure our products meet global food safety standards.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Documentation</h3>
              <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                Complete documentation and certificates provided with every shipment for customs clearance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
