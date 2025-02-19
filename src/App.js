import { Routes, Route } from "react-router-dom";
import Igsas from "./pages/Igsas";
import Framework from "./pages/Framework";
import ZeroTwo from "./pages/ZeroTwo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Igsas />} />
      <Route path="/igsas" element={<Igsas />} />
      <Route path="/framework" element={<Framework />} />
      <Route path="/zero-two" element={<ZeroTwo />} />
    </Routes>
  );
}
