const request = require("supertest");
const { app, db } = require("./index");

// //DATABASE CONNECTION TEST
test("MySQL database connects successfully", (done) => {
    db.connect((err) => {
        expect(err).toBeNull();
        done()
    })
})

//GET /ARTISTS ENDPOINT TEST
describe("GET /artists", () => {
    test("all artists returned successfully", async () => {
        const response = await request(app).get("/artists");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

