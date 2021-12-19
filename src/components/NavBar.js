import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";
import image from "../media/mdd.png"
import '../index.css'

const Navbar = ({ toggle }) => {
  return (
    
    <nav
      className='navbar justify-content-between h-16 bg-gray-900 text-white '
      role='navigation'
    >
      <Link to='/' className=' text-4xl pl-16 text-gray-50 hover:text-red-50 font-bond cursive'>
        <img src={image}
        style={{height: 45,width: 45 }}
        className="inline-block"
        alt="logo"
        />
        MOHAMMAD DABTI
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
      <div className='pr-8 lg:block  hidden activeClassName="text-gray-100 bg-gray-700" text-white'>
        <Link to='/post' className='text-gray-50 p-4 hover:text-red-100 '>
          BLOG
        </Link>
        <Link to='/project' className='text-gray-50 p-4 hover:text-red-100' >
          PROJECT
        </Link>
        <Link to='/about' className='text-gray-50 p-4 hover:text-red-100' >
          ABOUT ME!
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
