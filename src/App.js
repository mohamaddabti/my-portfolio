import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/NavBar";
import Dropdown from './components/Dropdown';
import Gallery from "./components/Gallery";
import SinglePhoto from './components/singelPhoto';



function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  
  return (
    <BrowserRouter>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route component={Home} path = '/' exact />
          <Route component={About} path = '/about'/>
          <Route component={SinglePost} path = '/post/:slug'/>
          <Route component={Post} path = '/post'/>
          <Route component={Project} path = '/project'/>
          <Route component={Gallery} path = '/Gallery'/>
          <React component={SinglePhoto} path= '/SinglePhoto'></React>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
