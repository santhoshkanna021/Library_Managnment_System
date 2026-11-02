import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "../server/config/db.js";

config();



const PORT =  5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//Db
connectDB();

// API Route
app.get("/", (req, res) => {
    res.send("API Working........");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});