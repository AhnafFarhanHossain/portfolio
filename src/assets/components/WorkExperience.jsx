import "../styles/work-experience.css";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web2 Engineer",
      company: "Aribaas Ventures Ltd.",
      period: "2025 - Current",
      technologies: "MERN Stack + Next.js",
      description:
        "Currently working as a Junior Web2 Developer, building modern web applications using the MERN stack and Next.js. Contributing to innovative projects and expanding expertise in full-stack development.",
      status: "current",
    },
    {
      id: 2,
      title: "Fullstack Web Developer",
      company: "Wistiq",
      period: "2024 - 2025",
      technologies: "MERN Stack + Next.js",
      description:
        "Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. Implemented modern UI/UX designs and optimized application performance.",
      status: "completed",
    },
    {
      id: 3,
      title: "Freelancer",
      company: "Upwork, Fiverr",
      period: "2022 - 2023",
      technologies: "Web Development",
      description:
        "Provided freelance web development services to various clients worldwide. Delivered custom websites and web applications with focus on responsive design and user experience.",
      status: "completed",
    },
  ];

  return (
    <section className="work-experience" id="experience">
      <div className="container">
        <div className="section-headings">
          <div className="section-label">Experience</div>
          <h2>Professional Journey & Career Milestones</h2>
          <p className="section-description">
            My professional journey spans from freelance work to full-time
            roles, building expertise in modern web technologies and delivering
            impactful solutions.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-card ${exp.status}`}>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-meta">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  <div className="status-badge">
                    {exp.status === "current" ? (
                      <span className="current-badge">
                        <i className="ri-play-circle-fill"></i>
                        Current
                      </span>
                    ) : (
                      <span className="completed-badge">
                        <i className="ri-check-circle-fill"></i>
                        Completed
                      </span>
                    )}
                  </div>
                </div>

                <div className="tech-stack">
                  <span className="tech-label">Tech Stack:</span>
                  <span className="tech-value">{exp.technologies}</span>
                </div>

                <p className="job-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
