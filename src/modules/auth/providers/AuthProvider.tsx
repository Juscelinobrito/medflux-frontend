import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

interface AuthContextData {
  user: {
    id: string;
    email: string;
    role: "admin" | "professional" | "reception";
  } | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContextData["user"]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        // ⚠️ Temporário até integrar clinic_users
        setUser({
          id: data.session.user.id,
          email: data.session.user.email ?? "",
          role: "admin", // mock inicial
        });
      }

      setLoading(false);
    };

    getSession();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
