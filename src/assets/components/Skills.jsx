import "../styles/skills.css";
import "../styles/utility.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-headings">
          <h3>Skills and Expertise</h3>
          <h1>Discover the skills and expertise I bring to the table.</h1>
        </div>
        <div className="card-wrapper">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-html5" />
            </div>
            <h2>HTML</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-css3-alt" />
            </div>
            <h2>CSS</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="ri-javascript-fill" />
            </div>
            <h2>JavaScript</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="ri-reactjs-fill" />
            </div>
            <h2>React JS</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={100}
                height={100}
                viewBox="0 0 50 50"
              >
                <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
              </svg>
            </div>
            <h2>TypeScript</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-figma" />
            </div>
            <h2>Figma</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="ri-tailwind-css-fill" />
            </div>
            <h2>Tailwind CSS</h2>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
              </svg>
            </div>
            <h2>Next JS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
