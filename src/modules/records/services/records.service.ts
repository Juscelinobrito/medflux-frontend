import { MedicalRecord } from "../types/MedicalRecord";

export async function getRecordsByPatient(patientId: string): Promise<MedicalRecord[]> {
  return [];
}

export async function createRecord(data: MedicalRecord): Promise<void> {
  console.log("Creating medical record", data);
}