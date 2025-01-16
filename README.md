# Guess The Girl
<h2>A full-stack group project</h2>

### About the Project
Guess The Girl is a music-themed game app, inspired by the popular game Wordle. <br>
Players are given 10 attempts to guess the female musical artist of the day using clues based on their previous attempts. <br>
This fun game is suitable for puzzle novices to enthusiasts. Uniquely, the game also focuses on female musical artists and brings a spotlight to women in the music industry. <br>
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
<li> Feedback Page (under construction)

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

Step 2: Open a project in an IDE

Step 3: Install dependecies using npm 

Step 4. Configure .env file in the backend directory (environment variables)

<li> DB_PASSWORD='enter your SQL root password here'

### Running the Application (in development mode)

Step 1: Navigate to the backend directory

<li> cd backend

Step 2: Start the backend server by running 'node server.js' in the terminal 

Step 3: Verify the backend is working by opening localhost:5000 in a browser

Step 1: Start the application by running 'npm start' in the terminal

Step 2: Open localhost:3000 in a browser (if not automatically opened)

## Testing Front-End

`cd frontend` then `npm test`

## Testing Back-End

`cd backend` then `npm test`

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


