import { useState } from "react";
import schools from "../data/schoolsData";
import SchoolCard from "../components/SchoolCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

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
    <div className="p-4">
      <Slider />
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <FilterBar
        selectedGovernorate={selectedGovernorate}
        setSelectedGovernorate={setSelectedGovernorate}
        selectedSpecialization={selectedSpecialization}
        setSelectedSpecialization={setSelectedSpecialization}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {filteredSchools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
      {filteredSchools.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No schools found.</p>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
