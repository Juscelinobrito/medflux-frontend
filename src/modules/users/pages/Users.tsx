import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { Plus, Trash2 } from "lucide-react";
import { useAuth } from "../../auth/hooks/useAuth";

type ClinicUser = {
  id: string;
  user_id: string;
  role: "ADMIN" | "PROFESSIONAL" | "RECEPTION";
  created_at: string;
  user_email: string;
};

export default function Users() {
  const { clinicId } = useAuth();

  const [users, setUsers] = useState<ClinicUser[]>([]);
  const [email, setEmail] = useState("");
  const [role, setRole] =
    useState<"ADMIN" | "PROFESSIONAL" | "RECEPTION">("PROFESSIONAL");
  const [loading, setLoading] = useState(false);

  async function loadUsers() {
    const { data, error } = await supabase
      .from("clinic_users")
      .select(`
        id,
        user_id,
        role,
        created_at,
        users:auth.users(email)
      `)
      .eq("clinic_id", clinicId);

    if (error) {
      console.error(error);
      return;
    }

    const formatted =
      data?.map((item: any) => ({
        id: item.id,
        user_id: item.user_id,
        role: item.role,
        created_at: item.created_at,
        user_email: item.users?.email ?? "—",
      })) ?? [];

    setUsers(formatted);
  }

  async function addUser() {
    if (!email) return;

    setLoading(true);

    // 1️⃣ Busca usuário pelo email
    const { data: userData, error: userError } =
      await supabase.auth.admin.listUsers();

    if (userError) {
      alert("Erro ao buscar usuários");
      setLoading(false);
      return;
    }

    const user = userData.users.find(
      (u) => u.email === email
    );

    if (!user) {
      alert("Usuário não encontrado no Supabase Auth");
      setLoading(false);
      return;
    }

    // 2️⃣ Vincula à clínica
    const { error } = await supabase
      .from("clinic_users")
      .insert({
        user_id: user.id,
        clinic_id: clinicId,
        role,
      });

    if (error) {
      alert("Usuário já vinculado ou erro ao inserir");
    } else {
      setEmail("");
      setRole("PROFESSIONAL");
      loadUsers();
    }

    setLoading(false);
  }

  async function removeUser(id: string) {
    const confirm = window.confirm(
      "Tem certeza que deseja remover este usuário da clínica?"
    );

    if (!confirm) return;

    const { error } = await supabase
      .from("clinic_users")
      .delete()
      .eq("id", id);

    if (!error) {
      loadUsers();
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Usuários da Clínica
      </h1>

      {/* Formulário */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="email"
          placeholder="Email do usuário"
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
          onClick={addUser}
          disabled={loading}
          className="bg-blue-600 text-white rounded px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>

      {/* Lista */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Perfil</th>
              <th className="text-left p-4">Criado em</th>
              <th className="p-4 w-20"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t"
              >
                <td className="p-4">
                  {user.user_email}
                </td>
                <td className="p-4">
                  {user.role}
                </td>
                <td className="p-4">
                  {new Date(
                    user.created_at
                  ).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <button
                    onClick={() =>
                      removeUser(user.id)
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-slate-500"
                >
                  Nenhum usuário vinculado à clínica
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}