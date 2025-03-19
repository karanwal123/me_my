import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import DynamicCursor from "./components/DynamicCursor";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#1B2C1C]">
      <DynamicCursor />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
