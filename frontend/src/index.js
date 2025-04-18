import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing React Router components
import Game from './pages/EasyGamePage';
import App from './App';
import Creators from './pages/AboutPage';
import DifficultyPage from './pages/DifficultyPage';
import SuggestionPage from './pages/SuggestionPage';
import FeedbackPage from './pages/FeedbackPage';
import StatsPage from './pages/StatsPage';
import HowToPage from './pages/HowToPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/difficulty" element={<DifficultyPage />} />  =
      <Route path="/about" element={<Creators />} /> 
      <Route path="/easygame" element={<Game />} /> 
      <Route path="/stats" element={<StatsPage />} /> 
      <Route path="/suggestion" element={<SuggestionPage />} /> 
      <Route path="/feedback" element={<FeedbackPage />} /> 
      <Route path="/howtoplay" element={<HowToPage />} /> 
      
          </Routes>
  </Router>
);


