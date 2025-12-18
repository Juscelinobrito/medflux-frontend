import { useEffect, useState } from "react";
import { getProfessionals } from "../services/professionals.service";
import { Professional } from "../types/Professional";

export default function ProfessionalsList() {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    getProfessionals().then(setProfessionals);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Profissionais</h1>

      <div className="bg-white rounded-xl shadow p-4">
        {professionals.length === 0 && (
          <p className="text-gray-500">Nenhum profissional cadastrado.</p>
        )}

        <ul className="divide-y">
          {professionals.map(p => (
            <li key={p.id} className="py-3 flex justify-between">
              <div>
                <p className="font-medium">{p.fullName}</p>
                <p className="text-sm text-gray-500">{p.specialty}</p>
              </div>
              <span className={p.active ? "text-green-600" : "text-red-500"}>
                {p.active ? "Ativo" : "Inativo"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}