import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="md:w-full px-4 flex flex-wrap flex-col items-center justify-center text-white bg-black/70 py-4">
        <h6 className="mb-1 text-xl">Get in touch:</h6>
        <a href="mailto: cognitia@nitm.ac.in">cognitia@nitm.ac.in</a>
        <a href="mailto: roboticsclub@nitm.ac.in">roboticsclub@nitm.ac.in</a>
        <a href="mailto: codingclub@nitm.ac.in">codingclub@nitm.ac.in</a>
        <div>
          <a
            href="https://instagram.com/cognitia_nitm"
            target="_blank"
            rel="noopener noreferrer"
            className="my-3 mx-2"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a
            href="https://twitter.com/cognitia_nitm"
            target="_blank"
            rel="noopener noreferrer"
            className="my-3 mx-2"
          >
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a
            href="https://linkedin.com/company/cognitia-nit-meghalaya"
            target="_blank"
            rel="noopener noreferrer"
            className="my-3 mx-2"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCySRCqmwF_W_0lwLtUSFqmw/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-3 mx-2"
          >
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </a>
        </div>
        <div className="h-px bg-white/20 w-3/4 my-6"></div>
        <p className="mb-1">
          <small>© {currentYear} Cognitia - Tech Fest Of NIT Meghalaya</small>
        </p>
      </div>
    </>
  );
};

export default Footer;
