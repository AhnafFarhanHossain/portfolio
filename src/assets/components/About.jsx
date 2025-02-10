import "../styles/about.css";
import PrimaryButton from "./Buttons/PrimaryButton";
import Avatar from "../images/avatar.webp"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label">About</div>
            <h2>Frontend Developer and Designer at TechShabaka.</h2>
            <div className="about-description">
              <p>
                I am a passionate web designer and developer with a proven track
                record of creating visually stunning and functional websites.
                With expertise in modern web technologies, including HTML, CSS,
                JavaScript, and frameworks like Tailwind CSS, and libraries like React, I craft
                user-friendly digital experiences tailored to meet client goals.
              </p>
              <p>
                Currently, I work at the renowned agency TechShabaka, where I
                collaborate with a team of talented professionals to deliver
                cutting-edge web solutions. Beyond my technical skills, I am
                committed to maintaining a minimalistic yet impactful design
                approach, ensuring every project reflects both elegance and
                functionality.
              </p>
              <div className="cta-wrapper">
                <PrimaryButton />
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={Avatar} alt="Ahnaf Farhan Hossain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
