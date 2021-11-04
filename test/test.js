const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Web Dev Com Boas Práticas - Exercício 4 - Deploy to Heroku Automatically v2", (done) => {
        request(app).get("/").expect("Web Dev Com Boas Práticas - Exercício 4 - Deploy to Heroku Automatically v2", done);
    })
});