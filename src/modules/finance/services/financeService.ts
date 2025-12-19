import { supabase } from "../../../lib/supabase";
import { Finance } from "../types/Finance";

export async function getFinanceData() {
  const { data, error } = await supabase
    .from("finance")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw error;
  return data as Finance[];
}