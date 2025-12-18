import PatientsList from "./pages/PatientsList";
import PatientForm from "./pages/PatientForm";
import PatientView from "./pages/PatientView";

export const patientsRoutes = [
  { path: "/patients", element: <PatientsList /> },
  { path: "/patients/new", element: <PatientForm /> },
  { path: "/patients/:id", element: <PatientView /> },
];