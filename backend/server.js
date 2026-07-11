import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';

const PORT = 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
//db 
connectDB(); 
//

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
})