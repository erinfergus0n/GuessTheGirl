import React from 'react';
import './App.css'; 
import { useNavigate } from "react-router-dom";  
import Footer from './components/footer';
import NavigationBar from './components/NavBar';


const App = () => {
  const navigate = useNavigate();  

  const goToDifficultyPage = () => {
    navigate("/difficulty");  
  };

  const goToHowToPlayPage = () => {
    navigate("/howtoplay"); 
  };
  
  return (
    <div>
      <NavigationBar />
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="app_header">Guess the Girl</div>

      <div className="app_font">
        A classic game of deduction using all your <br />
        favourite female artists
      </div>


      <button className="play_button" onClick={goToDifficultyPage}>Play</button>
      <button className="how_to_button" onClick={goToHowToPlayPage}>How to Play</button>

      <Footer /> 
    </div>
  );
}

export default App;
