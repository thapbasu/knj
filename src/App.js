import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./pages/About";
import Offerings from "./pages/Offering";
function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/offerings" element={<Offerings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
