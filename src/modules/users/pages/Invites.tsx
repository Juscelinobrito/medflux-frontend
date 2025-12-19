import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { Plus } from "lucide-react";
import { useAuth } from "../../auth/hooks/useAuth";

type Invite = {
  id: string;
  email: string;
  role: string;
  accepted: boolean;
  created_at: string;
};

export default function Invites() {
  const { clinicId } = useAuth();

  const [email, setEmail] = useState("");
  const [role, setRole] =
    useState<"ADMIN" | "PROFESSIONAL" | "RECEPTION">("PROFESSIONAL");
  const [invites, setInvites] = useState<Invite[]>([]);

  async function loadInvites() {
    const { data } = await supabase
      .from("clinic_invites")
      .select("*")
      .eq("clinic_id", clinicId)
      .order("created_at", { ascending: false });

    setInvites(data || []);
  }

  async function sendInvite() {
    if (!email) return;

    const token = crypto.randomUUID();

    const { error } = await supabase
      .from("clinic_invites")
      .insert({
        email,
        clinic_id: clinicId,
        role,
        token,
      });

    if (!error) {
      alert(
        `Convite criado!\nLink:\n/app/accept-invite/${token}`
      );
      setEmail("");
      setRole("PROFESSIONAL");
      loadInvites();
    }
  }

  useEffect(() => {
    loadInvites();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Convites de Usuários
      </h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value as any)
          }
          className="border rounded px-3 py-2"
        >
          <option value="ADMIN">Admin</option>
          <option value="PROFESSIONAL">Profissional</option>
          <option value="RECEPTION">Recepção</option>
        </select>

        <button
          onClick={sendInvite}
          className="bg-blue-600 text-white rounded px-4 py-2 flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={16} />
          Enviar convite
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Perfil</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invites.map((invite) => (
              <tr key={invite.id} className="border-t">
                <td className="p-4">{invite.email}</td>
                <td className="p-4">{invite.role}</td>
                <td className="p-4">
                  {invite.accepted ? "Aceito" : "Pendente"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}