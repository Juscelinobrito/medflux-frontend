import ProfessionalsList from "./pages/ProfessionalsList";
import ProfessionalForm from "./pages/ProfessionalForm";
import ProfessionalView from "./pages/ProfessionalView";

export const professionalsRoutes = [
  { path: "/professionals", element: <ProfessionalsList /> },
  { path: "/professionals/new", element: <ProfessionalForm /> },
  { path: "/professionals/:id", element: <ProfessionalView /> },
];