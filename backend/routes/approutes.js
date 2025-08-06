import express from "express";
import { submitApplication, getApplicants } from "../controllers/appcontrol.js";

const router = express.Router();

router.post("/", submitApplication);
router.get("/", getApplicants);

export default router;
