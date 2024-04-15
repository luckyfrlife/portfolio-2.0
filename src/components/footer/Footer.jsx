import React from "react";
import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>

          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>

          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Luique</span>. All rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Lucky</span>{" "}
        </p>
      </div>
    </footer>
  );
};
