import React, { useState } from 'react';
import './NavBar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Allows the use of Font Awesome icons
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Specifies the icons to import from fortawesome
import logo from '../logo.png'; // Imports the team logo
import help from '../help.png'; // Imports the image for the help button within the header

const NavigationBar = (props) => { 
  const [isNavOpen, setIsNavOpen] = useState(false);

  const activateNavbar = () => { 
    setIsNavOpen(!isNavOpen); 
  };

  return (
    <div> 
      <header className="header">
        <div className="header-left">
          <button className="navbar-activate" onClick={activateNavbar}> 
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="header-right">
        <a href="https://www.facebook.com/?locale=en_GB">
           <img src={help} alt="How to play Icon" className="help-icon" /> 
           </a>
           </div>
      </header>
      <div className={`nav ${isNavOpen ? 'open' : ''}`}>
        <button className="exit-button" onClick={activateNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <a href="https://www.facebook.com/?locale=en_GB">How to play</a>
        <a href="/about">About us</a>
        <a href="https://www.facebook.com/?locale=en_GB">Feedback</a>
        <a href="https://www.facebook.com/?locale=en_GB">Suggest an artist</a>
      </div>
    </div>
  );
};

export default NavigationBar; 
