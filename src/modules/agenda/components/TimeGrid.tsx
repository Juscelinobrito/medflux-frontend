=========== início de código ============

import TimeBlock from "./TimeBlock";

const hours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function TimeGrid() {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="text-sm font-semibold mb-4">
          Horários disponíveis
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {hours.map((hour) => (
            <TimeBlock
              key={hour}
              time={hour}
              isBooked={hour === "14:00"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

=========== fim de código ============
