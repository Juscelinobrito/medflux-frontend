export interface ClinicSettings {
  id: string;
  name: string;
  cnpj?: string;
  phone?: string;
  email?: string;
  address?: string;
  logoUrl?: string;
  workingDays: string[];
  createdAt: string;
}