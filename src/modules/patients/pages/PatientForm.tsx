=========== início de código ============

export default function PatientForm() {
  return (
    <div className="p-6 max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold">
        Cadastro de Paciente
      </h1>

      <div className="card">
        <div className="card-content grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input"
            placeholder="Nome completo"
          />

          <input
            className="input"
            placeholder="CPF"
          />

          <input
            className="input"
            placeholder="Telefone"
          />

          <input
            className="input"
            placeholder="E-mail"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn-primary">
          Salvar Paciente
        </button>
      </div>
    </div>
  );
}

=========== fim de código ============
