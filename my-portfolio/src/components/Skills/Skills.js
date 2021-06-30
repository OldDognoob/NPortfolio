import React from "react";
import {
  faBootstrap,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faReact,
  faPython,
  faNodeJs,
  faExpress,
  faLess,
} from "@fortawesome/free-brands-svg-icons";
import {
    faDesktop,
    faDownload,
    faEye,
    faMobile,
  } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      >
      <div style={{ minHeight: "100vh" }} className="container">
      <h3 className="text-center mt-5">My Skills Set</h3>
        <div className="row mt-5 text-center mb-5">
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Frontend skills: </h4>
              {/* {frontendskills.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
           <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Backend skills: </h4>
              {/* {backendskills.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div> 
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Database skills: </h4>
              {/* {database.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div> 
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Programming Language: </h4>
              {/* {programming.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Version Control: </h4>
              {/* {version.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div> 
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Familiar with: </h4>
              {/* {familiar.map((skill) => (
                <span className="lowskill">{skill}</span>
              ))} */}
            </div>
          </div>
            </div>
          </div> 
            <a target="_blank" 
            href=""
            >
              <button className="btn brand-btn mt-5">
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
export default Skills;