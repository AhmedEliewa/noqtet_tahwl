import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => (
  <div className="my-12 max-w-4xl mx-auto px-6 py-12 bg-white shadow-2xl rounded-2xl border border-gray-200 animate-fade-in">
    <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
      تواصل معنا
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <div className="flex items-start gap-4">
          <Mail className="text-blue-500" />
          <span className="cursor-pointer hover:scale-105 transition duration-300">
            noqtettahwl@gmail.com
          </span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-blue-500" />
          <span>الزقازيق مصر</span>
        </div>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="flex justify-center gap-6 mt-10">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/noqtetta7wl"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-blue-100 hover:bg-blue-600 p-4 rounded-full shadow-lg transition duration-500"
      >
        <Facebook className="text-blue-600 group-hover:text-white w-6 h-6" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/noqtet.ta7wl"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-pink-100 hover:bg-pink-500 p-4 rounded-full shadow-lg transition duration-500"
      >
        <Instagram className="text-pink-600 group-hover:text-white w-6 h-6" />
      </a>

      {/* Gmail */}
      <a
        href="noqtettahwl@gmail.com"
        className="group bg-red-100 hover:bg-red-500 p-4 rounded-full shadow-lg transition duration-500"
      >
        <Mail className="text-red-600 group-hover:text-white w-6 h-6" />
      </a>

      {/* TikTok (Custom SVG) */}
      <a
        href="https://www.tiktok.com/@noqtet.ta7wl"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-black p-4 rounded-full shadow-lg hover:scale-105 transition duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 48 48"
          className="w-6 h-6"
        >
          <path d="M34,6.5c-2.1,0-4-0.7-5.5-1.9v24.4c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c0.8,0,1.5,0.1,2.2,0.3v-4.7 c-0.7-0.1-1.5-0.2-2.2-0.2c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13V17.2c1.5,0.8,3.2,1.3,5,1.3v-4.7c-1.8,0-3.5-0.5-5-1.3 V6.5H34z" />
        </svg>
      </a>
    </div>
  </div>
);

export default Contact;
