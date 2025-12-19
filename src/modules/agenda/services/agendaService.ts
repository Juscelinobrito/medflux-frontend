import { supabase } from "../../../lib/supabase";
import { Appointment } from "../types/Appointment";

export async function getAppointments() {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("date", { ascending: true });

  if (error) throw error;
  return data as Appointment[];
}