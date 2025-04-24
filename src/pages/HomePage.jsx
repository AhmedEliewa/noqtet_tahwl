// import { useState } from "react";
// import schools from "../data/schoolsData";
// import SchoolCard from "../components/SchoolCard";
// import FilterBar from "../components/FilterBar";
// import SearchBar from "../components/SearchBar";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Slider from "../components/Slider";

// const HomePage = () => {
//   const [searchText, setSearchText] = useState("");
//   const [selectedGovernorate, setSelectedGovernorate] = useState("");
//   const [selectedSpecialization, setSelectedSpecialization] = useState("");

//   const filteredSchools = schools.filter((school) => {
//     return (
//       school.name.toLowerCase().includes(searchText.toLowerCase()) &&
//       (selectedGovernorate === "" ||
//         school.governorate === selectedGovernorate) &&
//       (selectedSpecialization === "" ||
//         school.specialization.includes(selectedSpecialization))
//     );
//   });

//   return (
//     <div className="p-4">
//       <Slider />
//       <Header />
//       <SearchBar searchText={searchText} setSearchText={setSearchText} />
//       <FilterBar
//         selectedGovernorate={selectedGovernorate}
//         setSelectedGovernorate={setSelectedGovernorate}
//         selectedSpecialization={selectedSpecialization}
//         setSelectedSpecialization={setSelectedSpecialization}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
//         {filteredSchools.map((school) => (
//           <SchoolCard key={school.id} school={school} />
//         ))}
//       </div>
//       {filteredSchools.length === 0 && (
//         <p className="text-center text-gray-600 mt-10">No schools found.</p>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [searchText, setSearchText] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const filteredSchools = schools.filter((school) => {
    return (
      school.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedGovernorate === "" ||
        school.governorate === selectedGovernorate) &&
      (selectedSpecialization === "" ||
        school.specialization.includes(selectedSpecialization))
    );
  });

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
        <FilterBar
          selectedGovernorate={selectedGovernorate}
          setSelectedGovernorate={setSelectedGovernorate}
          selectedSpecialization={selectedSpecialization}
          setSelectedSpecialization={setSelectedSpecialization}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6"
      >
        {filteredSchools.map((school) => (
          <motion.div key={school.id} variants={cardVariants}>
            <SchoolCard school={school} />
          </motion.div>
        ))}
      </motion.div>

      {filteredSchools.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 mt-10"
        >
          No schools found.
        </motion.p>
      )}

      <motion.div variants={cardVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
