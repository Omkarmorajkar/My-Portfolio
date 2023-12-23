import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactLogo from "../Image/reactlogo.svg";
import javascriptIcon from "../Image/javascriptIcon.png";
import HtmlLogo from "../Image/htmlLogo.png";
import CssLogo from "../Image/CSSLogo.png";
import TailwindIcon from "../Image/tailwindIcon.png";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const lineAnimation = {
  initial: { width: "0%" },
  animate: { width: "100%", transition: { duration: 0.6, delay: 0.3 } },
};

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.8, // Trigger when 50% of the component is visible
  });

  return (
    <motion.section
      className=" py-12 bg-gradient-to-br from-yellow-300 to-yellow-100  "
      initial="initial"
      animate={inView ? "animate" : "initial"}
      exit="initial"
      id="about"
      ref={ref}
    >
      <div className="flex justify-center items-center ">
        <SkillsContainer skills={skills} inView={inView} />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className=" bg-white rounded-lg overflow-hidden backdrop-blur-sm backdrop-filter bg-opacity-50 lg:mx-16 shadow-lg ">
          <motion.div
            className="p-6"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
              About Me
            </motion.h2>
            <motion.div
              className="h-1 bg-yellow-500 rounded-full mb-4"
              variants={lineAnimation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            ></motion.div>

            <motion.p
              className="text-gray-600 leading-relaxed text-justify "
              variants={fadeInUp}
            >
              Hi there! I'm Omkar Morajkar, a passionate front-end web developer
              with a keen interest in creating user-friendly and visually
              appealing websites. I enjoy turning ideas into beautiful,
              interactive, and responsive web experiences. With a strong
              foundation in HTML, CSS, JavaScript, React.js, Tailwind , I'm
              constantly exploring new technologies to enhance my skills and
              deliver high-quality solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

const SkillsContainer = ({ skills, inView }) => {
  // Placeholder icons (you can replace these with actual SVGs or image URLs)
  const skillIcons = {
    HTML: HtmlLogo, // Replace 'html-icon-url' with your HTML icon URL or SVG
    CSS: CssLogo, // Replace 'css-icon-url' with your CSS icon URL or SVG
    JavaScript: javascriptIcon, // Replace 'js-icon-url' with your JavaScript icon URL or SVG
    React: ReactLogo, // Replace 'react-icon-url' with your React icon URL or SVG
    "Tailwind CSS": TailwindIcon, // Replace 'tailwind-icon-url' with your Tailwind icon URL or SVG
  };

  return (
    <div className="bg-white  backdrop-blur-sm backdrop-filter bg-opacity-50 p-6 w-[90%]  rounded-md ">
      <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
        My Skills
      </motion.h2>
      <motion.div
        className="h-1 bg-yellow-500 rounded-full mb-4"
        variants={lineAnimation}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      ></motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-5  gap-4 "
        variants={fadeInUp}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex items-center justify-center"
          >
            <img
              src={skillIcons[skill]} // Use the icon URL based on the skill
              alt={skill}
              className="h-8 w-8 mr-2" // Set the height and width of the icon
            />
            <span className="text-blue-500 font-semibold">{skill}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
