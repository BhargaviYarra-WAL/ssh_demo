const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app.js");

describe("GET /book", () => {
  it("Ok, get book", (done) => {
    request(app)
      .get(`/book`)
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
