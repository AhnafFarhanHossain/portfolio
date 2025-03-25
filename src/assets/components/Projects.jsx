import Shadient from "../images/shadient.webp";
import Cheffest from "../images/cheffest.webp";
import Whitepace from "../images/whitepace.webp";
import HeroTravels from "../images/herotravels.webp";
import Elecar from "../images/elecar.webp";
import Healthy from "../images/Healthy.webp";
import LaPizzaPopolare from "../images/la-pizza-popolare.webp";
import GeminiClone from "../images/gemini-clone.webp";
import FeedlyticCover from "../images/Feedlytic-cover.webp"
import "../styles/projects.css";
import { useRef } from "react";

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
          <div className="card">
            <div className="card-top">
              <h2>Feedlytic - Client Feedback Management Portal</h2>
              <a href="https://feedlytic-ahnaf.vercel.app" target="_blank">
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
              Feedlytic is a client-centric feedback management system that streamlines the collection, analysis, and visualization of customer insights.
            </p>
            <div className="tech-stack">
              <span>React JS</span>
              <span>Next JS</span>
              <span>NextAuth</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
            </div>
            <img src={FeedlyticCover} alt="Shadient Website" />
          </div>
          {/* Project: Shadient - Lead Gen. Agency */}
          <div className="card">
            <div className="card-top">
              <h2>Shadient - Lead Gen. Agency</h2>
              <a href="https://shadient-ahnaf.vercel.app" target="_blank">
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
              Shadient is a creative lead generation agency offering services
              for web development, app development, digital marketing, SEO, and
              many more. Project duration - 1 week
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>GSAP</span>
              <span>Lenis</span>
              <span>Figma</span>
            </div>
            <img src={Shadient} alt="Shadient Website" />
          </div>
          {/* Project: Elecar - Car Dealership (moved to prominent position in place of TechShabaka) */}
          <div className="card">
            <div className="card-top">
              <h2>Elecar - Car Dealership</h2>
              <a href="https://elecar-kappa.vercel.app" target="_blank">
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
              Elecar is a premium car dealership platform featuring luxury
              vehicles from top brands like Porsche, BMW, and Audi. Built with
              HTML, CSS, JavaScript, and designed in Figma.
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Figma</span>
            </div>
            <img src={Elecar} alt="Elecar Dealership Website" />
          </div>
          {/* Project: Gemini Clone */}
          <div className="card">
            <div className="card-top">
              <h2>Gemini Clone</h2>
              <a href="https://gemini-ahnaf.netlify.app" target="_blank">
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
              Gemini Clone is a sleek React app that leverages the Gemini API,
              built with Vite and styled with CSS for a smooth, modern user
              experience.
            </p>
            <div className="tech-stack">
              <span>React JS</span>
              <span>CSS</span>
              <span>Gemini API</span>
              <span>Vite</span>
            </div>
            <img src={GeminiClone} alt="Gemini Clone Project" />
          </div>
          {/* Project: Hero Travels */}
          <div className="card">
            <div className="card-top">
              <h2>Hero Travels</h2>
              <a href="https://herotravels.vercel.app" target="_blank">
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
              Hero Travels was a team project which is Travel Partner website.
              The tools that were used are - HTML, CSS, and Figma
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Figma</span>
            </div>
            <img src={HeroTravels} alt="Hero Travels Project" />
          </div>
          {/* Project: Cheffest - Restaurant */}
          <div className="card">
            <div className="card-top">
              <h2>Cheffest - Restaurant</h2>
              <a href="https://cheffest.vercel.app" target="_blank">
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
              Cheffest is a modern restaurant website showcasing culinary
              excellence. Built with HTML, CSS, JavaScript, and designed in
              Figma.
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Figma</span>
            </div>
            <img src={Cheffest} alt="Cheffest Restaurant Website" />
          </div>
          {/* Project: Whitepace - SaaS */}
          <div className="card">
            <div className="card-top">
              <h2>Whitepace - SaaS</h2>
              <a href="https://whitepace-beige.vercel.app" target="_blank">
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
              Whitepace is also a solo project made by using HTML, CSS, and
              Figma. It is a SaaS website that offers service for Project
              Management.
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Figma</span>
            </div>
            <img src={Whitepace} alt="Whitepace Project" />
          </div>
          {/* Project: Healthy - Medical Website */}
          <div className="card">
            <div className="card-top">
              <h2>Healthy - Medical Website</h2>
              <a href="https://healthy-alpha.vercel.app" target="_blank">
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
              "Healthy" is a responsive wellness website crafted with HTML, CSS,
              JavaScript, and jQuery, with designs created in Figma. It features
              a clean, minimalist layout and smooth animations for an engaging
              user experience across all devices.
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>Figma</span>
            </div>
            <img src={Healthy} alt="Healthy Medical Website" />
          </div>
          {/* Project: La Pizza Popolare - Pizza Cafe */}
          <div className="card">
            <div className="card-top">
              <h2>La Pizza Popolare - Pizza Cafe</h2>
              <a href="https://la-pizza-popolare.vercel.app" target="_blank">
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
              La Pizza Popolare was a collective project created by our Team in
              TechShabaka, it is a pizza restaurant and they have variety of
              dishes to present on the table, especially Pizza.
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Lenis</span>
              <span>Figma</span>
            </div>
            <img src={LaPizzaPopolare} alt="Shadient Website" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
