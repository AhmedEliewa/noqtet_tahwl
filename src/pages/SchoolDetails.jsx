import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import schools from "../data/schoolsData";
import { motion } from "framer-motion";

const SchoolDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const school = schools.find((s) => s.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!school) {
    return (
      <div className="text-center p-10 text-[#ef4444] font-bold">
        School not found
      </div>
    );
  }

  const handleBack = () => {
    navigate(`/?gov=${school.governorate}&scrollToCards=true`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl mx-auto p-6 mt-10 shadow-md rounded-lg text-center bg-[#053860] text-[#f1f5f9]"
    >
      <motion.div
        className="w-72 h-56 m-auto overflow-hidden mb-5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={school.image_url}
          alt={school.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl transition-all"
        />
      </motion.div>

      <motion.h1
        className="text-3xl text-[#48cae4] font-bold mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {school.name}
      </motion.h1>

      <p className="text-[#cbd5e1] mb-2">{school.description}</p>

      <div className="mt-4 space-y-2 text-[#cbd5e1]">
        <p>
          <strong className="text-[#f1f5f9]">المحافظة:</strong>{" "}
          {school.governorate}
        </p>

        {school.address && (
          <p>
            <strong className="text-[#f1f5f9]">العنوان:</strong>{" "}
            {school.address}
          </p>
        )}
        {school.phone && (
          <p>
            <strong className="text-[#f1f5f9]">رقم التليفون:</strong>{" "}
            {school.phone}
          </p>
        )}
        {school.specialization?.length > 0 && (
          <p>
            <strong className="text-[#f1f5f9]">التخصصات:</strong>{" "}
            {school.specialization.join(", ")}
          </p>
        )}
        {school.website && (
          <p>
            <strong className="text-[#f1f5f9]">لينك الفيسبوك:</strong>{" "}
            <a
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48cae4] underline mr-3"
            >
              {"..." + school.website.slice(0, 20)}
            </a>
          </p>
        )}
        {school.map_link && (
          <p>
            <strong className="text-[#f1f5f9]">العنوان:</strong>{" "}
            <a
              href={school.map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48cae4] underline"
            >
              عرض على خرائط جوجل
            </a>
          </p>
        )}
      </div>

      <motion.button
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 text-blue-400 text-lg font-semibold transition-all"
      >
        &larr; الرجوع إلى الصفحة السابقة
      </motion.button>
    </motion.div>
  );
};

export default SchoolDetails;
