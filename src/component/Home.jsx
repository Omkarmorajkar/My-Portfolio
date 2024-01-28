import React from "react";
import { motion } from "framer-motion";
import myImage from "../../public/Image/myImage.JPG";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const { ref, inView } = useInView({
    threshold: 1, // Trigger when 50% of the component is visible
  });

  const h1Variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const pVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const gradientBackground = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  };

  const accentColor = "#f7fff7"; // Lighter accent color for text

  const slideInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Adjust the duration here (e.g., 0.5 seconds)
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    console.log("Hello world");
  };

  const openGitHubProfile = () => {
    window.open("https://github.com/Omkarmorajkar", "_blank");
  };

  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/omkar-morajkar/", "_blank");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={gradientBackground}
      id="home"
    >
      <div className="max-w-7xl text-center" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromTop} // Change to slide in from top animation
          className="neumorphism mx-auto w-44 h-44 mb-6 rounded-full overflow-hidden border-4 border-white"
        >
          <img
            className="w-full h-full object-cover "
            src={myImage}
            alt="Person Image"
          />
        </motion.div>
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={h1Variants}
          className="text-4xl md:text-6xl font-bold mb-4 "
          style={{ color: accentColor }}
        >
          Hi, I'm <span className="text-yellow-300">Omkar Morajkar </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={pVariants}
          className="text-lg md:text-xl mb-8"
          style={{ color: "#f0f0f0" }} // Light gray text color
        >
          A Front-End Developer passionate about crafting user-centric and
          visually stunning web experiences.
        </motion.p>
        <div className="flex justify-center items-center m-6">
          <motion.div
            className="text-3xl mx-2 cursor-pointer"
            onClick={openGitHubProfile}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: accentColor }} />
          </motion.div>
          <motion.div
            className="text-3xl mx-2 cursor-pointer"
            onClick={openLinkedInProfile}
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: accentColor }} />
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-blue-100 focus:outline-none"
          style={{ backgroundColor: accentColor, color: "#667eea" }} // Button colors
          onClick={scrollToProjects}
        >
          View Projects
        </motion.button>
      </div>
    </section>
  );
}

export default Home;
