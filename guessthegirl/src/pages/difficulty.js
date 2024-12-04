import React from 'react';
import './difficulty.css'; // Import the CSS file for styling
import Footer from '../components/footer';

const DifficultyPage = () => {
return (
<div>
<div className="app_header">Select <br></br>difficulty level</div>
<div className="DifficultyContainer"> 
  <div className ="DifficultyLevel">
  <button className="difficulty-button">Easy</button> 
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