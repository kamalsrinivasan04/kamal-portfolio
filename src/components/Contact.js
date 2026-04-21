"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
      <motion.section
        id="contact"
        className="bg-black text-white py-20 px-6"
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

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:kamalnayans1864@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            Email
          </a>

          <a
            href="https://github.com/kamalsrinivasan04"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:border-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kamal-nayan-579445259"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:border-white"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </motion.section>
  );
}