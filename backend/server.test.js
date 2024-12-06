const request = require("supertest");
const { app, db } = require("./server");




test("MySQL database connects successfully", (done) => {
    db.getConnection((err) => {
        expect(err).toBeNull();
        done()
    })
})






//OG SERVER/DB TESTS 

// const request = require("supertest");
// const { app, db } = require("./index");

// // //DATABASE CONNECTION TEST
// test("MySQL database connects successfully", (done) => {
//     db.getConnection((err) => {
//         expect(err).toBeNull();
//         done()
//     })
// })

// //GET /ARTISTS ENDPOINT TEST
// describe("GET /artists", () => {
//     test("all artists returned successfully", async () => {
//         const response = await request(app).get("/artists");
//         expect(response.status).toBe(200);
//         expect(Array.isArray(response.body)).toBe(true);
//     });
// });

// //GET /ARTISTS/RANDOM ENDPOINT TEST
// describe("GET /artists/random", () => {
//     test("random artist returned successfully", async () => {
//         const response = await request(app).get("/artists/random");
//         expect(response.status).toBe(200); 
//         expect(response.body).toHaveProperty("id"); 
//         expect(response.body).toHaveProperty("name"); 
//         expect(response.body).toHaveProperty("country"); 
//         expect(response.body).toHaveProperty("genre"); 
//         expect(response.body).toHaveProperty("star_sign"); 
//         expect(response.body).toHaveProperty("debut_year");
//         expect(response.body).toHaveProperty("spotify_ranking");
//         expect(response.body).toHaveProperty("total_albums");   
//     });
// });


