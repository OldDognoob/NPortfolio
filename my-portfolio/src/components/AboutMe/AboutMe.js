import React from "react";
import { FortAwesomeAIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faDesktop,
  faDownload,
  faEye,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
    const frontendskills = [
        "HTML5",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "REDUX",
        "PYTHON"
      ];
    const backendskills = ["NODE.JS","EXPRESS","MySQL", "SQL"];
    const familiar = ["NEXT.JS", "FIREBASE", "POSTMAN", "SASS","LESS", "BOOTSTRAP", "STYLE COMPONENTS"];
    return(
        <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.5}}
        transition={{duration: 0.5}}
        >
            <div className="container pb-5">
                <div className="row">
                <h1 className="brand-text mb-5">About Me</h1>
                <div className="col-md-8">
                    <h2 className="text-white mb-3"></h2>
                    <p className="text-white">
                    I recently completed the Full Stack Web Development and Computer Science program
                    at Lambda School (innovative, project-based software engineering academy based out of San Francisco, CA) 
                    I'm inspired by creative and interesting web applications that are accessible and provide instant value to users. <br />
                    <br />
                    Driven by a passion for learning tools, I'm also incorporate new features and technology. <br />
                    <br />
                    I'd love to chat with you about possible collaborations or if you'd like to know more about my work.
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
                    <h3 className="text-center mt-5">My Skills Set</h3>
                    <div className="row mt-5 text-center mb-5">
                    <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Frontend skills: </h4>
              {frontendskills.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Backend skills: </h4>
              {backendskills.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Familiar with: </h4>
              {familiar.map((skill) => (
                <span className="lowskill">{skill}</span>
              ))}
                </div>    
            </div>
            </div>
      </div>
        </motion.div>
    );
};
export default AboutMe;