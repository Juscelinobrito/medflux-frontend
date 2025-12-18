import ClinicSettingsPage from "./pages/ClinicSettingsPage";
import UsersSettingsPage from "./pages/UsersSettingsPage";

export const settingsRoutes = [
  { path: "/settings/clinic", element: <ClinicSettingsPage /> },
  { path: "/settings/users", element: <UsersSettingsPage /> }
];