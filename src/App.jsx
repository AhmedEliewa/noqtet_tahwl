import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import SchoolDetails from "./pages/SchoolDetails";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Goals from "./pages/Goals";
import Mission from "./pages/Mission";
import Honors from "./pages/Honers";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Show for 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Variants for each line of text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };
  return (
    <div>
      {loading ? (
        <motion.div
          className="flex flex-col items-center justify-center h-screen rounded-xl shadow-2xl backdrop-blur-xl font-athelas"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center">
            {/* First line ("دليل") */}
            <motion.p
              className="text-white text-3xl md:text-5xl font- mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0 }} // Appears first
            >
              دليل
            </motion.p>

            {/* Second line ("المدارس الفنية والتكنولوجية") */}
            <motion.p
              className="text-white text-3xl md:text-4xl  mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }} // Appears after 0.3 seconds
            >
              المدارس الفنية والتكنولوجية
            </motion.p>

            {/* Third line ("في مصر") */}
            <motion.p
              className="text-white text-4xl md:text-5xl mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }} // Appears after 0.6 seconds
            >
              في مصر
            </motion.p>

            {/* Fourth line ("مع نقطه تحوّل") */}
            <motion.p
              className="text-white text-3xl md:text-4xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }} // Appears after 0.9 seconds
            >
              مع نقطة تحوّل
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/school/:id" element={<SchoolDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aims" element={<Goals />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/honors" element={<Honors />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
