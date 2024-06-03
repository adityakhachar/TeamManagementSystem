import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import webcretaLogo from '../images/webcreta.png'; // Adjust the path relative to Footer.jsx

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="logo-container">
          <a href="#"><img src={webcretaLogo} alt="Logo" className="footer-logo" /></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Contact Us</a></li>
          <li className="list-inline-item"><a href="#">Companies</a></li>
          <li className="list-inline-item"><a href="#">Employees</a></li>
        </ul>
        <p className="copyright">webcreta technologies pvt ltd. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
