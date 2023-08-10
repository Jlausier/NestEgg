import express from "express";
import apiRouter from "./api";
import dashboardRouter from "./dashboardRoutes";

const router = express.Router();

router.use("/api", apiRouter);
router.use("/dashboard", dashboardRouter);

export default router;
