import express from "express";

const router = express.Router();

router.get("/get-todo", (req, res) => {
  res.send("form get todo route");
});

router.post("/create-todo", (req, res) => {
  res.send("form create todo route");
});

router.patch("/update-todo", (req, res) => {
  res.send("form update todo route");
});

router.delete("/delete-todo", (req, res) => {
  res.send("form delete todo route");
});

export default router;
