import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.8, // Trigger when 50% of the component is visible
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const lineAnimation = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <motion.section
      className="about py-12 bg-gradient-to-br from-yellow-300 to-yellow-100 "
      initial="initial"
      animate={inView ? "animate" : "initial"}
      exit="initial"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden backdrop-blur-sm backdrop-filter bg-opacity-50 lg:mx-16">
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
              className="text-gray-600 leading-relaxed text-justify"
              variants={fadeInUp}
            >
              Hi there! I'm Omkar Morajkar, a passionate front-end web developer
              with a keen interest in creating user-friendly and visually
              appealing websites. I enjoy turning ideas into beautiful,
              interactive, and responsive web experiences. With a strong
              foundation in HTML, CSS, JavaScript, and various front-end
              frameworks, I'm constantly exploring new technologies to enhance
              my skills and deliver high-quality solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
