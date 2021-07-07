import React from "react";
import Masonry from "react-masonry-css";

/*Projects*/
import MovieApp from "../images/movieApp.png";
import Bettiorium from "../images/Bettiorium.png";
import HangMan from "../images/HangMan.png";
import QuizHooks from "../images/QuizHooks.png";
import TodoFast from "../images/TodoFast.png";
import FoodAPI from "../images/FoodAPI.png";


import {motion} from"framer-motion";
import SingleProject from "./SingleProject";

/*Project css */
import "./Project.css";

const Projects = () => {
    const projects =[
        {
            img:MovieApp,
            title:"MovieApp",
            description:"An app of finding movies",
            technology:["REACT"],
            livesite:"https://movie-app-cyan-psi.vercel.app/",
            github:"https://github.com/OldDognoob/MovieApp/tree/master/movie-app"
        },
        {
            img:Bettiorium,
            title:"Bettiorium",
            description:"A social website for a group of crazy friends",
            technology:["REACT","AXIOS","REACT-PLAYER","STYLED-COMPONENTS"],
            livesite:"https://bettiorium.vercel.app/",
            github:"https://github.com/OldDognoob/Bettiorium"
        },
        {
            img:HangMan,
            title:"HangMan",
            description:"A simple game of finding the correct word, otherwise we hang the man!",
            technology:[],
            livesite:"https://hang-man-christidisdimosthenis.vercel.app/",
            github:"https://github.com/OldDognoob/HangMan"
        },
        {
            img:TodoFast,
            title:"TodoFast",
            description:"A nice color todo list for Maria!",
            technology:["REACT",""],
            livesite:"https://todo-fast.vercel.app/",
            github:"https://github.com/OldDognoob/TodoFast"
        },
        {
            img:QuizHooks,
            title:"QuizHooks",
            description:"A quiz game of five questions based on React Hooks",
            technology:["REACT","REACT-HOOKS"],
            livesite:"https://quiz-hooks.vercel.app/",
            github:"https://github.com/OldDognoob/QuizHooks"
        },
        {
            img:FoodAPI,
            title:"FoodAPI",
            description:"Searching for new food recipes",
            technology:["REACT","AXIOS"],
            livesite:"https://food-api-six.vercel.app/",
            github:"https://github.com/OldDognoob/FoodAPI"
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
                    {
                    projects.map(project=>
                        <SingleProject project={project}></SingleProject>)
                    }
                </Masonry>
            </div>
        </motion.div>
    );
};
export default Projects;
