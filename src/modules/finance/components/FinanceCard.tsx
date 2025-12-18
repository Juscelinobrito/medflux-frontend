=========== início de código ============

interface Props {
  label: string;
  value: string;
}

export default function FinanceCard({ label, value }: Props) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

=========== fim de código ============
