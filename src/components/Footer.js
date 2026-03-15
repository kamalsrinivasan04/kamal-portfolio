export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">

      <p>
        © {new Date().getFullYear()} Kamal Srinivasan. All rights reserved.
      </p>

      <p className="text-sm mt-2">
        Built with Next.js and Tailwind CSS
      </p>

    </footer>
  );
}