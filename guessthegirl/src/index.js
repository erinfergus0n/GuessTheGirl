import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing React Router components
import Difficulty from "./pages/difficulty";  // Import the new Difficulty component
import AboutPage from './pages/about'; // Import the 'About' page
import Game from './pages/easygame';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Creators from './pages/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <Routes>
      <Route path="/" element={<App />} />         {/* The Home page */}
      <Route path="/difficulty" element={<Difficulty />} />  {/* The Difficulty page */}
      <Route path="/about" element={<Creators />} /> {/*The About page */}
      <Route path="/easygame" element={<Game />} /> {/*The easy game page */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
