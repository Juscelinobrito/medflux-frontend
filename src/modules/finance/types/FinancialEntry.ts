export type FinancialStatus = "PENDING" | "PAID" | "CANCELED";

export interface FinancialEntry {
  id: string;
  clinicId: string;
  patientId?: string;
  professionalId?: string;
  description: string;
  amount: number;
  paymentMethod: "PIX" | "CASH" | "CARD" | "TRANSFER";
  status: FinancialStatus;
  dueDate: string;
  paidAt?: string;
  createdAt: string;
}