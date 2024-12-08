import React from 'react';
import '../App.css';// Import the CSS file for styling
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import Creators from '../components/CreatorInfo';

const AboutPage = () => {
  return (
  <div>
    <NavigationBar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div className="app_header"> Meet the Creators </div>
  <Creators />
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <Footer />
  </div>  
  )
}

   export default AboutPage;