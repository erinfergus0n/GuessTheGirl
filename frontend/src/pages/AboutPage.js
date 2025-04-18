import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
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