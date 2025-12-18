export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <span className="text-sm text-slate-500">
        Sistema de Gestão Clínica
      </span>

      <div className="text-sm font-medium">
        Usuário Logado
      </div>
    </header>
  );
}
