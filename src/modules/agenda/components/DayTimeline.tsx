import TimeSlot from "./TimeSlot";
import AppointmentBlock from "./AppointmentBlock";
import { Appointment } from "../types/Appointment";

const HOURS = Array.from({ length: 11 }, (_, i) => `${8 + i}:00`);

export default function DayTimeline({
  appointments,
}: {
  appointments: Appointment[];
}) {
  return (
    <div className="relative border rounded-md overflow-hidden">
      {HOURS.map((hour) => (
        <div key={hour} className="relative">
          <TimeSlot time={hour} />

          {appointments
            .filter((a) => a.time.startsWith(hour.split(":")[0]))
            .map((appointment) => (
              <AppointmentBlock
                key={appointment.id}
                appointment={appointment}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
