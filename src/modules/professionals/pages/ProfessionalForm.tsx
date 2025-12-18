export default function ProfessionalForm() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Novo Profissional</h1>

      <form className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
        <input className="input col-span-2" placeholder="Nome completo" />
        <input className="input" placeholder="Especialidade" />

        <select className="input">
          <option>CRM</option>
          <option>CREFITO</option>
          <option>CRP</option>
          <option>OUTRO</option>
        </select>

        <input className="input" placeholder="Número do registro" />
        <input className="input" placeholder="Telefone" />
        <input className="input col-span-2" placeholder="Email" />

        <input
          className="input col-span-2"
          placeholder="Valor da consulta (R$)"
          type="number"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-2 rounded-lg"
        >
          Salvar Profissional
        </button>
      </form>
    </div>
  );
}