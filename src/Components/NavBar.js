import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from 'react-social-icons'

const NavBar = () => {
  return (
    <>
      <header className="bg-red-600">
        <div className="container mx-auto flex justify-between item-center">
          <nav className="flex">
            <NavLink className='inline-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest active:text-white' to='/'>Adarsh</NavLink>
            <NavLink className='inline-flex item-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-500 font-bold hover:bg-red-700 active:text-green-700' to='/post'>Blog Post</NavLink>
            <NavLink className='inline-flex item-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-500 font-bold hover:bg-red-700 active:text-green-700' to='/project'>Project</NavLink>
            <NavLink className='inline-flex item-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-500 font-bold hover:bg-red-700 active:text-green-700' to='/about'>About Me!</NavLink>
          </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://twitter.com/AdarshVerma/" className="mr-4" target="_blank" bgColor="#fff" style={{height:35, width:35}}/>
          <SocialIcon url="https://youtube.com/AdarshVerma/" className="mr-4" target="_blank" bgColor="#fff" style={{height:35, width:35}}/>
          <SocialIcon url="https://linkedin.com/AdarshVerma/" className="mr-4" target="_blank" bgColor="#fff" style={{height:35, width:35}}/>
        </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
