import { CalendarDays, Users, DollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 flex items-center gap-4">
          <Users className="w-10 h-10 text-blue-600" />
          <div>
            <p className="card-header">Pacientes</p>
            <p className="card-value">124</p>
          </div>
        </div>

        <div className="card p-6 flex items-center gap-4">
          <CalendarDays className="w-10 h-10 text-sky-500" />
          <div>
            <p className="card-header">Consultas Hoje</p>
            <p className="card-value">18</p>
          </div>
        </div>

        <div className="card p-6 flex items-center gap-4">
          <DollarSign className="w-10 h-10 text-green-600" />
          <div>
            <p className="card-header">Faturamento</p>
            <p className="card-value">R$ 8.430</p>
          </div>
        </div>
      </div>
    </div>
  );
}
