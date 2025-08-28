import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { 
        name, 
        email, 
        company, 
        country, 
        countryCode, 
        phone, 
        subject, 
        message, 
        productInterest 
        } = body

        if (!name || !email || !country || !phone || !subject || !message) {
        return NextResponse.json(
            { message: 'Missing required fields' },
            { status: 400 }
        )
        }

        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        })

        const fullPhone = `${countryCode} ${phone}`
        const companyText = company ? `Company: ${company}` : ''
        const productText = productInterest ? `Product Interest: ${productInterest}` : ''

        const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #16a34a; margin-bottom: 10px;">New Contact Inquiry</h1>
                <p style="color: #6b7280; margin: 0;">From Partha J Orchard Pvt Ltd Website</p>
            </div>
            
            <div style="border-left: 4px solid #16a34a; padding-left: 20px; margin-bottom: 25px;">
                <h2 style="color: #374151; margin-bottom: 15px;">Contact Information</h2>
                <div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Name:</strong> 
                <span style="color: #6b7280;">${name}</span>
                </div>
                <div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Email:</strong> 
                <span style="color: #6b7280;">${email}</span>
                </div>
                <div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Phone:</strong> 
                <span style="color: #6b7280;">${fullPhone}</span>
                </div>
                <div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Country:</strong> 
                <span style="color: #6b7280;">${country}</span>
                </div>
                ${company ? `<div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Company:</strong> 
                <span style="color: #6b7280;">${company}</span>
                </div>` : ''}
                ${productInterest ? `<div style="margin-bottom: 12px;">
                <strong style="color: #374151;">Product Interest:</strong> 
                <span style="color: #6b7280;">${productInterest}</span>
                </div>` : ''}
            </div>
            
            <div style="border-left: 4px solid #16a34a; padding-left: 20px; margin-bottom: 25px;">
                <h2 style="color: #374151; margin-bottom: 15px;">Inquiry Details</h2>
                <div style="margin-bottom: 15px;">
                <strong style="color: #374151;">Subject:</strong> 
                <span style="color: #6b7280;">${subject}</span>
                </div>
                <div>
                <strong style="color: #374151;">Message:</strong>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; color: #374151;">${message}</div>
                </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                This inquiry was submitted on ${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'short'
                })} IST
                </p>
            </div>
            </div>
        </div>
        `

        const textContent = `
        New Contact Inquiry - Partha J Orchard Pvt Ltd
        
        Contact Information:
        Name: ${name}
        Email: ${email}
        Phone: ${fullPhone}
        Country: ${country}
        ${companyText}
        ${productText}
        
        Inquiry Details:
        Subject: ${subject}
        
        Message:
        ${message}
        
        Submitted on: ${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
        })} IST
        `

        const customerEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #16a34a; margin-bottom: 10px;">Thank You for Your Inquiry</h1>
                <p style="color: #6b7280; margin: 0;">Partha J Orchard Pvt Ltd</p>
            </div>
            
            <div style="margin-bottom: 25px;">
                <p style="color: #374151; line-height: 1.6;">Dear ${name},</p>
                <p style="color: #374151; line-height: 1.6;">
                Thank you for reaching out to Partha J Orchard Pvt Ltd. We have received your inquiry regarding "${subject}" and appreciate your interest in our premium agricultural export products.
                </p>
                <p style="color: #374151; line-height: 1.6;">
                Our export specialists will review your requirements and get back to you within 24 business hours with detailed information and competitive quotes.
                </p>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; border-left: 4px solid #16a34a; margin-bottom: 25px;">
                <h3 style="color: #16a34a; margin-top: 0; margin-bottom: 15px;">Your Inquiry Summary:</h3>
                <div style="margin-bottom: 10px;">
                <strong style="color: #374151;">Subject:</strong> 
                <span style="color: #6b7280;">${subject}</span>
                </div>
                <div style="margin-bottom: 10px;">
                <strong style="color: #374151;">Contact Phone:</strong> 
                <span style="color: #6b7280;">${fullPhone}</span>
                </div>
                ${productInterest ? `<div style="margin-bottom: 10px;">
                <strong style="color: #374151;">Product Interest:</strong> 
                <span style="color: #6b7280;">${productInterest}</span>
                </div>` : ''}
            </div>
            
            <div style="margin-bottom: 25px;">
                <h3 style="color: #374151; margin-bottom: 15px;">Contact Information:</h3>
                <p style="color: #6b7280; margin-bottom: 8px;">📍 Kasliwal Classic Phase-1, Flat No. 11, Tapdiyanagar, Aurangabad, Maharashtra - 431001, India</p>
                <p style="color: #6b7280; margin-bottom: 8px;">📞 +91 99213 20091</p>
                <p style="color: #6b7280; margin-bottom: 8px;">✉️ parthajorchardpvtltd@gmail.com</p>
                <p style="color: #6b7280; margin-bottom: 8px;">🕒 Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                This is an automated confirmation. Please do not reply to this email.
                </p>
            </div>
            </div>
        </div>
        `

        const customerEmailText = `
        Thank You for Your Inquiry - Partha J Orchard Pvt Ltd
        
        Dear ${name},
        
        Thank you for reaching out to Partha J Orchard Pvt Ltd. We have received your inquiry regarding "${subject}" and appreciate your interest in our premium agricultural export products.
        
        Our export specialists will review your requirements and get back to you within 24 business hours with detailed information and competitive quotes.
        
        Your Inquiry Summary:
        Subject: ${subject}
        Contact Phone: ${fullPhone}
        ${productText}
        
        Contact Information:
        Address: Kasliwal Classic Phase-1, Flat No. 11, Tapdiyanagar, Aurangabad, Maharashtra - 431001, India
        Phone: +91 99213 20091
        Email: parthajorchardpvtltd@gmail.com
        Business Hours: Monday - Saturday: 10:00 AM - 7:00 PM IST
        
        This is an automated confirmation. Please do not reply to this email.
        `

        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Contact Inquiry: ${subject}`,
        text: textContent,
        html: htmlContent,
        })

        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Thank you for your inquiry - Partha J Orchard Pvt Ltd`,
        text: customerEmailText,
        html: customerEmailHtml,
        })

        return NextResponse.json(
        { message: 'Inquiry sent successfully' },
        { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
        { message: 'Failed to send inquiry. Please try again later.' },
        { status: 500 }
        )
    }
}