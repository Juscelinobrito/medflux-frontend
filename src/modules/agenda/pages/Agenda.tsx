import DayTimeline from "../components/DayTimeline";
import { Appointment } from "../types/Appointment";

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "João Silva",
    professionalName: "Dr. Carlos",
    date: "2025-01-20",
    time: "14:00",
    status: "SCHEDULED",
  },
  {
    id: "2",
    patientName: "Maria Oliveira",
    professionalName: "Dra. Ana",
    date: "2025-01-20",
    time: "15:00",
    status: "COMPLETED",
  },
  {
    id: "3",
    patientName: "Pedro Santos",
    professionalName: "Dr. Carlos",
    date: "2025-01-20",
    time: "16:00",
    status: "CANCELED",
  },
];

export default function Agenda() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Agenda</h1>

      <DayTimeline appointments={mockAppointments} />
    </div>
  );
}
