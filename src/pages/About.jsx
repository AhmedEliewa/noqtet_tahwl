// import { motion } from "framer-motion";

// const About = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="max-w-4xl mx-auto my-12 px-6 py-12 shadow-xl rounded-2xl bg-[#053860] text-[#f1f5f9]"
//   >
//     <h1 className="text-4xl font-extrabold text-[#48cae4] mb-6 border-b-4 border-[#46c2cb] inline-block pb-2 text-center w-full">
//       نبذة مختصرة
//     </h1>

//     <p className="text-lg leading-loose tracking-wide text-center text-[#cbd5e1]">
//       <span className="text-[#5eead4] font-semibold">
//         مبـادرة نُقـطـة تَحـوُّل:
//       </span>{" "}
//       تهدف لنشر الوعي في المجتمع بأهمية التكنولوجيا النظيفة، والجمع بشكل أساسي
//       بين{" "}
//       <span className="text-[#7dd3fc] font-medium">
//         البيئة - الصناعه - التعليم الفني والتكنولوجي
//       </span>{" "}
//       لتحقيق الإستدامة
//       <span className="text-[#22d3ee] font-bold"> [رؤية مصر 2030]</span>.
//       <br />
//       <span className="text-[#38bdf8] font-semibold block mt-4">
//         #تعليم_يُغيـر_استدامة_تُعمـر
//       </span>
//     </p>
//   </motion.div>
// );

// export default About;
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto my-12 px-6 py-12 shadow-xl rounded-2xl bg-[#053860] text-[#f1f5f9]"
  >
    <h1 className="text-4xl font-extrabold text-[#48cae4] mb-6 border-b-4 border-[#46c2cb] inline-block pb-2 text-center w-full">
      نُقطة تَحوُّل
    </h1>

    <p className="text-lg leading-loose tracking-wide text-center text-[#cbd5e1]">
      <span className="text-[#5eead4] font-semibold">
        تعليم يُغيِّر استدامة تُعمِّر
      </span>
      <br />

      <span className="block text-[#cbd5e1] mt-4">
        هي مبادرة توعوية تهدف إلى تعزيز الوعي بالتكنولوجيا النظيفة ودمجها في
        التعليم الفني والصناعة. المبادرة تستهدف طلاب المدارس الفنية والمصانع
        والشركات الصناعية، لتمكينهم من تطبيق الابتكار التكنولوجي المستدام في
        المجالات الصناعية، مما يسهم في خلق بيئة عمل أكثر استدامة وكفاءة، ويساعد
        في تحقيق التنمية المستدامة ورؤية مصر 2030.
      </span>
    </p>

    <div className="mt-6 text-center">
      <span className="text-[#22d3ee] font-bold text-lg">رؤية مصر 2030</span>
    </div>
  </motion.div>
);

export default About;
