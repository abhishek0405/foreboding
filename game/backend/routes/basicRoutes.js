const express = require("express");
const router = express.Router();


const {
  getUsedTokens,
  addUsedToken
  
} = require("../controllers/basicController");

router.get("/getUsedTokens", getUsedTokens);
router.post("/addUsedToken", addUsedToken);
module.exports = router;
