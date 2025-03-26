import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Life from "./pages/Life";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/design" element={<Design />} />
      <Route path="/tech-achievements" element={<Tech />} />
      <Route path="/life" element={<Life />} />
      <Route path="*" element={<h1 className="text-white">404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
