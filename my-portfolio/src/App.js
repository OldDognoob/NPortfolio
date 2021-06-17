import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useLocation} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import { AnimatePresence } from "framer-motion";
import './App.css';

function App() {
  let location = useLocation();
  return (
  <Router>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/'>
            <Home></Home>
          </Route>
        <Route path="/about">
          <AboutMe></AboutMe>
        </Route>
      </Switch>
    </AnimatePresence>
    </Router>
  );
}

export default App;
