// Import Libraries
const express = require("express");
const router = express.Router();

// Import Controllers
const codeController = require("");
const explanationController = require("");

// Code Routes
router.post("/runCode", codeController.run_code);
//Extra route if needed
// router.post("/compileCode", codeController.compile_code);

// Explanation Routes
router.post("/getExplanation", explanationController.get_explanation);
// Exports
module.exports = router;