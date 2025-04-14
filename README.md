# Guess The Girl

### About the Project
A Wordle-inspired, music-themed guessing game that celebrates female musical artists.  
Players have 10 chances to guess the artist of the day, guided by clues from their previous guesses.

This project was built as a collaborative group project.  
I focused on backend endpoints and game logic, as well as simple testing.
<br>
![image](https://github.com/user-attachments/assets/8e3282d5-237b-4cec-89d9-7707572852b8)

### Frameworks and Libraries
- React.js 
- Express.js
- Node.js
- MySQL
- Axios
- dotenv
- cors
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons

## Features

#### Pages
<li> Homepage
<li> Difficulty Selection Page 
<li> Game Page 
<li> How to Play Page
<li> About us page

#### Components
<li> Navigation Bar 
<li> Hamburger Menu
<li> Footer with social media links


## Getting Started

### Prerequisites

- Node.js  
- Npm  
- MySQL installed and running  
- IDE (e.g. VS Code)  
- Browser (e.g. Chrome) 


### Installation 

Step 1: Clone the Repository. 

Step 2: Install dependencies.
<br> 
`npm install` 
<br>
`npm install --prefix frontend`

Step 3: Set up environment variables.
<br>
Create a .env file in the root directory and add...

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=5001
```

Step 4. Build the front-end.
<br>
`npm run build`


### Running the Application 

`npm start`

## Testing 

### Front-End

`npm test --prefix frontend`

### Back-End

`npm test`

### Testing Endpoints in Postman

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


