"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  state: z.string().min(2, { message: "Please select your state." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  course: z.string({ required_error: "Please select a course." }),
})

export type AdmissionFormData = z.infer<typeof formSchema>

export async function submitAdmissionForm(formData: AdmissionFormData) {
  try {
    const validatedData = formSchema.parse(formData)

    const { name, phone, email, state, city, course } = validatedData

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 16px; background: #f9f9f9;">
        <h2 style="color: #333;">🎓 New Admission Form Submission</h2>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse; background: #fff; border: 1px solid #ddd;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">State</td><td style="padding: 8px;">${state}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">City</td><td style="padding: 8px;">${city}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Course</td><td style="padding: 8px;">${course}</td></tr>
        </table>
        <p style="margin-top: 16px; font-size: 0.9em; color: #555;">Sent automatically from the admission form system.</p>
      </div>
    `

    await resend.emails.send({
      from: "Admissions <no-reply@yourdomain.com>",
      to: ["admissions@yourdomain.com"], // 👈 Replace with your target email
      subject: "New Admission Form Submission",
      html: htmlContent,
    })

    return { success: true, message: "Form submitted and email sent successfully." }
  } catch (error) {
    console.error("Form submission error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Failed to submit form or send email. Please try again.",
    }
  }
}
