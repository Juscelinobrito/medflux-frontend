import { FinancialEntry } from "../types/FinancialEntry";

export async function getFinancialEntries(): Promise<FinancialEntry[]> {
  return [];
}

export async function createFinancialEntry(data: FinancialEntry): Promise<void> {
  console.log("Creating financial entry", data);
}

export async function updateFinancialStatus(
  id: string,
  status: FinancialEntry["status"]
): Promise<void> {
  console.log("Updating status", id, status);
}