import { ReactNode } from "react";
import { useClinic } from "@/app/providers/ClinicProvider";

type Role = "ADMIN" | "PROFESSIONAL" | "RECEPTION";

interface PermissionGuardProps {
  allowed: Role[];
  children: ReactNode;
}

export default function PermissionGuard({
  allowed,
  children,
}: PermissionGuardProps) {
  const { activeClinic } = useClinic();

  // Enquanto carrega a clínica ativa
  if (!activeClinic) {
    return (
      <div className="p-6 text-slate-500">
        Carregando permissões...
      </div>
    );
  }

  // Sem permissão
  if (!allowed.includes(activeClinic.role)) {
    return (
      <div className="p-6">
        <div className="card border-red-200 text-red-600">
          <p className="font-semibold">
            Acesso não autorizado
          </p>
          <p className="text-sm mt-2">
            Você não possui permissão para acessar esta área.
          </p>
        </div>
      </div>
    );
  }

  // Autorizado
  return <>{children}</>;
}