import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route,useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import './App.css';

function App() {
  let location = useLocation();
  // console.log(location);
  return (
  <div>
    <Header></Header>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/'>
            <Home></Home>
          </Route>
        <Route path="/about">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;
