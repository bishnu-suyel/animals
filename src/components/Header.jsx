import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  return (
    <header>
      <Link>
<h1>Zoo</h1>
</Link>
<nav>
  <ul>
    <li>
      <NavLink to ="/">Home</NavLink>
    </li>
    <li>
      <NavLink to ="/animals">Animals</NavLink>
    </li>
    <li>
      <NavLink to ="/birds">Birds</NavLink>
    </li>
    <li>
      <NavLink to ="/insects">Insects</NavLink>
    </li>
    <li>
      <NavLink to ="/fishes">Fishes</NavLink>
    </li>
    <li>
      <NavLink to ="/about">About</NavLink>
    </li>
  </ul>
</nav>
<div className="search-box">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

    </header>
    
  );
};

export default Header;