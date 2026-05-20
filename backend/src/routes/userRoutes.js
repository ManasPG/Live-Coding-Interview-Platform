import express from "express";
import { requireAuth } from "@clerk/express";
import { syncCurrentUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/sync", requireAuth(), syncCurrentUser);

export default router;
