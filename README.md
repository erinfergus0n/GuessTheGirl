# Guess The Girl
<h2>CFG-Group-4 Project (Full Stack 2)</h2>

### About the Project
Guess The Girl is a music-themed game app, inspired by the popular game Wordle. <br>
Players are given 10 attempts to guess the female musical artist of the day using clues based on their previous attempts. <br>
This fun game is suitable for puzzle novices to enthusiasts. Uniquely, the game also focuses on female musical artists and brings a spotlight to women in the music industry. <br>
<br>
![image](https://github.com/user-attachments/assets/8e3282d5-237b-4cec-89d9-7707572852b8)


### Meet the Group Members:

<strong>Sruti:</strong>
My favourite hobby is cooking. <br>
I love finding new ways to make things taste better. 

<strong>Laura: </strong>
My favourite hobby is swimming. <br>
I grew up by the water in Northern Ireland and its always been my favourite thing to do.

<strong>Nesrin:</strong>
My favorite hobby is reading. <br>
...but I always end up buying way more books than I can actually read!

<strong>Joanna:</strong>
My favourtie hobbies are anything sport related. <br>
I particulary enjoy horse-riding and swimming. I also enjoy watching Formula 1.

<strong>Erin:</strong>
My favourite hobby is playing guitar. <br>
I love to play gigs with my friends.

<strong>Annie:</strong>
My favourite hobby is baking. <br>
I do this because it can be hard to find good vegan baked goods. 

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

<li> git clone https://github.com/joannalindsay17/CFG-Group-4.git

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

`cd guessthegirl` then `npm test`

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

## Additional Information

### Project link

https://github.com/joannalindsay17/CFG-Group-4

