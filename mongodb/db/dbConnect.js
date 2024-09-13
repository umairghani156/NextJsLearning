import mongoose from "mongoose";

const dbConnection =async ()=>{
    try {
       const con = await mongoose.connect(process.env.MONGO_DB_URI);
       console.log('Mongo DB connnected', con.connection.host);
       
    } catch (error) {
        console.log("Mongodb disconnected", error);
        
    }
}
export default dbConnection;