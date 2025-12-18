import { useEffect, useState } from "react";
import { getRecordsByPatient } from "../services/records.service";
import { MedicalRecord } from "../types/MedicalRecord";

interface Props {
  patientId: string;
}

export default function RecordsTimeline({ patientId }: Props) {
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    if (patientId) {
      getRecordsByPatient(patientId).then(setRecords);
    }
  }, [patientId]);

  return (
    <div className="space-y-4">
      {records.length === 0 && (
        <p className="text-gray-500">Nenhuma evolução registrada.</p>
      )}

      {records.map(record => (
        <div
          key={record.id}
          className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-600"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{record.professionalName}</span>
            <span className="text-sm text-gray-400">
              {new Date(record.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700 whitespace-pre-line">
            {record.notes}
          </p>
        </div>
      ))}
    </div>
  );
}