import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ height: "100vh", marinTop: "-56" }}>
        <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Hello,</h1>
          <h1>I am Dimos, a</h1>
          <h1>
            <span className="brand-text">
              <Typewriter
                options={{
                  strings: [
                    "Junior Developer",
                    "Junior Engineer",
                    "Junior Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  delay: 50,
                }}
              />
            </span>
          </h1>
          <div className="social-links mt-">
            <button className="btn btn-dark m-3">
              <a target="_blank" href="https://github.com/OldDognoob">
                GitHub{""}
                <span>
                  <FontAwesomeIcon
                    className="homeicon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </span>
              </a>
            </button>
            <button className="btn btn-primary m-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/dimoschristidis/"
              >
                LinkedIn{""}
                <span>
                  <FontAwesomeIcon
                    className="homeicon"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </span>
              </a>
            </button>
          </div>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1E1b4xoL2lrFTJAcwOz66sce2JHYscesE2f2Svfg2vV8/edit"
          >
            <button className="btn brand-btn">
              Download Resume{" "}
              <span>
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
              </span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
