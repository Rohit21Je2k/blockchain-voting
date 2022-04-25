import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { httpError } from "./util/functions/_index.js";

import UserRouter from "./routes/user.js";

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const app = express();

// cors
app.use(cors());

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/users", UserRouter);

// path not found
app.use((req, res) => {
  res.status(400).send(httpError("path does not exist"));
});

// connect mongoose
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.s4fs8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("connection to server and database established");
    });
  })
  .catch((err) => console.log(err));
