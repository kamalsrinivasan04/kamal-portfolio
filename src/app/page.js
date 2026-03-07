import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-500">Kamal Srinivasan</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-xl">
          Computer Science Engineering student passionate about 
          Software Development, Data Analytics, and Artificial Intelligence.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            View Projects
          </button>

          <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg">
            Download Resume
          </button>
        </div>

      </section>

      <About />

      <Skills />

      <Projects />

    </main>
  );
}