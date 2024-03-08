import React from 'react';
import './navbar.css';

import logo from '../../assets/datagrity-logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#" className="logo"><img src={logo} alt="Datagrity logo" className='logo'/></a>
      <nav >
        <ul className='nav_menu'>
        <li><a href="#">About</a></li>

          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="">Contact &#9662;</a></li>
        </ul>
      </nav>
      <div className="nav_button">
      <button type='submit' className='login'>Login</button>
      <button type='submit' className='button'>Open account</button>

      </div>
 
    </div>
  )
}

export default Navbar;