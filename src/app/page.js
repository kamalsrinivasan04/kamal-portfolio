"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="flex flex-col items-center justify-center text-center h-[80vh] px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Floating Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Image
            src="/profile.jpg"
            width={150}
            height={150}
            className="rounded-full mb-4 "
            alt="Kamal"
          />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Kamal Srinivasan
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-xl">
          Computer Science Engineering student passionate about building
          modern web applications, exploring AI technologies, and solving
          real-world problems.
        </p>

        <div className="mt-8 flex gap-4">

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          View Projects
        </motion.a>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.1 }}
          className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg"
        >
          Download Resume
        </motion.a>

      </div>

      </motion.section>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}