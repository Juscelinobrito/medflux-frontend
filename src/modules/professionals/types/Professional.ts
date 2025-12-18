export interface Professional {
  id: string;
  fullName: string;
  specialty: string;
  documentType: "CRM" | "CREFITO" | "CRP" | "OUTRO";
  documentNumber: string;
  phone: string;
  email?: string;
  appointmentPrice?: number;
  active: boolean;
  createdAt: string;
}