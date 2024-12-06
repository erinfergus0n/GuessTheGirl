import React from 'react';
import '../App.css';// Import the CSS file for styling
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import Creators from '../components/CreatorInfo';

const AboutPage = () => {
  return (
  <div>
    <NavigationBar />
  <div className="app_header"> Meet the Creators </div>
  <Creators />
  <Footer />
  </div>  
  )
}

   export default AboutPage;