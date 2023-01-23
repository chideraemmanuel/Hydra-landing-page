import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Button from "../../components/button/Button";

const Footer = () => {
  return (
    <footer
      className="footer container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="50"
    >
      <div className="footer__content">
        <div className="footer__content--logo">
          <img src={logo} alt="Hydra Logo" />
        </div>

        <svg
          width="6"
          height="197"
          viewBox="0 0 6 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 196.5V0.5"
            stroke="url(#paint0_linear_13_75)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13_75"
              x1="2.99526"
              y1="1.42982"
              x2="77.322"
              y2="162.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#343045" />
              <stop stopColor="#343045" />
              <stop offset="0.348958" stopColor="#C0B7E8" />
              <stop offset="0.6875" stopColor="#8176AF" />
              <stop offset="0.994792" stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>

        <div className="footer__content--links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#how-to">How To</a>
            </li>
            <li>
              <a href="#opt-in">Join Hydra</a>
            </li>
          </ul>
        </div>

        <svg
          width="6"
          height="197"
          viewBox="0 0 6 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 196.5V0.5"
            stroke="url(#paint0_linear_13_75)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13_75"
              x1="2.99526"
              y1="1.42982"
              x2="77.322"
              y2="162.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#343045" />
              <stop stopColor="#343045" />
              <stop offset="0.348958" stopColor="#C0B7E8" />
              <stop offset="0.6875" stopColor="#8176AF" />
              <stop offset="0.994792" stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>

        <div className="footer__content--links">
          <ul>
            <li>
              <a href="/">F.A.Q</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
            <li>
              <a href="/">Conditions</a>
            </li>
            <li>
              <a href="/">Licenses</a>
            </li>
          </ul>
        </div>

        <svg
          width="6"
          height="197"
          viewBox="0 0 6 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 196.5V0.5"
            stroke="url(#paint0_linear_13_75)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13_75"
              x1="2.99526"
              y1="1.42982"
              x2="77.322"
              y2="162.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#343045" />
              <stop stopColor="#343045" />
              <stop offset="0.348958" stopColor="#C0B7E8" />
              <stop offset="0.6875" stopColor="#8176AF" />
              <stop offset="0.994792" stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>

        <div className="footer__content--socials">
          <span className="footer__content--socials__header">
            Socialize with Hydra
          </span>
          <div className="footer__content--socials__links">
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaPinterest />
            </a>
          </div>
          <Button
            href="#opt-in"
            className="btn btn-primary footer__content--socials__button"
            text="Build your world"
          />
        </div>
      </div>

      <svg
        width="1269"
        height="2"
        viewBox="0 0 1269 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
        <defs>
          <linearGradient
            id="paint0_linear_13_63"
            x1="1269"
            y1="1.00238"
            x2="3.52735e-07"
            y2="0.980001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343045" />
            <stop offset="0.348958" stopColor="#C0B7E8" />
            <stop offset="0.6875" stopColor="#8176AF" />
            <stop offset="1" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>

      <div className="footer__attribution">
        <span>2023 &copy; Hydra Landing Page</span>
        <span className="authors">
          Design by -{" "}
          <a
            href="https://www.figma.com/@zinefalouti"
            target="_blank"
            rel="noreferrer"
          >
            Zine. E. Falouti
          </a>
          - Coded by <a href="tel:+2349137720796">Chidera Emmanuel</a>
        </span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
