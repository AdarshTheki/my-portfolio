import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';
import SinglePost from './Components/SinglePost';
import Project from './Components/Project';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact Component={Home} path="/"/>
        <Route Component={About} path="/about"/>
        <Route Component={SinglePost} path="/post:slug"/>
        <Route Component={Post} path="/post"/>
        <Route Component={Project} path="project"/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
