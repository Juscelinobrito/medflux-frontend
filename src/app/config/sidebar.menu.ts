import {
  Calendar,
  Users,
  UserCog,
  ClipboardList,
  Wallet,
  Settings,
  LayoutDashboard
} from "lucide-react";

export const sidebarMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Agenda",
    path: "/agenda",
    icon: Calendar
  },
  {
    label: "Pacientes",
    path: "/patients",
    icon: Users
  },
  {
    label: "Profissionais",
    path: "/professionals",
    icon: UserCog
  },
  {
    label: "Prontuário",
    path: "/records",
    icon: ClipboardList
  },
  {
    label: "Financeiro",
    path: "/financial",
    icon: Wallet
  },
  {
    label: "Configurações",
    path: "/settings/clinic",
    icon: Settings
  }
];