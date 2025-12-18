export type AppointmentStatus =
  | "SCHEDULED"
  | "COMPLETED"
  | "CANCELED";

export interface Appointment {
  id: string;
  patientName: string;
  professionalName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  status: AppointmentStatus;
}
