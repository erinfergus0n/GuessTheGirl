import './howtoplay.css'; // Import the CSS file for styling

const HowToPage = () => {
return (
<div>
<div className="app_header">How to Play</div>
<div className="HowToDifficultyContainer"> 
    <div className="pink-box">
    <h1>Guess the Girl</h1>
    <p><strong>Your Goal:</strong></p>
    <p>Guess the mystery female artist using a limited number of guesses. Can you solve the puzzle and uncover the star?</p>
    <p><strong>Game Rules:</strong></p>
    <ul>
      <li>The game will select a random female artist along with personal details including country, genre, debut year, and more.</li>
      <li>You have a limited number of attempts to guess the correct artist depending on which difficulty you choose.</li>
    </ul>
    <p><strong>How to Play:</strong></p>
    <ul>
      <li>Type an artist's name into the search box and click <strong>Enter</strong>.</li>
      <li>The game will highlight each attribute of your guess:</li>
      <ul>
        <li><span className="green-text">Green:</span> Correct.</li>
        <li><span className="orange-text">Amber:</span> Almost.</li>
        <li><span className="grey-text">Grey:</span> Incorrect.</li>
        </ul>
    </ul>
    <p><strong>Hints and Strategy:</strong></p>
    <ul>
      <li>Use the feedback from each guess to refine your next guesses.</li>
      <li>Eliminate wrong possibilities and focus on matching green-highlighted attributes.</li>
    </ul>
    <p><strong>Win/Lose:</strong></p>
    <ul>
      <li>Win by guessing the artist within the allowed attempts.</li>
      <li>If you can’t guess correctly, the game reveals the answer after your attempts are up.</li>
      <li>You will also have the option to <strong>Give Up</strong> if you wish for the answer to be revealed.</li>
    </ul>
    <p>Enjoy solving the mystery and guessing the girl! 🎶</p>
  </div>
  </div>
  </div>
  
)}
   export default HowToPage;