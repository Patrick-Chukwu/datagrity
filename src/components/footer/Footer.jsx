import React from 'react';
import logo from '../../assets/datagrity_logo.svg';


const Footerbar = () => {
  return (
      <div className='footer_bar'>
        <a href="#" className="logo"><img src={logo} alt="Datagrity logo" className='logo'/></a>
        <nav >
        <ul className='footer_menu row'>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        </nav>
        <div className="footer_button">
        <button type='submit' className='login'>Login</button>
        <button type='submit' className='button'>Open account</button>
  
        </div>
   
      </div>
  )
}

export default Footerbar;