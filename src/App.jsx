import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import DynamicCursor from "./components/DynamicCursor";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import BackgroundBeams from "./components/BackgroundBeams"; // Import Background Beams

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative bg-[#1B2C1C] overflow-hidden">
      <BackgroundBeams /> {/* Add Background Beams */}
      <DynamicCursor />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
