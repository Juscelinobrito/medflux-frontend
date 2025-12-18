=========== início de código ============

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FinancialRecord } from "../types/FinancialRecord";
import { useAuth } from "../../auth/hooks/useAuth";

export default function Finance() {
  const { clinicId } = useAuth();

  const [records, setRecords] =
    useState<FinancialRecord[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] =
    useState<"INCOME" | "EXPENSE">("INCOME");

  async function loadRecords() {
    const { data } = await supabase
      .from("financial_records")
      .select("*")
      .eq("clinic_id", clinicId)
      .order("created_at", { ascending: false });

    setRecords(data || []);
  }

  async function addRecord() {
    if (!description || !amount) return;

    await supabase.from("financial_records").insert({
      clinic_id: clinicId,
      description,
      amount: Number(amount),
      type,
    });

    setDescription("");
    setAmount("");
    setType("INCOME");
    loadRecords();
  }

  const totalIncome = records
    .filter((r) => r.type === "INCOME")
    .reduce((acc, r) => acc + r.amount, 0);

  const totalExpense = records
    .filter((r) => r.type === "EXPENSE")
    .reduce((acc, r) => acc + r.amount, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Financeiro
      </h1>

      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Receitas</p>
          <strong className="text-2xl text-green-600">
            R$ {totalIncome.toFixed(2)}
          </strong>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Despesas</p>
          <strong className="text-2xl text-red-600">
            R$ {totalExpense.toFixed(2)}
          </strong>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Saldo</p>
          <strong className="text-2xl">
            R$ {(totalIncome - totalExpense).toFixed(2)}
          </strong>
        </div>
      </div>

      {/* Novo lançamento */}
      <div className="bg-white p-6 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as any)
          }
          className="border rounded px-3 py-2"
        >
          <option value="INCOME">Receita</option>
          <option value="EXPENSE">Despesa</option>
        </select>

        <button
          onClick={addRecord}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      {/* Lista */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Descrição</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Valor</th>
              <th className="p-4 text-left">Data</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-4">{r.description}</td>
                <td className="p-4">
                  {r.type === "INCOME"
                    ? "Receita"
                    : "Despesa"}
                </td>
                <td className="p-4">
                  R$ {r.amount.toFixed(2)}
                </td>
                <td className="p-4">
                  {new Date(
                    r.created_at
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

=========== fim de código ============
