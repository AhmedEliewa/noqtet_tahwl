// import React from "react";

// const Mission = () => {
//   return (
//     <div className="bg-primary min-h-screen text-white p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Vision Card */}
//         <div className="relative bg-primary bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-md overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
//           <div className="relative z-10">
//             <h2 className="text-accent text-xl font-bold mb-4">الرؤية</h2>
//             <p className="text-gray-300 leading-loose">
//               "إحداث نقلة نوعية في مستقبل مصر من خلال تمكين الأجيال القادمة
//               بالتكنولوجيا النظيفة والصناعات المستدامة، لبناء اقتصاد أخضر يحقق
//               التوازن بين البيئة والتنمية ويعزز ريادة مصر في تحقيق أهداف
//               الاستدامة العالمية."
//             </p>
//           </div>
//         </div>

//         {/* Mission Card */}
//         <div className="relative bg-primary bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-md overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
//           <div className="relative z-10">
//             <h2 className="text-accent text-xl font-bold mb-4">الرسالة</h2>
//             <p className="text-gray-300 leading-loose">
//               "قيادة التحول نحو مستدام من خلال دمج التعليم، التكنولوجيا النظيفة،
//               والابتكار الصناعي. نسعى لإحداث تغيير ملموس في وعي الشباب والمجتمع،
//               وبناء أجيال قادرة على تحقيق التوازن بين التطور البيئي والصناعي،
//               بما يواكب أهداف التنمية المستدامة ورؤية مصر 2030."
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer className="mt-8 border-t border-highlight pt-4 flex justify-between items-center">
//         <div className="flex space-x-2">
//           {[...Array(3)].map((_, index) => (
//             <span
//               key={index}
//               className="w-4 h-4 bg-highlight rounded-full animate-pulse"
//             ></span>
//           ))}
//         </div>

//         <div className="flex space-x-2">
//           {[...Array(3)].map((_, index) => (
//             <span
//               key={index}
//               className="w-4 h-4 bg-highlight rounded-full animate-pulse"
//             ></span>
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Mission;

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Mission = () => {
  return (
    <div className="bg-[#053860] min-h-screen text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <motion.div
          className="relative bg-[#053860]/60 backdrop-blur-lg rounded-lg p-6 shadow-md overflow-hidden"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5b95d4] to-transparent opacity-20 rounded-lg" />
          <div className="relative z-10">
            <h2 className="text-[#f9d71c] text-xl font-bold mb-4">الرؤية</h2>
            <p className="text-gray-300 leading-loose">
              "إحداث نقلة نوعية في مستقبل مصر من خلال تمكين الأجيال القادمة
              بالتكنولوجيا النظيفة والصناعات المستدامة، لبناء اقتصاد أخضر يحقق
              التوازن بين البيئة والتنمية ويعزز ريادة مصر في تحقيق أهداف
              الاستدامة العالمية."
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="relative bg-[#053860]/60 backdrop-blur-lg rounded-lg p-6 shadow-md overflow-hidden"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#9bbce6] to-transparent opacity-20 rounded-lg" />
          <div className="relative z-10">
            <h2 className="text-[#f9d71c] text-xl font-bold mb-4">الرسالة</h2>
            <p className="text-gray-300 leading-loose">
              "قيادة التحول نحو مستدام من خلال دمج التعليم، التكنولوجيا النظيفة،
              والابتكار الصناعي. نسعى لإحداث تغيير ملموس في وعي الشباب والمجتمع،
              وبناء أجيال قادرة على تحقيق التوازن بين التطور البيئي والصناعي،
              بما يواكب أهداف التنمية المستدامة ورؤية مصر 2030."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#9bbce6] pt-4 flex justify-between items-center">
        {[...Array(2)].map((_, groupIndex) => (
          <div className="flex space-x-2" key={groupIndex}>
            {[...Array(3)].map((_, dotIndex) => (
              <motion.span
                key={dotIndex}
                className="w-4 h-4 bg-[#f9d71c] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dotIndex * 0.2,
                }}
              />
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Mission;
