import express from "express";
import { push_code, explain_code } from "./controllers/codeController.js";

const router = express.Router();

// Route for getting the output
router.post("/compile", push_code);

// Route to get explanation of the code
router.post("/explain", explain_code);

export default router;