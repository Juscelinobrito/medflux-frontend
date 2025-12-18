export default function FinancialForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-3xl">
      <h2 className="text-lg font-semibold mb-4">Novo Lançamento</h2>

      <form className="grid grid-cols-2 gap-4">
        <input className="input col-span-2" placeholder="Descrição" />
        <input className="input" type="number" placeholder="Valor" />

        <select className="input">
          <option>PIX</option>
          <option>DINHEIRO</option>
          <option>CARTÃO</option>
          <option>TRANSFERÊNCIA</option>
        </select>

        <select className="input">
          <option>PENDING</option>
          <option>PAID</option>
          <option>CANCELED</option>
        </select>

        <input className="input col-span-2" type="date" />

        <button className="col-span-2 bg-blue-600 text-white py-2 rounded-lg">
          Salvar
        </button>
      </form>
    </div>
  );
}