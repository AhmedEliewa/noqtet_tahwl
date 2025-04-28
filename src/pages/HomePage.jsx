import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import schools from "../data/schoolsData";
import SchoolCard from "../components/SchoolCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Welcome from "./Welcome";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");

  // Ref for the school cards section
  const schoolCardsRef = useRef(null);

  const selectedGovernorate = searchParams.get("gov") || "";
  const selectedSpecialization = searchParams.get("spec") || "";
  const scrollToCards = searchParams.get("scrollToCards") === "true"; // Check if we need to scroll to the cards section

  const filteredSchools = schools.filter((school) => {
    return (
      school.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedGovernorate === "" ||
        school.governorate === selectedGovernorate) &&
      (selectedSpecialization === "" ||
        school.specialization.includes(selectedSpecialization))
    );
  });

  // Scroll to the school cards section when the page loads
  useEffect(() => {
    if (scrollToCards && schoolCardsRef.current) {
      schoolCardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToCards]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4"
    >
      <motion.div variants={cardVariants}>
        <Welcome />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Slider />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Header />
      </motion.div>

      <motion.div variants={cardVariants}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <FilterBar />
      </motion.div>

      {/* School Cards Section */}
      <motion.div
        variants={containerVariants}
        ref={schoolCardsRef} // Attach the ref here
        className="grid grid-cols-1 p-11 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {filteredSchools.map((school) => (
          <div key={school.id}>
            <SchoolCard school={school} />
          </div>
        ))}
      </motion.div>

      {filteredSchools.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 mt-10"
        >
          لا توجد مدارس مطابقة.
        </motion.p>
      )}

      <motion.div variants={cardVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
