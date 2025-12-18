import FinancialDashboard from "./pages/FinancialDashboard";
import FinancialForm from "./pages/FinancialForm";

export const financialRoutes = [
  { path: "/financial", element: <FinancialDashboard /> },
  { path: "/financial/new", element: <FinancialForm /> }
];