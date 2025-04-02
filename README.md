# Guess The Girl

### About the Project
A Wordle-inspired, music-themed guessing game that celebrates female musical artists.  
Players have 10 chances to guess the artist of the day, guided by clues from their previous guesses.

This project was built as a collaborative group project.  
I focused on backend endpoints and game logic, as well as simple testing.
<br>
![image](https://github.com/user-attachments/assets/8e3282d5-237b-4cec-89d9-7707572852b8)

### Frameworks and Libraries
<li> React.js 

### Features

#### Pages
<li> Homepage
<li> Difficulty Selection Page 
<li> Game Page 
<li> How to Play Page
<li> About us page

#### Components
<li> Navigation Bar 
<li> Hamburger Menu
<li> Footer (with social media links) 

## Getting Started

### Prerequisites

<li> Node.js 
<li> Npm 
<li> Express.js 
<li> Axios 
<li> Cors
<li> dotenv
<li> Mysql2
<li> Browser e.g. Chrome 
<li> IDE e.g. VS Code 
<li> @fortawesome/fontawesome-svg-core
<li> @fortawesome/free-solid-svg-icons

### Installation 

Step 1: Clone the Repository into a local folder

Step 2: Open the project in an IDE

Step 3: Install dependecies in backend **and** front end folders by running `npm install`

Step 4. Input your SQL password in the .env file in the backend directory 

<li> DB_PASSWORD='enter your SQL root password here'

### Running the Application (in development mode)

Step 1: `cd backend` > `node server.js`

Step 2: `cd frontend` > `npm start`

## Testing Front-End

`cd frontend` > `npm test`

## Testing Back-End

`cd backend` > `npm test`

## Testing Endpoints in Postman

- Get daily artist

**GET** http://localhost:5001/api/daily-artist

- Check player search with daily artist

**POST** http://localhost:5001/api/guess 

```
// Body - raw JSON
{
    "guess": "ariana grande",
    "correctArtistId": 1
}
```


