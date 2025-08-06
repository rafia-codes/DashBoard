import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./config/db.js";
import approutes from "./routes/approutes.js";

const app=express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/applicants", approutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));