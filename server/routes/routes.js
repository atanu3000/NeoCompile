// Import Libraries
import express from "express";
// import  Router  from "express";
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Welcome to the home page!');
});
// Import Controllers
import { push_code, explain_code } from "../Controllers/controller.js";

// Code Routes
router.post("/runCode", push_code);
router.post("/getExplanation", explain_code);

// Exports
export default router;