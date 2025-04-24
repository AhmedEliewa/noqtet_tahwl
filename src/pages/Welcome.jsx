import { motion } from "framer-motion";
const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-20 bg-[#053860] text-[#f1f5f9] py-16 px-6 rounded-xl shadow-lg text-center max-w-3xl mx-auto mt-10"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#48cae4] mb-4">
        أهلاً وسهلاً بكم
      </h1>
      <p className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed">
        نُرحب بكم في مبادرة{" "}
        <span className="text-[#5eead4] font-semibold">نُقطة تحوُّل</span>، حيث
        نُؤمن أن{" "}
        <span className="text-[#7dd3fc] font-medium">
          التعليم، التكنولوجيا، والبيئة
        </span>{" "}
        يشكلون معًا مسارًا حقيقيًا نحو مستقبلٍ مستدام.
        <br className="hidden md:block" />
        نتمنى لكم تجربة مفيدة وملهمة!
      </p>
    </motion.div>
  );
};
export default Welcome;
