## SETTING UP THE BACK-END

1. `npm install express mysql2`

2. Ensure there is a line for "type": "module", in backend/package.json
```
"main": "index.js",
"type": "module",
```

3. In guessthegirl/backend/index.js - insert your MySQLWorkbench password.

```
    host: "localhost",
    user: "root",
    password: "yourpasswordhere",
    database: "GTG"
```

4. In the terminal - `cd backend`

5. Restart the server using `Ctrl+C` to ensure you have nothing else running on the target port.

6. Run `node index.js` to start the server.


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

1. `npm install --save-dev jest supertest`
2. `cd backend` then `npm test`