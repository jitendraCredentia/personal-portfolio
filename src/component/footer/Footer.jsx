import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="div footer__container container">
      <h1 className="footer__title">Jitendra</h1>

      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">
            About
          </a>
        </li>

        <li>
          <a href="#portfolio" className="footer__link">
            Projects
          </a>
        </li>

        <li>
          <a href="#testimonials" className="footer__link">
            Testimonials
          </a>
        </li>
      </ul>

      <div className="footer__social">
        <a
          href="https://twitter.com/"
          className="footer__social-link"
          target={"blank"}
        >
          <i className="bx bxl-twitter"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/jitendrakhadoliya/"
          className="footer__social-link"
          target={"blank"}
        >
          <i className="bx bxl-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/jitendra.khadoliya"
          className="footer__social-link"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>

      <span className="footer__copy">
        &#169; Jitendra Khadoliya. All rigths reserved
      </span>
    </div>
  </footer>
);

export default Footer;
