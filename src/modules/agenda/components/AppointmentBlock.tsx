import { Appointment } from "../types/Appointment";

const statusColors = {
  SCHEDULED: "bg-blue-100 border-blue-500 text-blue-700",
  COMPLETED: "bg-green-100 border-green-500 text-green-700",
  CANCELED: "bg-red-100 border-red-500 text-red-700",
};

export default function AppointmentBlock({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <div
      className={`absolute left-14 right-4 rounded-md border-l-4 p-3 shadow-sm ${
        statusColors[appointment.status]
      }`}
    >
      <p className="font-medium">{appointment.patientName}</p>
      <p className="text-xs">{appointment.professionalName}</p>
      <p className="text-xs mt-1">{appointment.time}</p>
    </div>
  );
}
