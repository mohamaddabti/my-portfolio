import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";
import '../index.css'


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'deop grid grid-rows-4 text-center items-center '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/post' className='p-4 text-gray-50 hover:text-red-100'>
        BLOG
      </Link>
      <Link to='/gallery' className='p-4 text-gray-50 hover:text-red-100'>
        Gallery
      </Link>
      <Link to='/project' className='p-4 text-gray-50 hover:text-red-100'>
        PROJECT
      </Link>
      <Link to='/about' className='p-4 text-gray-50 hover:text-red-100'>
        ABOUT ME!
      </Link>
      <div className="flex-center">
      <SocialIcon 
          url="https://www.facebook.com/mohammad.dabti/" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://www.youtube.com/user/MohamadDabti" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://twitter.com/MDabti" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35 }} 
        />
        <SocialIcon 
          url="https://www.linkedin.com/in/mohammad-dabti-509476215/" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://github.com/mohamaddabti" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />

        </div>
    </div>
  );
};

export default Dropdown;
