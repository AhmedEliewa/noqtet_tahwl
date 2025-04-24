import { Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-[#053860] text-[#f1f5f9] mt-12 py-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 text-center"
    >
      <h3 className="text-xl font-bold mb-4 text-[#48cae4]">
        مبادرة نقطة تحول
      </h3>
      <p className="text-sm mb-6 text-[#cbd5e1]">
        نحو تعليم يغيّر وبيئة تُعمّر – نُسهم في تحقيق الاستدامة ورؤية مصر 2030.
      </p>
      <p className="text-xs text-[#94a3b8]">
        © {new Date().getFullYear()} نقطة تحول. جميع الحقوق محفوظة.
      </p>
    </motion.div>
  </footer>
);

export default Footer;
