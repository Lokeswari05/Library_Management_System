import express from 'express';
import { searchStudentByRollNo } from '../controller/studentController.js';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware.js';

const studentRouter = express.Router();

studentRouter.get("/search-by-roll", authenticateToken, authorizeRoles("admin"), searchStudentByRollNo);

export default studentRouter;