
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
// import {
//   faBootstrap,
//   faHtml5,
//   faCss3,
//   faJs,
//   faSass,
//   faReact,
//   faPython,
//   faNodeJs,
//   faExpress,
//   faLess,
// } from "@fortawesome/free-brands-svg-icons";
// import { Row, Col, Container } from "react-bootstrap";
import {
  faDesktop,
  faDownload,
  faEye,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  // const frontendskills = [
  //   "HTML5",
  //   "JAVASCRIPT",
  //   "CSS",
  //   "REACT",
  //   "REDUX"
   
  // ];
  // const backendskills = ["NODE.JS", "EXPRESS"];
  // const database = ["PostgreSQL", "MS-SQL", "SQL", "MongoDB"];
  // const programming = ["PYTHON"];
  // const version = ["GITHUB","GIT"];
  // const familiar = ["NEXT.JS","SASS", "LESS", "BOOTSTRAP","MATERIAL-UI","TAILWIND"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div div className="container pb-5">
        <div className="row">
          <h1 className="brand-text mb-5">My Skills Set</h1>
          <div className="col-md-8">
            <h2 className="text-white mb-3"></h2>
          </div>
        </div>
        <div className="row mt-5 text-center mb-5">
          <div className="col-md-4">
            <div className="service-box">
              <h4 className="brand-text">Frontend skills: </h4>
              {/* {frontendskills.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div>
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
            <div className="service-box1">
              <h4 className="brand-text">Programming Language: </h4>
              {/* {programming.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box2">
              <h4 className="brand-text">Version Control: </h4>
              {/* {version.map((skill) => (
                <span className="singleSkill">{skill}</span>
              ))} */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box3">
              <h4 className="brand-text">Familiar with: </h4>
              {/* {familiar.map((skill) => (
                <span className="lowskill">{skill}</span>
              ))} */}
            </div>
          </div>
          </div>
          </div>
    </motion.div>
  );
};
export default Skills;
