import { Navigate, Route, Routes } from "react-router-dom";
import { PageDashboard } from "../Pages/PageDashboard";
import { PageLogin } from "../Pages/PageLogin";
import { PageRegister } from "../Pages/PageRegister";
import { ProtectRoutes } from "../Pages/ProtectRoutes";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/login" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={<PageDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
