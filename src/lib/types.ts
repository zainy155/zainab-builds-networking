export interface LeadFormData {
  name: string
  email: string
  businessTitle: string
  whatsappCountryCode: string
  whatsappNumber: string
}

export interface SubmitLeadResponse {
  success: boolean
  lead: { id: string } | null
  emailSent: boolean
  emailError: string | null
  error?: string
}
