
const router = require("express").Router();
const Assignment = require("../models/Assignment");

router.post("/", async (req,res)=>{
  const data = await Assignment.create(req.body);
  res.json(data);
});

router.get("/", async (req,res)=>{
  const data = await Assignment.find();
  res.json(data);
});

module.exports = router;
