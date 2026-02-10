import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Messages API endpoint");
});

export default router;
