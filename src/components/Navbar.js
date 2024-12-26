import React from 'react';
import { NavLink } from 'react-router-dom';
import moivelogo from '../moive-app.jpg';
import { Search } from 'lucide-react';
import './All.css';

const Navbar = ({ ivalue, setivalue }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-around items-center h-[70px]">
        <header>
        <img src="https://png.pngtree.com/png-clipart/20240629/original/pngtree-the-logo-of-movie-app-is-colored-vector-png-image_15438308.png" alt="Movie Website Logo" className='h-auto w-[80px] flex-grow-2'/>

        </header>

        <NavLink id='nav1'
          className="font-bold font-Roboto text-2xl hover:text-blue-400 transition duration-300"
          to="/"
        >
          Home
        </NavLink>

        <NavLink id='nav1'
          className="font-bold text-2xl font-Roboto hover:text-blue-400 transition duration-300"
          to="/my-collections"
        >
          My Collection
        </NavLink>

        <div className="relative w-[500px]">
          <input
            value={ivalue}
            onChange={(e) => setivalue(e.target.value)}
            className="w-full border rounded-lg pl-4 py-2 text-black font-medium text-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Movie..."
          />
          <Search className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
