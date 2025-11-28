// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
  path: "./env",
});

connectDB();

// ;(async ()=>{
//   try{
//       mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

//   }catch(error){
//     console.error('Database connection error:', error);
//     throw error;

//   }
// })()
