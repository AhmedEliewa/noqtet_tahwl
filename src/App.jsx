import Navbar from "./components/Navbar";

import About from "./pages/About";

import { Route, Routes } from "react-router";
import SchoolDetails from "./pages/SchoolDetails";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/school/:id" element={<SchoolDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
