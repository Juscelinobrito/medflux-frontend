=========== início de código ============

import PatientRow from "../components/PatientRow";
import { Patient } from "../types/Patient";

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "João Silva",
    cpf: "123.456.789-00",
    phone: "(11) 99999-0000",
    email: "joao@email.com",
  },
  {
    id: "2",
    name: "Maria Oliveira",
    cpf: "987.654.321-00",
    phone: "(11) 98888-1111",
    email: "maria@email.com",
  },
];

export default function PatientsList() {
  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Pacientes
        </h1>

        <button className="btn-primary">
          Novo Paciente
        </button>
      </div>

      {/* Lista */}
      <div className="space-y-4">
        {mockPatients.map((patient) => (
          <PatientRow
            key={patient.id}
            patient={patient}
          />
        ))}
      </div>
    </div>
  );
}

=========== fim de código ============
