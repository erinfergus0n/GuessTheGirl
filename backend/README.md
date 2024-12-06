## SETTING UP THE BACK-END

1. `npm install express mysql2 cors dotenv`

2. In guessthegirl/backend/.env - insert your MySQLWorkbench credentials.

3. In the terminal - `cd backend`

4. Restart the server using `Ctrl+C` to ensure you have nothing else running on the target port.

5. Run `node server.js` to start the server.


## TESTING ENDPOINTS IN POSTMAN

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


## RUNNING TESTS FOR THE BACKEND

1. `npm install --save-dev jest supertest`
2. `cd backend` then `npm test`