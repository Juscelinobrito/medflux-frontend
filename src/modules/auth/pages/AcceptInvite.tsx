import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";

export default function AcceptInvite() {
  const { token } = useParams();
  const navigate = useNavigate();

  async function accept() {
    const { data: invite } = await supabase
      .from("clinic_invites")
      .select("*")
      .eq("token", token)
      .single();

    if (!invite || invite.accepted) {
      alert("Convite inválido ou já utilizado");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Faça login primeiro");
      navigate("/login");
      return;
    }

    await supabase.from("clinic_users").insert({
      user_id: user.id,
      clinic_id: invite.clinic_id,
      role: invite.role,
    });

    await supabase
      .from("clinic_invites")
      .update({ accepted: true })
      .eq("id", invite.id);

    navigate("/");
  }

  useEffect(() => {
    accept();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>Aceitando convite...</p>
    </div>
  );
}