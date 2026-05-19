import express from "express";
import path from "path";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connnectDb } from "./lib/db.js";

import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

//middleware
app.use(express.json());
//credentails:true meaning?? server allows cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // auth field to request objects

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);

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
