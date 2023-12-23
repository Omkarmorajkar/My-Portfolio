import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    if (isMobile) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    } else {
      scroll.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -50, // Adjust offset as needed to properly position the section
      });
    }
    toggleMenu(); // Close the mobile menu after clicking a section link
  };

  return (
    <nav className="text-black p-4 fixed top-0 w-full z-10 backdrop-blur-sm backdrop-filter bg-opacity-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            Portfolio
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 font-bold">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer "
              >
                Home
              </ScrollLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
              >
                About
              </ScrollLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
              >
                Projects
              </ScrollLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </motion.li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex items-center"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col mt-4 justify-center items-center">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="block py-2 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="block py-2 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("projects")}
                className="block py-2 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className="block py-2 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
