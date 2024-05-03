import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BTECH Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @btechburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/shivam-gupta-57329123a/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/increvil_shivam_/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/ShivamGupta0306">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
