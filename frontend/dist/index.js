import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World From the Typescript Server!");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`🚀 Server is ready at http://localhost:${port}`);
});
