import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server running on port 3000");
});
