import express from "express";
import{ getFineSettings, getIssues, getStudentIssues, issueManualBooks, returnBook, applyFine, clearFine, updateFineSettings } from "../controller/bookController.js";
import { authenticateToken, authorizeRoles} from "../middleware/authMiddleware.js";


const bookRouter = express.Router();
bookRouter.get('/fine-settings', authenticateToken, getFineSettings);
bookRouter.get('/issues/student', authenticateToken, authorizeRoles("user"), getStudentIssues);

//admin routes
bookRouter.get('/issues', authenticateToken, authorizeRoles("admin"), getIssues);
bookRouter.post('/issue-manual', authenticateToken, authorizeRoles("admin"), issueManualBooks);

bookRouter.put('/issues/:id/return', authenticateToken, authorizeRoles("admin"), returnBook);
bookRouter.put('/issues/:id/fine', authenticateToken, authorizeRoles("user"), applyFine);

bookRouter.put('/issues/:id/clear-fine', authenticateToken, authorizeRoles("admin"), clearFine);
bookRouter.put('/fineSettings', authenticateToken, authorizeRoles("admin"), updateFineSettings);

export default bookRouter;