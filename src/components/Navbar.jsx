import { Link } from "react-router";
import logo from "/logo.jpeg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 sm:bg-transparent text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-lg sticky top-0 z-20 rounded-b-md">
      <Link to="/" className="flex items-center" onClick={closeMenu}>
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full object-cover mr-3 hover:scale-110 transition-transform duration-300"
        />
        <span className="text-2xl font-bold mr-2">نُقطـة تحـــوّل</span>
      </Link>

      {/* Mobile menu toggle button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="focus:outline-none text-white"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Links container */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex sm:justify-center sm:items-center text-base flex-col gap-4 sm:flex-row absolute sm:static top-full left-0 w-full sm:w-auto ${
          isOpen
            ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
            : ""
        } sm:bg-transparent py-6 sm:py-0 items-center transition-all duration-300`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          الصفحة الرئيسية
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          نبذة عنا
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          تواصل معانا
        </Link>
        <Link
          to="/aims"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          أهدافنا
        </Link>
        <Link
          to="/mission"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          رسالتنا
        </Link>
        <Link
          to="/honors"
          onClick={closeMenu}
          className="hover:text-yellow-300 transition duration-300"
        >
          تكريماتنا
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
