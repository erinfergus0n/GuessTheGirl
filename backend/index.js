
//SETUP

//ENSURE YOU HAVE NODE MODULES INSTALLED
const express = require("express");
const mysql = require("mysql2");

const app = express()
app.use(express.json())

//REPLACE PASSWORD WITH YOUR MYSQLWORKBENCH PASSWORD
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123Coldplay",
    database: "GTG"
})

//TEST CONNECTION
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected successfully!");
    }
});

//SETS PORT AND LOGS MESSAGE TO CONSOLE WHEN SERVER CONNECTION SUCCESSFUL

if (process.env.NODE_ENV !== "test") {
    const PORT = 3300;
    app.listen(3300, () => {
        console.log(`Connected to backend on PORT ${PORT}!`)
    })
}


//SIMPLE ENDPOINT TO CHECK CONNECTION
app.get("/", (req, res) => {
    res.json("Hello! This is the backend.")
})

//SHOW ALL ARTISTS IN DATABASE
app.get("/artists", (req, res) => {
    const sql = 'SELECT * FROM artists';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = { app, db };



//GAME ENDPOINTS

//GET RANDOM ARTIST
app.get("/artists/random", (req, res) => {
    const sql = 'SELECT * FROM artists ORDER BY RAND() LIMIT 1';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result[0]);
        }
    });
});

//CHECK GUESSED ARTIST WITH CORRECT ARTIST
app.post("/artists/guess", (req, res) => {
    const { guessedArtistId, correctArtistId } = req.body;

    if (!guessedArtistId || !correctArtistId) {
        return res.status(400).send({ message: 'Both guessedArtistId and correctArtistId are required.' });       
    }

    const sql = 'SELECT * FROM artists WHERE id = ?';
    db.query(sql, [correctArtistId], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.length === 0) {
            res.status(404).send({ message: 'Correct artist not found.' });
        } else {
            const isCorrect = guessedArtistId === correctArtistId;
            res.send({
                correct: isCorrect,
                correctedArtist: result[0],
            });
        }
    });
});

