import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faDesktop,
  faDownload,
  faEye,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div div className="container pb-5">
        <div className="row">
          <h1 className="brand-text mb-5">About Me</h1>
          <div className="col-md-8">
            <h2 className="text-white mb-3"></h2>
            <p className="text-white">
              I recently completed the Full Stack Web Development and Computer
              Science program at Lambda School (innovative, project-based
              software engineering academy based out of San Francisco, CA). <br />
              I'm inspired by creative and interesting web applications that are
              accessible and provide instant value to users. <br />
              <br />
              Driven by a passion for learning tools, I'm also incorporate  with new
              features and technologies. 
              <br />
              My mission is to try to make people's life better or at least not make it worst <br />
              <br />
              I'd love to chat with you about possible collaborations or if
              you'd like to know more about my work, take a look at my projects.
            </p>
          </div>
          <div className="col-md-4">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1E1b4xoL2lrFTJAcwOz66sce2JHYscesE2f2Svfg2vV8/edit"
            >
              <button className="btn brand-btn mt-5">
                Download Resume{""}
                <span>
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </span>
              </button>
            </a>
          </div>
        </div>
          </div>
    </motion.div>
  );
};
export default AboutMe;
