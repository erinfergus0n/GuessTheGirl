import React from 'react';
import './difficulty.css'; // Import the CSS file for styling
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";  // Importing useNavigate for navigation

const DifficultyPage = () => {
  const navigate =useNavigate();

  const goToEasyGame =() => {
    navigate("/easygame");
  };
return (
<div>
<NavigationBar />
<div className="app_header">Select <br></br>difficulty level</div>
<div className="DifficultyContainer"> 
  <div className ="DifficultyLevel">
  <button className="difficulty-button" onClick={goToEasyGame}>Easy</button> 
  <p>10 guesses</p> 
</div> 
  <div className ="DifficultyLevel">
  <button className="difficulty-button">Medium</button> 
  <p>6 guesses</p> 
</div>
<div className ="DifficultyLevel">
  <button className="difficulty-button">Hard</button> 
  <p>3 guesses</p> 
  <Footer /> 
  </div> 
  </div> 
  </div> 
  )
}

   export default DifficultyPage;