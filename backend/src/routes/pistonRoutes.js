import express from "express";
import { executeCodeProxy } from "../controllers/pistonController.js";
import { protectRoute } from "../middeware/protectRoute.js";

const router = express.Router();

router.post("/execute", protectRoute, executeCodeProxy);

export default router;
