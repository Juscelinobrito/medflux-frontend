import { Routes, Route } from "react-router-dom";
import Login from "./modules/auth/pages/Login";
import Logout from "./modules/auth/pages/Logout";
import AcceptInvite from "./modules/auth/pages/AcceptInvite";
import Dashboard from "./modules/dashboard/pages/Dashboard";
import Agenda from "./modules/agenda/pages/Agenda";
import Users from "./modules/users/pages/Users";
import Invites from "./modules/users/pages/Invites";
import PrivateRoute from "./modules/auth/guards/PrivateRoute";
import AdminRoute from "./modules/auth/guards/AdminRoute";
import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/accept-invite/:token"
        element={<AcceptInvite />}
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/agenda"
        element={
          <PrivateRoute>
            <AppLayout>
              <Agenda />
            </AppLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/users"
        element={
          <AdminRoute>
            <AppLayout>
              <Users />
            </AppLayout>
          </AdminRoute>
        }
      />

      <Route
        path="/invites"
        element={
          <AdminRoute>
            <AppLayout>
              <Invites />
            </AppLayout>
          </AdminRoute>
        }
      />
    </Routes>
  );
}