export default function RecordForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Nova Evolução</h2>

      <textarea
        className="input w-full h-32"
        placeholder="Descreva a evolução clínica..."
      />

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Salvar Evolução
      </button>
    </div>
  );
}