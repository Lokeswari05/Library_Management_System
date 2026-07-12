import User from "../models/User.js";
import jwt from "jsonwebtoken";

// to authenticate JWT token
export const authenticateToken = async (req, res, next) => {
    try{
        const autHeader = req.headers['authorization'];
        const token = autHeader && autHeader.split(" ")[1];
        if(!token) {
            return res.status(401).json({ 
                message: "Access denied. No token provided." 
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if(!user) {
            return res.status(401).json({ 
                message: "Token is not valid or user no longer exists." 
            });
        }
        req.user = user; // Attach user to request object
        next();
    } 
    catch(error){
        console.error("JWT Auth error:", error);
        res.status(401).json({ 
            message: "Invalid token." 
        });
    }
}

//middleware to authorize specific roles
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({ 
                message: "Access denied. Insufficient permissions." 
            });
        }
        next();
    } 
}