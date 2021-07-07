import React from "react";
import Masonry from "react-masonry-css";

/*Projects*/
import movieApp from "../images/MovieApp.png";


import {motion} from"framer-motion";
import SingleProject from "./SingleProject";

/*Project css */
import "./Project.css";

const Projects = () => {
    const projects =[
        {
            img:"movieApp",
            title:"MovieApp",
            description:"",
            technology:[],
            livesite:"",
            github:"https://github.com/OldDognoob/MovieApp/tree/master/movie-app"
        },
        {
            img:"",
            title:"",
            description:"",
            technology:[],
            livesite:"",
            github:""
        },
        {
            img:"",
            title:"",
            description:"",
            technology:[],
            livesite:"",
            github:""
        },
        {
            img:"",
            title:"",
            description:"",
            technology:[],
            livesite:"",
            github:""
        },
        {
            img:"",
            title:"",
            description:"",
            technology:[],
            livesite:"",
            github:""
        },
        {
            img:"",
            title:"",
            description:"",
            technology:[],
            livesite:"",
            github:""
        },
    ];
    const breakpointColumnsObj = {
        default:3,
        1100:2,
        700:2,
        500:1
    };
    return(
        <motion.div
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0.5}}
        transition={{duration:0.5}}
        >
            <div className="container">
                <h2 className="brand-text mb-5">My Projects:</h2>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                    {projects.map((project)=>(
                        <SingleProject project={project}></SingleProject>
                    ))}
                </Masonry>
            </div>
        </motion.div>
    );
};
export default Projects;
