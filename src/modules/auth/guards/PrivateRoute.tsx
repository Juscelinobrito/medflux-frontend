import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function PrivateRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="p-6">Carregando...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}