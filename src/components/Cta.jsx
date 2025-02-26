import "./styles/cta.css"

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-label">Get in Touch</div>
          <h2>Let's Create Something Amazing Together</h2>
          <p>
            Ready to transform your digital presence? Let's collaborate to build
            an exceptional website that captures your vision and drives results.
          </p>
          <div className="cta-actions">
            <a
              href="mailto:ahnaffarhanhossain@gmail.com"
              className="primary-btn"
            >
              Start Your Project
            </a>
            <a
              href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/"
              target="_blank"
              className="secondary-btn"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
