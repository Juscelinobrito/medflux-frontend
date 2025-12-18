export default function ClinicSettingsPage() {
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-4">Configurações da Clínica</h1>

      <form className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
        <input className="input col-span-2" placeholder="Nome da clínica" />
        <input className="input" placeholder="Telefone" />
        <input className="input" placeholder="Email" />
        <input className="input col-span-2" placeholder="Endereço" />

        <button className="col-span-2 bg-blue-600 text-white py-2 rounded-lg">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}