import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";
//import image from "../media/mdd.png"
import '../index.css'

const Navbar = ({ toggle }) => {
  return (
    
    <nav id='navColor'
      className='navbar flex-wrap h-16 shadow p-2 rounded'
      role='navigation'
    >
      <Link to='/' className=' text-4xl text-gray-900 hover:text-gray-50 font-bond cursive'>
        
      {"{"}MOHAMMAD DABTI{"}"}
      </Link>
      <div className='px-4 cursor-pointer lg:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='blog pr-1 lg:block  hidden activeClassName="text-gray-100 bg-gray-700" text-white'>
        
        <Link to='/project' className='project text-gray-900 p-4 hover:text-gray-50' >
          Projects
        </Link>
        <Link to='/post' className='text-gray-900 p-4 hover:text-gray-50'>
          Blog
        </Link>
        <Link to='/gallery' className='Gallery text-gray-900 p-4 hover:text-gray-50' >
          Gallery
        </Link>
        <Link to='/Contact' className='about text-gray-900 p-4  hover:text-gray-50' >
          Contact
        </Link>
        
        <SocialIcon 
          url="https://www.facebook.com/mohammad.dabti/" 
          className="mr-4" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://www.youtube.com/user/MohamadDabti" 
          className="mr-4" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://twitter.com/MDabti" 
          className="mr-4" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://www.linkedin.com/in/mohammad-dabti-509476215/" 
          className="mr-4" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
        <SocialIcon 
          url="https://github.com/mohamaddabti" 
          className="mr-4" 
          target="_blank" 
          fgColor="#fff" 
          style={{height: 35,width: 35}} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
