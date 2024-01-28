import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pro1Image from "../../public/Image/project1.png";

const projects = [
  {
    title: "Academic Attainment Tool",
    description:
      "Created an educational assessment tool utilizing HTML, JavaScript, and Tailwind CSS.",
    imageUrl: pro1Image, // Replace with your project image URL
    projectUrl: "https://attainment-of-learning-outcomes.netlify.app/", // Replace with your project URL
  },
  {
    title: "CO-PO-Calculation",
    description:
      "Developed a web app using HTML, JavaScript, and Tailwind CSS to simplify course and program outcome assessment.",
    imageUrl: pro1Image,
    projectUrl: "https://co-po-calculation.netlify.app/", // Replace with your project URL
  },
  // Add more projects with similar structure
];

const Project = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 1,
  });

  const lineAnimation = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.6, delay: 0.3 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-gradient-to-br from-blue-300 to-blue-100">
      <div
        className="bg-white  rounded-2xl overflow-hidden backdrop-blur-sm backdrop-filter bg-opacity-50 lg:mx-16 p-6 shadow-lg "
        id="projects"
      >
        <div className="container  md:mx-auto sm:mx-auto  ">
          <motion.h1
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            ref={projectsRef}
          >
            Projects
          </motion.h1>
          <motion.div
            className="h-1 bg-blue-500 rounded-full mb-4"
            variants={lineAnimation}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            ref={projectsRef}
          ></motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 mb-6"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        {title}
      </h2>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full h-40 object-cover mb-4"
        />
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-300 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition duration-300"
        >
          <span className="text-white text-lg font-bold">View Project</span>
        </a>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center inline-block"
      >
        View Project
      </a>
    </motion.div>
  );
};
export default Project;
