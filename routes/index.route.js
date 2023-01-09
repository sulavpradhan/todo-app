import express from "express";
import todoRoutes from "./todo.route.js";

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send({ msg: "OK" }));

router.use("/todo", todoRoutes);

export default router;
