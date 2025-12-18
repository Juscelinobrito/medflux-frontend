import { Patient } from "../types/Patient";

export async function getPatients(): Promise<Patient[]> {
  // futura integração com backend
  return [];
}

export async function getPatientById(id: string): Promise<Patient | null> {
  return null;
}

export async function createPatient(data: Patient): Promise<void> {
  console.log("Creating patient", data);
}

export async function updatePatient(id: string, data: Patient): Promise<void> {
  console.log("Updating patient", id, data);
}