const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Web Dev Com Boas Práticas - Exercício 5 - Docker with Deploy to Heroku Automatically from GitHub v1.2", (done) => {
        request(app).get("/").expect("Web Dev Com Boas Práticas - Exercício 5 - Docker with Deploy to Heroku Automatically from GitHub v1.2", done);
    })
});