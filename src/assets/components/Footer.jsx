import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <h1>
            Crafting visually stunning, user-focused web experiences with
            precision and creativity—Ahnaf Farhan Hossain, your partner in
            turning ideas into impactful digital realities.
          </h1>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-info">
            <span className="copyright">
              Copyright © <span id="date">2024</span> Ahnaf Farhan
            </span>
            <div className="contact-info">
              <a href="mailto:ahnaffarhanhossain@gmail.com">
                <i className="ri-mail-line" /> ahnaffarhanhossain@gmail.com
              </a>
              <a href="tel:+8801886155446">
                <i className="ri-phone-line" /> +880 1886 155446
              </a>
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/AhnafFarhanHossain/" target="_blank">
              Github
            </a>
            <a href="https://instagram.com/ahnaf._._farh.an" target="_blank">
              Instagram
            </a>
            <a href="https://x.com/AhnafPresents" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
