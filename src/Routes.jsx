import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Design from "./pages/Design";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/design" element={<Design />} />
      <Route path="*" element={<h1 className="text-white">404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
