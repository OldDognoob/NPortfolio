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
    const frontendskills = ["HTML5","CSS","BOOTSTRAP","JAVASCRIPT","REACT", "REDUX"];
    const backendskills = ["NODE.JS","EXPRESS","MySQL", "SQL"];
    const familiar = ["NEXT.JS", "FIREBASE", "POSTMAN", "SASS","LESS"];
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

                    </p>
                </div>
                <div className="col-md-4">
                    <a
                      target="_blank"
                      href=""  
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
                        <div className
                </div>    
            </div>
        </motion.div>
    )
}
export default AboutMe;