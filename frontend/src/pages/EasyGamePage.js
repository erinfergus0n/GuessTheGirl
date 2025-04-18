import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Game.css';
import { useNavigate } from "react-router-dom";  


const Game = () => {
  const [artists, setArtists] = useState(null);
  const [guessedArtist, setGuessedArtist] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [matchingAttributes, setMatchingAttributes] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const [showGiveUpPopup, setShowGiveUpPopup] = useState(false); 
  const maxGuesses = 10;

  const navigate =useNavigate();
  const goToHome =() => {
    navigate("/");
  };

  useEffect(() => {
    axios.get('http://localhost:5001/api/daily-artist')
      .then(response => {
        console.log('getting daily artist from API...');
        setArtists(response.data[0] || null);
      })
      .catch(error => {
        console.error('Error fetching artist:', error);
      });
  }, []);

  console.log('Current artists data:', artists);

  const handleGuess = () => {
    if (!guess || !artists || guessCount >= maxGuesses) return;

    axios.post('http://localhost:5001/api/guess', { guess, correctArtistId: artists.id })
      .then(response => {
        const { guessedArtist, correctArtist, matchingAttributes } = response.data;

        if (guessedArtist && correctArtist) {
          if (guessedArtist.name.toLowerCase() === correctArtist.name.toLowerCase()) {
            setMessage('');
            setShowPopup(true); 
          }

          const updatedMatchingAttributes = matchingAttributes.map((match) => {
            const isClose = calculateCloseness(match.guessed, match.correct, match.attribute);
            return { ...match, isClose };
          });

          setPreviousGuesses(prevGuesses => [
            { name: guessedArtist.name, attributes: [...updatedMatchingAttributes] },
            ...prevGuesses,
          ]);

          setGuessedArtist(guessedArtist);
          setMatchingAttributes(updatedMatchingAttributes);
          setGuessCount(guessCount + 1);
          setGuess('');
          setHasSubmitted(true);
        } else {
          setMessage('Error, could not retrieve artist data.');
        }
      })
      .catch(error => {
        console.error('Error fetching guessed artist:', error);
        setMessage('Error, artist not currently in database.');
      });
  };

  const handleGiveUp = () => {
    if (artists) {
      setShowGiveUpPopup(true); 
    }
  };

  const calculateCloseness = (guessedValue, correctValue, attribute) => {
    const tolerance = attribute === 'debut_year' ? 5 : 50;
    const difference = Math.abs(guessedValue - correctValue);
    return difference <= tolerance;
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowGiveUpPopup(false);
  };

  return (
    <div className="scrollable-container">
      {artists ? (
        <div>
          <div className={`controls ${hasSubmitted ? 'submitted' : ''}`}>
            <input
              id="input-field"
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button id="submitbutton" onClick={handleGuess}>Submit</button>
            <p>{message}</p>
            <div className="guess-count">
              Guesses: <span>{guessCount}</span> / {maxGuesses}
            </div>
          </div>

          {guessedArtist && guessCount <= maxGuesses && (
            <div className="game-container">
              <div className="name-and-attributes">
                <div className="artist-name">{guessedArtist.name}</div>
                <div className="attribute-titles">
                  {matchingAttributes.map((match, index) => (
                    <div key={index} className="attribute-title">
                      {match.attribute}
                    </div>
                  ))}
                </div>
              </div>
              <div className="name-and-attributes">
                <div className="empty-placeholder"></div>
                <div className="attribute-tiles">
                  {matchingAttributes.map((match, index) => (
                    <div
                      key={index}
                      className={`attribute-tile ${
                        match.isMatch ? 'correct' : match.isClose ? 'close' : 'incorrect'
                      }`}
                    >
                      {match.guessed}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {previousGuesses.slice(1).map((prevGuess, index) => (
            <div key={index} className="game-container previous-guess">
              <div className="name-and-attributes">
                <div className="artist-name">{prevGuess.name}</div>
                <div className="attribute-titles hidden"></div>
              </div>
              <div className="name-and-attributes">
                <div className="empty-placeholder"></div>
                <div className="attribute-tiles">
                  {prevGuess.attributes.map((attr, attrIndex) => (
                    <div
                      key={attrIndex}
                      className={`attribute-tile ${
                        attr.isMatch ? 'correct' : attr.isClose ? 'close' : 'incorrect'
                      }`}
                    >
                      {attr.guessed}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}



          <button className="give-up" onClick={handleGiveUp}>Give up</button>

          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <button className="popup-close" onClick={closePopup}>X</button>
                <h2>You Guessed The Girl in {guessCount} guesses!</h2>
                <div className="popup-artist">
                  <div className="artist-photo-placeholder"></div>
                  <p className="pop-artist-name">{guessedArtist.name}</p>
                </div>
                <div className="popup-buttons">
                  <button className="popup-button">View Results</button>
                  <button className="popup-button">Share Results</button>
                  <button className="popup-button" onClick={goToHome}>Return to Homepage</button>
                </div>
              </div>
            </div>
          )}

          {showGiveUpPopup && (
            <div className="popup">
              <div className="popup-content">
                <button className="popup-close" onClick={closePopup}>X</button>
                <h2>Today's girl was...</h2>
                <div className="popup-artist">
                  <div className="artist-photo-placeholder"></div>
                  <p className="pop-artist-name">{artists.name}</p>
                </div>
                <p>Better luck tomorrow!</p>
                <div className="popup-buttons">
                  <button className="popup-button" onClick={goToHome}>Return to Homepage</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Game;
