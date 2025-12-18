import AppointmentCard from "./AppointmentCard";
import { Appointment } from "../types/Appointment";

export default function DaySchedule({
  date,
  appointments,
}: {
  date: string;
  appointments: Appointment[];
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        {new Date(date).toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        })}
      </h2>

      {appointments.length === 0 && (
        <div className="card p-6 text-slate-500 text-sm">
          Nenhuma consulta agendada
        </div>
      )}

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </div>
    </div>
  );
}
