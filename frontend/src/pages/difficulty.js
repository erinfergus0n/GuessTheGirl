import React from 'react';
import './difficulty.css'; 
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";  

const DifficultyPage = () => {
  const navigate =useNavigate();

  const goToEasyGame =() => {
    navigate("/easygame");
  };
return (
<div>
<NavigationBar />
   <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
<div className="app_header">Select <br></br>difficulty level</div>
<div className="DifficultyContainer"> 
  <div className ="DifficultyLevel">
  <button className="difficulty-button" id="difficulty-button-easy" onClick={goToEasyGame}>Easy</button> 
  <p>10 guesses.</p> 
</div> 
  <div className ="DifficultyLevel">
  <button className="difficulty-button" id="difficulty-button-medium">Medium</button> 
  <p>6 guesses. <br></br> Coming soon. <br></br></p> 
</div>
<div className ="DifficultyLevel">
  <button className="difficulty-button" id="difficulty-button-hard">Hard</button> 
  <p>3 guesses. <br></br> Coming soon. <br></br></p> 
  <Footer /> 
  </div> 
  </div> 
  </div> 
  )
}

   export default DifficultyPage;
