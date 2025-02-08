import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import App from "../App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
