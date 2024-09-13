import express from "express";
import { signup } from "../controllers/userController.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.get("/hello",(req,res)=>{
   res.send('Hello Umair')
})

export default authRoutes;