import FinanceCard from "../components/FinanceCard";
import FinanceTable from "../components/FinanceTable";
import { Finance } from "../types/Finance";

const mockFinance: Finance[] = [
  {
    id: "1",
    description: "Consulta - João Silva",
    value: 150,
    date: "20/01/2025",
    status: "PAID",
  },
  {
    id: "2",
    description: "Consulta - Maria Oliveira",
    value: 200,
    date: "20/01/2025",
    status: "PENDING",
  },
];

export default function FinanceDashboard() {
  const total = mockFinance.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const paid = mockFinance
    .filter((i) => i.status === "PAID")
    .reduce((sum, i) => sum + i.value, 0);

  const pending = total - paid;

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Financeiro
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FinanceCard
          label="Faturamento Total"
          value={`R$ ${total.toFixed(2)}`}
        />

        <FinanceCard
          label="Recebido"
          value={`R$ ${paid.toFixed(2)}`}
        />

        <FinanceCard
          label="Pendente"
          value={`R$ ${pending.toFixed(2)}`}
        />
      </div>

      {/* Tabela */}
      <FinanceTable data={mockFinance} />
    </div>
  );
}