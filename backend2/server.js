const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();  // Loading environment variables from .env file
const db = require('../backend/db');  // Importing the database connection from db.js

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse incoming JSON requests

// Connect to the database
db.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err.stack);
  });  

// Endpoint to get a random "daily artist"
app.get('/api/daily-artist', (req, res) => {
  db.query('SELECT * FROM artists ORDER BY RAND() LIMIT 1')
    .then(results => {
      res.json(results[0]);  
    })
    .catch(err => {
      console.error("Error fetching daily artist:", err); 
      res.status(500).json({ error: 'Error fetching daily artist' });
    });
});

// POST endpoint for handling user guesses
app.post('/api/guess', (req, res) => {
  console.log('Received guess request:', req.body);

  const { guess, correctArtistId } = req.body;  
  if (!guess || !correctArtistId) {
    return res.status(400).json({ error: 'Both guess and correctArtistId are required.' });
  }

  // Normalizing guess to lowercase to handle case insensitivity
  const normalizedGuess = guess.trim().toLowerCase();  
  console.log('Normalized guess:', normalizedGuess); 

  db.query('SELECT * FROM artists WHERE LOWER(name) = ?', [normalizedGuess])
    .then(guessedArtistResults => {
      const guessedArtist = guessedArtistResults[0][0] || guessedArtistResults[0];

      console.log('Guessed Artist:', JSON.stringify(guessedArtist, null, 2));  

      if (!guessedArtist || guessedArtist.length === 0) {
        return res.status(404).json({ error: 'Artist not found' });
      }

      db.query('SELECT * FROM artists WHERE id = ?', [correctArtistId])
        .then(correctArtistResults => {
          const correctArtist = correctArtistResults[0][0] || correctArtistResults[0];  

          console.log('Correct Artist:', JSON.stringify(correctArtist, null, 2));  

          if (!correctArtist || correctArtist.length === 0) {
            return res.status(404).json({ error: 'Correct artist not found' });
          }

          const attributes = ['country', 'genre', 'star_sign', 'debut_year', 'spotify_ranking'];
          const matchingAttributes = attributes.map(attribute => ({
            attribute,
            guessed: guessedArtist[attribute],
            correct: correctArtist[attribute],
            isMatch: guessedArtist[attribute] === correctArtist[attribute],
          }));

          res.json({
            guessedArtist,
            correctArtist,
            matchingAttributes,
          });
        })
        .catch(err => {
          console.error('Error fetching correct artist:', err);
          res.status(500).json({ error: 'Error fetching correct artist' });
        });
    })
    .catch(err => {
      console.error('Error fetching guessed artist:', err);
      res.status(500).json({ error: 'Database error while fetching guessed artist' });
    });
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
