import "../styles/resi-status.css";
import { useState, useEffect } from "react";

const ResiStatus = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`resi-status ${animate ? "animate" : ""}`}>
      <div className="status-pill nationality">
        <span className="status-text">Proudly Bangladeshi</span>
        <div className="flag-container">
          <svg
            className="flag-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
          >
            <circle cx="45" cy="45" r="45" fill="#006a4e" />
            <circle cx="45" cy="45" r="19.5" fill="#f42a41" />
          </svg>
        </div>
      </div>

      <div className="status-pill availability">
        <div className="status-indicator"></div>
        <span className="status-text">Available for work</span>
      </div>
    </div>
  );
};

export default ResiStatus;
