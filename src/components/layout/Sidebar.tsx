=========== início de código ============

import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/", icon: "📊" },
  { label: "Agenda", path: "/agenda", icon: "📅" },
  { label: "Pacientes", path: "/patients", icon: "🧑‍⚕️" },
  { label: "Profissionais", path: "/professionals", icon: "👨‍⚕️" },
  { label: "Financeiro", path: "/finance", icon: "💰" },
  { label: "Relatórios", path: "/reports", icon: "📈" },
  { label: "Configurações", path: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 text-slate-100 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800">
        <span className="text-xl font-semibold">
          MedFlux
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-2 rounded-md text-sm
              transition-colors
              ${
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }
            `
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Rodapé */}
      <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
        © {new Date().getFullYear()} MedFlux
      </div>
    </aside>
  );
}

=========== fim de código ============
