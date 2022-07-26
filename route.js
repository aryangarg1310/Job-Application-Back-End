const express = require("express");
const router = express.Router();
const addNewEntry = require("./FormController");

router.post("/new-application", addNewEntry);
router.post("/test", (req, res) => {
  res.send(req.body);
});

module.exports = router;
