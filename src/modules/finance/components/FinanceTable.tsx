import { Finance } from "../types/Finance";

interface Props {
  data: Finance[];
}

export default function FinanceTable({ data }: Props) {
  return (
    <div className="card">
      <div className="card-content overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b">
              <th className="py-2">Descrição</th>
              <th>Data</th>
              <th>Status</th>
              <th className="text-right">Valor</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0"
              >
                <td className="py-2">
                  {item.description}
                </td>
                <td>{item.date}</td>
                <td>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded
                      ${
                        item.status === "PAID"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {item.status === "PAID"
                      ? "Pago"
                      : "Pendente"}
                  </span>
                </td>
                <td className="text-right font-medium">
                  R$ {item.value.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}