import { Routes, Route } from "react-router-dom";
import App from "../App";
import Igsas from "../pages/Igsas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/igsas" element={<Igsas />} />
    </Routes>
  );
}
