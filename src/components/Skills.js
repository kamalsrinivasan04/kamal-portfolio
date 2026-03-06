export default function Skills() {

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Machine Learning",
    "Data Analytics",
    "Git & GitHub"
  ];

  return (
    <section className="bg-black text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-2 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}