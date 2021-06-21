import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-white-800'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/post' className='p-4'>
        BLOG
      </Link>
      <Link to='/project' className='p-4'>
        PROJECT
      </Link>
      <Link to='/about' className='p-4'>
        ABOUT ME!
      </Link>
    </div>
  );
};

export default Dropdown;
