import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroupLogo from "../../assets/Images/Group.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition duration-200 ${
        sticky ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex items-center justify-between py-4">
        {/* Left Section (Logo & Mobile Menu) */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={GroupLogo} alt="BookStore Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-black">bookStore</span>
          </Link>
        </div>

        {/* Right Side: NavLinks, Theme Toggle & Sign In */}
        <div className="flex items-center space-x-6 ml-auto">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-black hover:text-orange-500">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-orange-500">
              About us
            </Link>
            <Link to="/courses" className="text-black hover:text-orange-500">
              Courses
            </Link>
            <Link to="/services" className="text-black hover:text-orange-500">
              Our Services
            </Link>
            <Link to="/contact" className="text-black hover:text-orange-500">
              Contact us
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="swap swap-rotate p-2 rounded-lg"
          >
            {theme === "light" ? (
              <svg
                className="h-6 w-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,6.05,6.05,0,0,1-3.37.73A6.15,6.15,0,0,1,9.06,5.49a6.59,6.59,0,0,1,.25-2A1,1,0,0,0,6,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Z" />
              </svg>
            )}
          </button>

          {/* Sign In Button */}
          <Link
            to="/login"
            className="bg-[#4D2C5E] text-white px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                className="text-black hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-black hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
