// Import Libraries
import { Router } from "express";
const router = new Router();

// Import Controllers
import { push_code, explain_code } from "../controllers/controller.js";

// Code Routes
router.post("/runCode", push_code);
router.post("/getExplanation", explain_code);

// Exports
export default router;