import { useState, useEffect, useRef } from "react";
import { Code, Github, Link2 } from "lucide-react";
import gsap from "gsap";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projectsRef = useRef(null);

  const projectList = [
    {
      name: "Free3Lance",
      description:
        "A freelancing platform connecting clients with skilled freelancers.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
      ],
      githubLink: "#",
      liveLink: "#",
      image: "carousel/screenshots/free3lance",
    },
    {
      name: "Portfolio Website",
      description:
        "A modern personal portfolio showcasing projects and skills.",
      technologies: [
        "React",
        "GSAP",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      githubLink: "#",
      liveLink: "#",
      image: "carousel/screenshots/portfolio",
    },
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-white px-4 pt-10 space-y-20">
      {/* Heading */}
      <h1
        className={`text-7xl md:text-8xl font-extrabold tracking-tight text-center transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-lime-400">PROJECTS</span>
      </h1>

      {/* Projects List */}
      <div ref={projectsRef} className="w-full max-w-6xl space-y-12">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-stretch border border-lime-400 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#a3e635]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Project Image */}
            <div className="md:w-1/3 bg-gray-800 flex items-center justify-center p-6">
              <div className="w-full aspect-[16/9] bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
                <span className="text-gray-400">{project.image}</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="md:w-2/3 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-lime-400 mb-4">
                  {project.name}
                </h2>
                <p className="text-white text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-lime-400 bg-opacity-20 text-lime-300 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links (Hidden by Default, Shown on Hover) */}
              <div
                className={`absolute bottom-6 right-6 flex gap-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors"
                >
                  <Link2 size={28} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
