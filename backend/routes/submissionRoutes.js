
const router = require("express").Router();
const multer = require("multer");
const Submission = require("../models/Submission");

const storage = multer.diskStorage({
  destination:"uploads/",
  filename:(req,file,cb)=>cb(null,Date.now()+"-"+file.originalname)
});

const upload = multer({storage});

router.post("/", upload.single("file"), async (req,res)=>{
  const submission = await Submission.create({
    assignmentId:req.body.assignmentId,
    studentId:req.body.studentId,
    file:req.file.filename
  });
  res.json(submission);
});

router.put("/grade/:id", async (req,res)=>{
  const data = await Submission.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(data);
});

module.exports = router;
