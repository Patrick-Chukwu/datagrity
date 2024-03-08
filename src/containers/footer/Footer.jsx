import React from 'react';

import logo from '../../assets/datagrity-logo.svg';

const Footer = () => {
  return (
    <div className='navbar'>
    <a href="#" className="logo"><img src={logo} alt="Datagrity logo" className='logo'/></a>
    <nav >
    <ul className='nav_menu row'>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
    </nav>
    <div className="nav_button">
    <button type='submit' className='login'>Login</button>
    <button type='submit' className='button'>Open account</button>

    </div>

  </div>
  )
}

export default Footer;