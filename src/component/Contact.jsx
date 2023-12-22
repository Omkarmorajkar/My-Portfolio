import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.8, // Trigger when 50% of the component is visible
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, ease: "easeOut" }, // Change the duration to 2 seconds
  };

  const lineAnimation = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <motion.section
      className="contact py-12 bg-gradient-to-br from-green-200 to-green-100 "
      initial="initial"
      animate={inView ? "animate" : "initial"}
      exit="initial"
      id="contact"
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
              Contact Us
            </motion.h2>
            <motion.div
              className="h-1 bg-green-500 rounded-full mb-4"
              variants={lineAnimation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            ></motion.div>

            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input mt-1 block w-full "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea mt-1 block w-full"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
