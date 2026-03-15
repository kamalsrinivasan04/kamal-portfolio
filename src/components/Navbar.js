export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-black text-white">

      <h1 className="text-xl font-bold">
        Kamal.dev
      </h1>

      <ul className="flex gap-6">
  <li>
    <a href="#about" className="hover:text-gray-400">About</a>
  </li>
  <li>
    <a href="#skills" className="hover:text-gray-400">Skills</a>
  </li>
  <li>
    <a href="#projects" className="hover:text-gray-400">Projects</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-gray-400">Contact</a>
  </li>
      </ul>

    </nav>
  );
}