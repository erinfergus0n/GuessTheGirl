// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Joanna: My favourtie hobbies are anything sport related. I particulary enjoy horse-riding and swimming. I also enjoy watching Formula 1.
//           Erin: My favourite hobby is playing guitar. I love to play gigs with my friends.
//           Annie: My favourite hobby is baking. I enjoy baking because it can be hard to find good vegan bakes.
//           Nesrin: My favourite hobby is reading and buying too many books. I read because I find it relaxing.
//           Sruti: My favourite hobby is cooking. I love doing this as I get to eat good food at the end!
//           Laura: My favourite hobby is swimming. I grew up by the water and this is something I have always done to relax.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import './App.css'; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";  // Importing useNavigate for navigation
import Footer from './components/footer';
import NavigationBar from './components/NavBar';


const App = () => {
  const navigate = useNavigate();  // Initialise navigate function

  const goToDifficultyPage = () => {
    navigate("/difficulty");  // Navigate to the Difficulty page
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
      <button className="how_to_button">How to Play</button>

      <Footer /> {/* Adds the Footer component to the bottom of the page */}
    </div>
  );
}
// Imported footer component
export default App;
