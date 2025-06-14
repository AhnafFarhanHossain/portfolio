import { useState, useEffect } from "react";
import "../styles/header.css";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside menu to close it
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest(".menu-icon")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="home" className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav>
          <div className="left">
            <div className="logo">
              ahnaf <i className="ri-code-s-slash-line" />
            </div>
          </div>
          <div className="right">
            <button className="theme-toggle" onClick={toggleTheme}>
              <i className={`ri-${theme === "dark" ? "sun" : "moon"}-line`} />
            </button>
            <button className="menu-icon" onClick={toggleMenu}>
              <i className={`ri-${isMenuOpen ? "close" : "menu-3"}-line`} />
            </button>
          </div>
        </nav>
      </header>
      <div className={`overlay ${!isMenuOpen ? "hidden" : ""}`}>
        <div className="overlay-content">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#cta">Contact</a>
          <a
            href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/"
            className="secondary-btn"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
