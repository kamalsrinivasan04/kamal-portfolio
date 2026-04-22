"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
          id="about"
          className="bg-transparent text-white py-20 px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >     
        <div className=" bg-transparent max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I'm Kamal Srinivasan, a Computer Science and Design Engineering student
          passionate about building technology that solves real-world problems.
          I enjoy working with modern web technologies, exploring artificial
          intelligence, and developing data-driven solutions.
        </p>

      </div>

    </motion.section>
  );
}