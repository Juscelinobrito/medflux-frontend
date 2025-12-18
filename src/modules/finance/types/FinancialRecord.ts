=========== início de código ============

export type FinancialType = "INCOME" | "EXPENSE";

export type FinancialRecord = {
  id: string;
  description: string;
  amount: number;
  type: FinancialType;
  created_at: string;
};

=========== fim de código ============
