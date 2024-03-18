import React,{ useState} from 'react';
import './navbar.css';

import logo from '../../assets/datagrity_logo.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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

      <button className={isOpen ? 'hamburger open' : 'hamburger' } onClick={toggleMenu}>

        {
          isOpen ? <div className='times'>&times;</div> :
          <div  className='barparent'>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        }
      </button>

      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="https://docs.google.com/document/d/1Qdqcr9EtMW5arg_7CTPic0EiIMcYqK2SF1OHkFB_Lzc/edit?usp=sharing" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={toggleMenu}>Features</a>
          </li>
          <li className="nav-item">
            <a href="#models" className="nav-link" onClick={toggleMenu}>Models</a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link" onClick={toggleMenu}>Team</a>
          </li>
          <li className="nav-item">
            <a href="https://docs.google.com/presentation/d/1_eIeuRUzuteLY7m-3v3BnCIXUQRCdF5AlYJit4ynPZo/edit?usp=sharing" className="nav-link" onClick={toggleMenu}>Presentation</a>
          </li>
        </ul>
 
    </div>
  )
}

export default Navbar;