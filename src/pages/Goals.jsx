import React from "react";
import { motion } from "framer-motion";

const Goals = () => {
  // Define the staggered animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3, // Delay between each list item's appearance
      },
    },
  };

  return (
    <div className="text-white p-6 relative overflow-hidden">
      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row justify-between gap-8">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.ul
            className="space-y-6 text-lg font-semibold"
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "إبراز قصص النجاح للمدارس - المؤسسات - المصانع - الشركات - الطلاب والمؤثرين في مجالات التكنولوجيا النظيفة والاستدامة",
              "تطوير التعليم الفني الصناعي لربط الطلاب بالتكنولوجيا النظيفة",
              "تعزيز العمل اللائق ونمو الاقتصاد بتقنيات صناعية مستدامة",
              "دعم الابتكار الصناعي بالتكنولوجيا النظيفة لزيادة الكفاءة والاستدامة",
              "نشر ثقافة الإنتاج النظيف وتقليل الهدر الصناعي",
              "التوعية بدور التكنولوجيا النظيفة في خفض الانبعاثات وحماية البيئة",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Vertical Line */}
        <div className="hidden md:block w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 absolute inset-y-0 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="absolute top-0 bottom-0 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-blue-900 transform hover:scale-125 transition duration-300 ease-in-out"
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.ul
            className="space-y-6 text-lg font-semibold"
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "تمكين الشباب للمشاركة في مشروعات التنمية المستدامة",
              "إطلاق حملات توعية مبتكرة لزيادة وعي المجتمع بالتقنيات النظيفة",
              "تطوير التعليم الفني والتكنولوجي ليتماشى مع متطلبات السوق المستدام",
              "دعم ريادة الأعمال الخضراء وتشجيع المشروعات الصديقة للبيئة",
              "دعم المناطق والكيانات الغير مستدامة لتبني حلول الاستدامة والطاقة النظيفة وتحويلها لنماذج ملهمة",
              "تعزيز الشراكات المجتمعية لتحقيق أهداف التنمية المستدامة",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-blue-900 to-transparent rounded-full blur-xl opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-l from-blue-900 to-transparent rounded-full blur-xl opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Goals;
