import React from 'react';
import './navbar.css';

import logo from '../../assets/datagrity_logo.svg';

const Navbar = () => {
  return (
    <div className='navbar row'>
      <a href="#"><img src={logo} alt="Datagrity logo" className='logo'/></a>
      <nav >
        <ul className='nav_menu'>
        <li><a href="https://docs.google.com/document/d/1Qdqcr9EtMW5arg_7CTPic0EiIMcYqK2SF1OHkFB_Lzc/edit?usp=sharing" target="blank">About</a></li>

          <li><a href="#features">Features</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="https://docs.google.com/presentation/d/1_eIeuRUzuteLY7m-3v3BnCIXUQRCdF5AlYJit4ynPZo/edit?usp=sharing" target='blank'>Presentation</a></li>
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