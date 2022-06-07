const expect = require("chai").expect;

const request = require("supertest");

const app = require("../../../app.js");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJ1c2VybmFtZSI6ImFiYyJ9LCJpYXQiOjE2NTI5ODI5NjQsImV4cCI6MTY1Mjk4NDE2NH0.xV1yMX_BWpUgTxzl1R1k1EEGcTvfdLYlxrSfmotp4fM";

describe("GET /category", () => {
  it("Ok, get category", (done) => {
    request(app)
      .get(`/category`)
      .then((res) => {
        const body = res.body;
        console.log(res);
        expect(res.statusCode).to.equal(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
it("OK post category", (done) => {
  const bookObj = {
    category_name: "romcom",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  request(app)
    .post(`/category`, {})
    .send(bookObj)
    .set({ token })
    .then((res) => {
      const body = res.body;
      console.log(res.body);
      expect(res.statusCode).to.equal(200);
      done();
    })
    .catch((err) => {
      done(err);
    });
});
it("OK put category", (done) => {
  const bookObj = {
    category_name: "romcom",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  request(app)
    .put(`/category/:id`, {})
    .send(bookObj)
    .set({ token })
    .then((res) => {
      const body = res.body;
      console.log(res.body);
      expect(res.statusCode).to.equal(200);
      done();
    })
    .catch((err) => {
      done(err);
    });
});
