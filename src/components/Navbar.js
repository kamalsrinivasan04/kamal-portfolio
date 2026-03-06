export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-black text-white">

      <h1 className="text-xl font-bold">
        Kamal.dev
      </h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Projects</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>

    </nav>
  );
}