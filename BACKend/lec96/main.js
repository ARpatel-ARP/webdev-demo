import mongoose from "mongoose";
import express from "express";
import { todo } from "./model/todo.js";

const conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const newTodo = new todo({
      title: "today's task",
      desc: "description of the task",
      isDone: false,
    });

    await newTodo.save();

    res.send("Todo added successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding todo");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
