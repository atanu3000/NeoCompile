// Import Libraries
import { Router } from "express";
const router = new Router();

// Import Controllers
import { push_code, explain_code } from "../Controllers/controller.js";
import { healthCheck } from "../Controllers/healthcheck.js";

// Code Routes
router.get("/", healthCheck);
router.post("/runCode", push_code);
router.post("/getExplanation", explain_code);

// Exports
export default router;