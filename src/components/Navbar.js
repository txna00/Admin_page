import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bettertogether Pests</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">USERS</a></li>
        <li><a href="/about">NEWS & EVENT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;