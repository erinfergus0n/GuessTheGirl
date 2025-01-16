import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing React Router components
import Game from './pages/easygame';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Creators from './pages/about';
import DifficultyPage from './pages/difficulty';
import SuggestionPage from './pages/suggestion';
import FeedbackPage from './pages/feedback';
import StatsPage from './pages/stats';
import HowToPage from './pages/howtoplay';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* The Home page */}
      <Route path="/difficulty" element={<DifficultyPage />} />  {/* The Difficulty page */}
      <Route path="/about" element={<Creators />} /> {/*The About page */}
      <Route path="/easygame" element={<Game />} /> {/*The easy game page */}
      <Route path="/stats" element={<StatsPage />} /> {/* The stats page */}
      <Route path="/suggestion" element={<SuggestionPage />} /> {/*The suggest an artist page */}
      <Route path="/feedback" element={<FeedbackPage />} /> {/*The feedback page */}
      <Route path="/howtoplay" element={<HowToPage />} /> {/*The how to page */}
      
          </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
