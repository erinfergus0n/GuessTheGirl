## SETTING UP THE BACK-END

1. `npm install express mysql2`

2. In guessthegirl/backend/index.js - insert your MySQLWorkbench password.

```
    host: "localhost",
    user: "root",
    password: "yourpasswordhere",
    database: "GTG"
```

3. In the terminal - `cd backend`

4. Restart the server using `Ctrl+C` to ensure you have nothing else running on the target port.

5. Run `node index.js` to start the server.


## TESTING ENDPOINTS IN POSTMAN

- Simple test of connection:
    **GET** http://localhost:3300/
    

- Show all artists in database:
    **GET** http://localhost:3300/artists


- Get a random artist:
    **GET** http://localhost:3300/artists/random


- Check guessed artist with correct artist:
    **POST** http://localhost:3300/artists/guess

    In the Body tab select 'raw' and insert JSON...

    JSON for false result (incorrect guess) -
    ```json
        {
            "guessedArtistId": 1,
            "correctArtistId": 2
        }
    ```
   JSON for true result (correct guess) -
    ```json
        {
            "guessedArtistId": 1,
            "correctArtistId": 1
        }
    ```

## RUNNING TESTS FOR THE BACKEND

`npm install --save-dev jest supertest`