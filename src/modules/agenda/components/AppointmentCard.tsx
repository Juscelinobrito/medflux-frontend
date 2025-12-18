import { Appointment } from "../types/Appointment";
import { Clock } from "lucide-react";

const statusStyles = {
  SCHEDULED: "border-blue-500 bg-blue-50 text-blue-700",
  COMPLETED: "border-green-500 bg-green-50 text-green-700",
  CANCELED: "border-red-500 bg-red-50 text-red-700",
};

export default function AppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <div
      className={`card p-4 border-l-4 ${
        statusStyles[appointment.status]
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">{appointment.patientName}</p>
          <p className="text-sm text-slate-500">
            {appointment.professionalName}
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Clock size={14} />
          {appointment.time}
        </div>
      </div>
    </div>
  );
}
