import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
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
app.use(express.json());
app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
