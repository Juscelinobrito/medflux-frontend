import PatientRecordPage from "./pages/PatientRecordPage";

export const recordsRoutes = [
  {
    path: "/patients/:id/records",
    element: <PatientRecordPage />
  }
];