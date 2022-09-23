import express from "express";
import bodyParser from "body-parser";
import { createUser } from "./Login/Creator";
import { login } from "./Login/login";

const app = express();
app.use(bodyParser.json());

app.post("/createuser", (req, res) => {
  createUser(req.body.email, req.body.password)
    ? res.send({ msg: "creation successfull" })
    : res.send({ msg: "creation unsuccessfull" });
});
app.post("/login", (req, res) => {
  login(req.body.email, req.body.password)
    ? res.send({ msg: "login successfull" })
    : res.send({ msg: "login unsuccessfull" });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
