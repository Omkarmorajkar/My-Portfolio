import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";

const Contact = () => {
  const [state, handleSubmit, resetForm] = useForm("xleqrywv");

  console.log(" form error " + state.errors);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      resetForm();
    } else if (state.errors) {
      if (
        state.errors.formErrors &&
        state.errors.formErrors.length > 0 &&
        state.errors.formErrors[0].message === "Failed to fetch"
      ) {
        toast.error(
          "Failed to fetch data. Please check your network connection."
        );
      } else {
        // Handle other types of errors or display a generic error message
        toast.error("An error occurred. Please try again later.");
      }
      resetForm();
    }
  }, [state.succeeded, state.errors]);

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
    <>
      {state.submitting ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <motion.section
            className="contact py-12 bg-gradient-to-br from-green-300 to-green-100"
            initial="initial"
            animate={inView ? "animate" : "initial"}
            exit="initial"
            id="contact"
            ref={ref}
          >
            <div className=" mx-auto px-4 py-8">
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden backdrop-blur-sm backdrop-filter bg-opacity-50 lg:mx-16">
                <motion.div
                  className="p-6"
                  variants={fadeInUp}
                  initial="initial"
                  animate={inView ? "animate" : "initial"}
                >
                  <motion.h2
                    className="text-3xl font-bold mb-4"
                    variants={fadeInUp}
                  >
                    Contact Us
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-green-500 rounded-full mb-4"
                    variants={lineAnimation}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                  ></motion.div>

                  <form
                    className="grid grid-cols-1 gap-6"
                    action="https://formspree.io/omkarmorajkar22@gmail.com"
                    method="POST"
                    onSubmit={handleFormSubmit}
                  >
                    {/* Replace 'your-email@example.com' with your Formspree email */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input mt-1 p-1 rounded-md border-gray-300 focus:outline-green-600"
                        autoComplete="off"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        className="form-input mt-1 p-1 rounded-md focus:outline-green-600"
                        placeholder="example@gmail.com"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        className="form-textarea mt-1 p-1 rounded-md focus:outline-green-600"
                        minLength={5}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </>
  );
};

export default Contact;
