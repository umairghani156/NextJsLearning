import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/userRoute.js";
import dbConnection from "./db/dbConnect.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 8000
dotenv.config();
app.use(cors())
app.use(express.json);
dbConnection()



app.use("/api/v1", authRoutes)


app.listen(PORT, ()=>{
    console.log("Server is running on 8000");
    
})
