import express from "express";
import { ENV } from "./lib/env.js";
import { connnectDb } from "./lib/db.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bitch Please" });
});

const startServer = async () => {
  try {
    await connnectDb();
    app.listen(ENV.PORT, () =>
      console.log("Server is running on port: ", ENV.PORT),
    );
  } catch (error) {
    console.error("💥Error Starting the server:", error);
  }
};

startServer();
