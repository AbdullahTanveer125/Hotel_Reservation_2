import React from "react";
import "./Footer.css";

import {AiFillFacebook} from "react-icons/ai"//to add an icon
import {AiFillInstagram} from "react-icons/ai"//to add an icon
import {BsYoutube} from "react-icons/bs"//to add an icon
import { Link } from "react-router-dom";




function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit vel sodales lobortis.</p>
        </div>
        <div className="footer__section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/" target="_blank"> <AiFillFacebook /> </a>
            <a href="https://www.instagram.com/" target="_blank"> <AiFillInstagram /> </a>
            <a href="https://www.youtube.com/" target="_blank"> <BsYoutube /> </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Hotel Example. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;