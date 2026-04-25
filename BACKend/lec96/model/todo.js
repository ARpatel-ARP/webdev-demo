import mongoose from "mongoose";
const todoschema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean
});

export const todo = mongoose.model('todo', todoschema);