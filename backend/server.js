import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import authRouter from './routes/authRoutes.js';
import studentRouter from './routes/studentRoutes.js';

const PORT = 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//db  
connectDB(); 
 
//routes
app.use('/api/auth', authRouter); 
app.use('/api/students', studentRouter); // Add this line to include student routes

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
})