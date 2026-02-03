import express from "express";
import fs from "fs";
import { data as users } from "./data.js";
import { config } from "dotenv";
config();
const app = express();
const port = process.env.port || 3000;
// middleware part
// json body read krne kae liye
app.use(express.json());
app.get("/user", (req, res) => {
  res.status(200).json(users);
});
app.post("/user", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "username and password required",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "password must be atleast 6 characters",
    });
  }
  const exist = users.find((user) => user.username === username);
  if (exist) {
    return res.status(409).json({
      message: "username already exist",
    });
  }
  const newUser = {
    id: users.length + 1,
    username,
    password,
  };
  users.push(newUser);
  res.status(201).json({
    message: "user created",
    user: newUser,
  });
});
app.put("/user", (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;
  const index = users.find((user) => user.id === id);
  if (index === -1) {
    return res.status(404).json({
      message: "user not exist",
    });
  }
  if (!username) {
    return res.status(400).json({
      message: "user not found",
    });
  }
  // jo data hae use copy kro and username update kro
  users[index] = {
    ...users[index],
    username,
  };
  res.status(200).json({
    message: "username updated",
    user: users[index],
  });
});
app.listen(port, () => {
  console.log(`serve is running at port ${port}`);
});
