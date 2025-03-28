import "../styles/cta.css";

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-label">Get in Touch</div>
          <h2>Let's Build Something Meaningful</h2>
          <p>
            Whether you have a project in mind or just want to connect,
            I'd love to hear from you. Let's discuss how we can bring
            your ideas to life with thoughtful design and clean code.
          </p>
          <div className="cta-actions">
            <a
              href="mailto:ahnaffarhanhossain@gmail.com"
              className="primary-btn"
              aria-label="Email me to start your project"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              aria-label="View my LinkedIn profile"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
