=========== início de código ============

import { Patient } from "../types/Patient";

interface Props {
  patient: Patient;
}

export default function PatientRow({ patient }: Props) {
  return (
    <div className="card">
      <div className="card-content flex items-center justify-between">
        <div>
          <p className="font-semibold">
            {patient.name}
          </p>

          <p className="text-sm text-slate-500">
            CPF: {patient.cpf}
          </p>
        </div>

        <div className="text-sm text-slate-600">
          {patient.phone}
        </div>

        <button className="btn-secondary text-sm">
          Ver ficha
        </button>
      </div>
    </div>
  );
}

=========== fim de código ============
