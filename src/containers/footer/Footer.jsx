import React from 'react';

import './footer.css';

import logo from '../../assets/Datagrity.svg';

const Footer = () => {
  return (
    <div className='footer_bar row'>
    <a href="#" className="logo"><img src={logo} alt="Datagrity logo" className='footer_logo'/></a>
    <nav >
    <ul className='footer_menu row'>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
    </nav>
    <div className="nav_button">
    <button type='submit' className='login footer_login '>Login</button>
    <button type='submit' className='button'>Open account</button>

    </div>

  </div>
  )
}

export default Footer;