import zenflow from "../images/zenflow.png";
import colortailor from "../images/colortailor.png";
import "../styles/projects.css";
import { useRef } from "react";

const projects = [
  {
    name: "Zenflow - All in One Task Management Tool",
    description:
      "Zenflow is an easy-to-use task management tool - you don't need to jump around different apps for different tasks. Zenflow is a one-stop solution for all your task management needs.",
    image: zenflow,
    link: "https://zenflow-ahnaf.vercel.app",
    techStack: [
      "React JS",
      "Next JS",
      "Clerk Auth",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    name: "ColorTailor - AI Color Palette Generator",
    description: 
      "ColorTailor is an AI-powered color palette generator that helps you create beautiful color schemes for your projects. Just input your keywords, and let the AI do the rest!",
    image: colortailor,
    link: "https://colortailorai.vercel.app",
    techStack: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "OpenRouter API",
      "Vercel",
    ],
  }
];

const Projects = () => {
  const sliderRef = useRef(null);

  const scrollPrev = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".card");
      if (card) {
        const cardWidth = card.offsetWidth;
        sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".card");
      if (card) {
        const cardWidth = card.offsetWidth;
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-headings">
          <h3>Featured Projects</h3>
          <h1>Showcasing My Finest Work</h1>
        </div>
        <div className="projects-controls">
          <button className="projects-arrow prev" onClick={scrollPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z"></path>
            </svg>
          </button>
          <button className="projects-arrow next" onClick={scrollNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
            </svg>
          </button>
        </div>
        <div className="projects-wrapper" ref={sliderRef}>
          {/* Project: Feedlytic - Client Feedback Management Portal */}
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <div className="card-top">
                <h2>{project.name}</h2>
                <a href={project.link} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a.5.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </div>
              <p>
                {project.description}
              </p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <img src={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
