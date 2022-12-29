import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
// import image from "../media/mdd.png"
import '../index.css';

type Props = {
  toggle: () => void;
};

const Navbar = ({ toggle }: Props) => {
  return (
    <nav id="navColor" className="">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Link to="/" className="self-center text-4xl  text-gray-900 hover:text-gray-50 font-bond cursive">
            {'{'}MOHAMMAD DABTI{'}'}
          </Link>
        </div>

        <div
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggle}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className='hidden justify-between items-center w-full md:flex md:w-auto '>
              <div className='flex flex-col p-2 mt-40 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium '>

              
                <Link to='/project' className='block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-gray-900 p-2 hover:text-gray-50' >
                  Projects
                </Link>
                <Link to='/post' className='block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-gray-900 p-2 hover:text-gray-50 '>
                  Blog
                </Link>
                <Link to='/gallery' className='block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-gray-900 p-2 hover:text-gray-50' >
                  Gallery
                </Link>
                <Link to='/Contact' className='block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-gray-900 p-2 hover:text-gray-50' >
                  Contact
                </Link>

            <SocialIcon
              url="https://www.facebook.com/mohammad.dabti/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.youtube.com/user/MohamadDabti"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/MDabti"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/mohammad-dabti-509476215/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/mohamaddabti"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


