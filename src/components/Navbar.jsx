import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/icons/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Players", path: "/players" },
    { label: "Matches", path: "/matches" },
    { label: "Join Us", path: "/join" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary text-light font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="All Stars Helsinki" className="w-100 h-20" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-bold px-2 py-1 transition border-b-4 ${
                  isActive
                    ? "border-yellow-400 text-light"
                    : "border-transparent hover:text-yellow-400"
                }`
              }
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 text-light"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block font-bold border-b-4 px-2 py-1 ${
                  isActive
                    ? "border-yellow-400 text-light"
                    : "border-transparent hover:text-yellow-400"
                }`
              }
              onClick={() => setIsOpen(false)}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
