"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
      <motion.section
        id="contact"
        className="bg-transparent text-white py-20 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out if you'd like to collaborate, discuss a project, 
          or just connect.
        </p>

       <div className="mt-8 flex gap-4 justify-center">

          <a
            href="https://github.com/kamalsrinivasan04"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 text-4xl transition duration-300 hover:scale-125">
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/kamal-nayan-579445259"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 text-4xl transition duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kamalnayans1864@gmail.com"
            className="text-gray-400 hover:text-blue-400 text-4xl transition duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </motion.section>
  );
}