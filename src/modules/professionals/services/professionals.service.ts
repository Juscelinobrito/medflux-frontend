import { Professional } from "../types/Professional";

export async function getProfessionals(): Promise<Professional[]> {
  return [];
}

export async function getProfessionalById(id: string): Promise<Professional | null> {
  return null;
}

export async function createProfessional(data: Professional): Promise<void> {
  console.log("Creating professional", data);
}

export async function updateProfessional(id: string, data: Professional): Promise<void> {
  console.log("Updating professional", id, data);
}