import { Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto my-12 px-6 py-12 shadow-xl rounded-2xl bg-[#053860] text-[#f1f5f9]"
  >
    <h2 className="text-4xl font-extrabold text-[#48cae4] mb-6 border-b-4 border-[#46c2cb] inline-block pb-2 text-center w-full">
      تواصل معنا
    </h2>

    {/* Contact Info */}
    <div className="grid md:grid-cols-2 gap-8 text-[#cbd5e1] text-lg leading-relaxed mb-8">
      <div className="flex items-start gap-4">
        <Mail className="text-[#48cae4]" />
        <span className="cursor-pointer hover:underline text-[#f1f5f9]">
          noqtettahwl@gmail.com
        </span>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="text-[#48cae4]" />
        <span className="text-[#f1f5f9]">الزقازيق، مصر</span>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="flex justify-center gap-6 mt-6">
      {[
        {
          icon: (
            <Facebook className="text-white group-hover:text-[#053860] w-6 h-6" />
          ),
          href: "https://www.facebook.com/noqtetta7wl",
          bg: "bg-[#3b82f6] hover:bg-[#60a5fa]",
        },
        {
          icon: (
            <Instagram className="text-white group-hover:text-[#053860] w-6 h-6" />
          ),
          href: "https://www.instagram.com/noqtet.ta7wl",
          bg: "bg-[#ec4899] hover:bg-[#f472b6]",
        },
        {
          icon: (
            <Mail className="text-white group-hover:text-[#053860] w-6 h-6" />
          ),
          href: "mailto:noqtettahwl@gmail.com",
          bg: "bg-[#ef4444] hover:bg-[#f87171]",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 48 48"
              className="w-6 h-6 group-hover:fill-[#053860]"
            >
              <path d="M34,6.5c-2.1,0-4-0.7-5.5-1.9v24.4c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c0.8,0,1.5,0.1,2.2,0.3v-4.7 c-0.7-0.1-1.5-0.2-2.2-0.2c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13V17.2c1.5,0.8,3.2,1.3,5,1.3v-4.7c-1.8,0-3.5-0.5-5-1.3 V6.5H34z" />
            </svg>
          ),
          href: "https://www.tiktok.com/@noqtet.ta7wl",
          bg: "bg-black hover:bg-gray-800",
        },
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className={`group p-4 rounded-full shadow-md transition duration-300 ${item.bg}`}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default Contact;
