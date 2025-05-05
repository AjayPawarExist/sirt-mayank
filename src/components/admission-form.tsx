"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, User, Phone, Mail, MapPin, GraduationCap, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { submitAdmissionForm, type AdmissionFormData } from "@/actions/admission"
import { toast } from "sonner"

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  state: z.string().min(2, {
    message: "Please select your state.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  course: z.string({
    required_error: "Please select a course.",
  }),
})

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const form = useForm<AdmissionFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      state: "",
      city: "",
      course: "",
    },
  })

  async function onSubmit(values: AdmissionFormData) {
    setIsSubmitting(true)
    setSubmissionError(null)

    try {
      const result = await submitAdmissionForm(values)

      if (result.success) {
        setIsSubmitted(true)
        toast("Application Submitted",{
          description: "We'll contact you shortly for counseling.",
        })
      } else {
        setSubmissionError(result.message || "Failed to submit form. Please try again.")

        // If there are field-specific errors, update the form
        if (result.errors) {
          result.errors.forEach((error) => {
            if (error.path) {
              form.setError(error.path[0] as keyof AdmissionFormData, {
              type: "server",
              message: error.message,
              })
            }
          })
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Alert className="bg-green-50 border-green-200 text-green-800">
        <Check className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-800 font-bold">Application Submitted!</AlertTitle>
        <AlertDescription className="text-green-700">
          Thank you for your interest in SIRT Bhopal. Our admission counselor will contact you shortly to guide you
          through the next steps.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 ">
      {submissionError && (
        <Alert className="mb-4 bg-red-50 border-red-200 text-red-800">
          <AlertTitle className="text-red-800 font-bold">Submission Error</AlertTitle>
          <AlertDescription className="text-red-700">{submissionError}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter your name" className="pl-10 bg-white" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="tel" placeholder="Mobile no." className="pl-10 bg-white" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="Enter your email" className="pl-10 bg-white" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">State</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Enter state" className="pl-10 bg-white" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">City</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Enter city" className="pl-10 bg-white" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Course</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <SelectTrigger className="pl-10 bg-white w-full" >
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </div>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="btech">B.Tech</SelectItem>
                    <SelectItem value="mtech">M.Tech</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="bca">BCA</SelectItem>
                    <SelectItem value="mca">MCA</SelectItem>
                    <SelectItem value="btech-lateral">B.Tech Lateral</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-bright-red hover:bg-bright-red/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Apply"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
