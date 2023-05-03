import mongoose from "mongoose";
import chalk from "chalk";

// creating connection and new database if it does not present in mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/Courses")
  .then(() => console.log(chalk.inverse.green("Connection successful")))
  .catch((err)=>console.error(chalk.red(err)))
