import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white h-screen fixed">
      <div className="p-6 text-xl font-bold">
        MedFlux
      </div>

      <nav className="px-4 space-y-2">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/agenda"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <Calendar size={18} />
          Agenda
        </NavLink>

        <NavLink
          to="/users"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <Users size={18} />
          Usuários
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600 text-red-200"
        >
          <LogOut size={18} />
          Sair
        </NavLink>
      </nav>
    </aside>
  );
}
