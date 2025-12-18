import RecordsTimeline from "./RecordsTimeline";
import RecordForm from "./RecordForm";

export default function PatientRecordPage() {
  const patientId = "PATIENT_ID_FIXO_TEMP";

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Prontuário do Paciente
      </h1>

      <RecordsTimeline patientId={patientId} />
      <RecordForm />
    </div>
  );
}