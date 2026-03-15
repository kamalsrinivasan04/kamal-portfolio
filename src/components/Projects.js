export default function Projects() {

  const projects = [
    {
      title: "Cognitive Companion",
      description:
        "Cross-platform application designed to support learning and helping with cognitive assistance.Developed backend APIs using Python for data handling and user interactions.Implemented authentication and database integration for secure user management.Worked with structured user data for feature tracking and analysis to support adaptive system behavior.",
    },
    {
      title: "Web Vulnerability Scanner",
      description:
        "Developed a full stack web application using Python Flask, HTML, CSS, and JavaScript.Integrated OWASP ZAP to scan target URLs for vulnerabilities such as SQL Injection and XSS.Designed a user-friendly dashboard to display vulnerability reports by scanning 10% faster.",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio built using Next.js and Tailwind CSS to showcase projects and technical skills. The website features a responsive modern UI with structured sections for projects, skills, and contact information. It is deployed online and integrated with GitHub to demonstrate my work and development activity.",
    },
    {
      title: "Human-Finder BT",
      description:
        "A four-wheeled robot prototype that locates victims using thermal sensors in disaster-prone areas, where its not possible for humans to go. Built using Arduino Uno, thermal sensors and Bluetooth module to control from a android application. ",
    },
    
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>


            </div>
          ))}

        </div>

      </div>

    </section>
  );
}