import React from 'react'; 
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons"> {/* Container for the social media icons and links */}
            <a href="https://www.facebook.com/"> {/*Link to the 'Guess The Girl' Facebook page */}
            <FontAwesomeIcon icon={faFacebook} /> {/*Specifies to insert the 'faFacebook' icon by Font Awesome */}
            </a>
            <a href="https://www.tiktok.com/en/"> {/*Link to the 'Guess The Girl' Tik Tok page */}
            <FontAwesomeIcon icon={faTiktok} /> {/*Specifies to insert the 'faTiktok' icon by Font Awesome */}
            </a>
            <a href="https://www.instagram.com/"> {/*Link to the 'Guess The Girl' Instagram page */}
            <FontAwesomeIcon icon={faInstagram} /> {/*Specifies to insert the 'faInstragram' icon by Font Awesome */}
            </a>
            </div>
        </footer>
        ); };

export default Footer;