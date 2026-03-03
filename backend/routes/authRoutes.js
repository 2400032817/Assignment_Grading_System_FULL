
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req,res)=>{
  const user = await User.create(req.body);
  res.json(user);
});

router.post("/login", async (req,res)=>{
  const user = await User.findOne(req.body);
  if(!user) return res.status(400).json({msg:"Invalid"});
  const token = jwt.sign({id:user._id,role:user.role},"secret");
  res.json({token});
});

module.exports = router;
