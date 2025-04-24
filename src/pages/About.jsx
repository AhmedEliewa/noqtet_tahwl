import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto my-12 px-6 py-12 shadow-xl rounded-2xl bg-[#053860] text-[#f1f5f9]"
  >
    <h1 className="text-4xl font-extrabold text-[#48cae4] mb-6 border-b-4 border-[#46c2cb] inline-block pb-2 text-center w-full">
      نبذة مختصرة
    </h1>

    <p className="text-lg leading-loose tracking-wide text-center text-[#cbd5e1]">
      <span className="text-[#5eead4] font-semibold">
        مبـادرة نُقـطـة تَحـوُّل:
      </span>{" "}
      تهدف لنشر الوعي في المجتمع بأهمية التكنولوجيا النظيفة، والجمع بشكل أساسي
      بين{" "}
      <span className="text-[#7dd3fc] font-medium">
        البيئة - الصناعه - التعليم الفني والتكنولوجي
      </span>{" "}
      لتحقيق الإستدامة
      <span className="text-[#22d3ee] font-bold"> [رؤية مصر 2030]</span>.
      <br />
      <span className="text-[#38bdf8] font-semibold block mt-4">
        #تعليم_يُغيـر_استدامة_تُعمـر
      </span>
    </p>
  </motion.div>
);

export default About;
