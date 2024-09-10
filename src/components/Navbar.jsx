import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-gradient-to-r 
                    from-green-400 via-orange-200 
                    to-yellow-200 backdrop-blur-sm p-6">
      <div className="flex items-center justify-between 
                      z-10 relative">
        <div className="relative hover:scale-110 
                        hover:text-yellow-300">
          <Link to="/" className="text-4xl font-bold text-white">Eventify</Link>
        </div>

        <div className={`flex-1 justify-center md:flex md:space-x-10 
                        ${isOpen ? 'flex flex-col items-center space-y-4 mt-4' : 'hidden'} 
                        md:flex md:flex-row`}>
          <Link to="/" className="text-lg text-white font-bold 
                                  relative px-4 py-2 hover:text-yellow-400 
                                  hover:scale-105">
            Home
          </Link>
          <Link to="/register" className="text-lg text-white font-bold 
                                          relative px-4 py-2 hover:text-green-300 
                                          hover:scale-105">
            About us
          </Link>
          <Link to="/register" className="text-lg text-white font-bold 
                                          relative px-4 py-2 hover:text-green-300 
                                          hover:scale-105">
            Contact us
          </Link>
          <Link to="/registration" className="text-lg text-white font-bold 
                                      relative px-4 py-2 hover:text-red-300 
                                      hover:scale-105">
            Sign up
          </Link>
          <Link to="/login" className="text-lg text-white font-bold 
                                      relative px-4 py-2 hover:text-red-300 
                                      hover:scale-105">
            Sign in
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative group transform 
                          hover:scale-110 hover:text-yellow-400">
            <Link to="/profile">
              <FaUser className="text-3xl text-white" />
            </Link>
          </div>
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full filter blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-20 rounded-full filter blur-xl animate-float"></div>
    </nav>
  );
};

export default Navbar;
