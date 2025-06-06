import jwt from "jsonwebtoken";
import User from "../Models/user.schema.js";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1] 

  if (!token) {
    return res.status(404).json({ message: "Token Missing" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const adminMiddleware = async(req,res,next)=>{
      if(req.user.role == "admin"){
         return res.status(404).json({ message: "Access Denied Only Admins can view" });
    }
   next();
}