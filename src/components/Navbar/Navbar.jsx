// import React, { useState } from "react";
// import { Menu, X, Globe, Twitter, Instagram } from "lucide-react"; // Importing necessary icons

// // Navbar component
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

//   // Function to toggle the mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white p-4 shadow-lg">
//       {" "}
//       {/* Changed background to white */}
//       <div className="container mx-auto flex justify-between items-center flex-wrap">
//         {/* Logo - Always visible */}
//         <div className="flex-shrink-0 text-gray-800 text-3xl font-extrabold tracking-wider rounded-md p-1">
//           {" "}
//           {/* Adjusted text color */}
//           <a
//             href="#"
//             className="hover:text-gray-600 transition-colors duration-300"
//           >
//             MyLogo {/* Placeholder for logo/avatar */}
//           </a>
//         </div>

//         {/* Hamburger menu icon for small screens */}
//         <div className="block lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-2 transition-colors duration-300"
//             aria-label="Toggle navigation"
//           >
//             {isOpen ? <X size={30} /> : <Menu size={30} />}{" "}
//             {/* Change icon based on menu state */}
//           </button>
//         </div>

//         {/* Desktop Navigation Links and Social Icons */}
//         <div className="hidden lg:flex lg:items-center lg:w-auto">
//           {/* Navigation Links */}
//           <ul className="text-lg flex space-x-8 items-center">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               >
//                 Works
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//           {/* Social Media Icons for large screens */}
//           <div className="ml-8 flex space-x-4">
//             <a
//               href="#"
//               className="text-gray-800 hover:text-purple-600 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Globe size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Twitter size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-800 hover:text-pink-600 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Instagram size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Offcanvas Menu for small screens */}
//       {/* Backdrop for the offcanvas menu */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleMenu} // Close menu when backdrop is clicked
//         ></div>
//       )}
//       {/* Offcanvas panel */}
//       <div
//         className={`fixed inset-y-0 right-0 bg-white w-64 md:w-80 p-6 transform transition-transform duration-300 ease-in-out z-50 lg:hidden
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex justify-end mb-8">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-2 transition-colors duration-300"
//             aria-label="Close navigation"
//           >
//             <X size={30} />
//           </button>
//         </div>
//         <ul className="text-xl flex flex-col space-y-6">
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               onClick={toggleMenu} // Close menu on link click
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               onClick={toggleMenu} // Close menu on link click
//             >
//               Works
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               onClick={toggleMenu} // Close menu on link click
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
//               onClick={toggleMenu} // Close menu on link click
//             >
//               Contact
//             </a>
//           </li>
//           <li className="mt-6 flex justify-center space-x-4">
//             {" "}
//             {/* Centered social icons in mobile menu */}
//             <a
//               href="#"
//               className="text-gray-800 hover:text-purple-600 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Globe size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Twitter size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-800 hover:text-pink-600 transition-colors duration-300 p-2 rounded-full bg-purple-100"
//             >
//               <Instagram size={24} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portofolio", label: "Portofolio" },
    { href: "#Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems
        .map((item) => {
          const section = document.querySelector(item.href);
          if (section) {
            return {
              id: item.href.replace("#", ""),
              offset: section.offsetTop - 550,
              height: section.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const currentPosition = window.scrollY;
      const active = sections.find(
        (section) =>
          currentPosition >= section.offset &&
          currentPosition < section.offset + section.height
      );

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? "bg-[#030014] opacity-100"
          : scrolled
          ? "bg-[#030014]/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#Home"
              onClick={(e) => scrollToSection(e, "#Home")}
              className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
            >
              Ekizr
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                        : "text-[#e2d3fd] group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden h-2/5 fixed inset-0 bg-[#030014] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 space-y-4 flex-1 ">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                    : "text-[#e2d3fd] hover:text-white"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(50px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
