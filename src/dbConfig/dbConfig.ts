import mongoose, { connection } from "mongoose";
export async function connect()
{
    try
     {
         mongoose.connect(process.env.MONGO_URI!);
        const  dbConnection=mongoose.connection;

        dbConnection.on("connected",()=>
        {
            console.log('mongo db connected successfully')
        })
        dbConnection.on('error',(err)=>
        {
            console.log('mongodb connection error'+ err);
            process.exit();

        })
     } 
     catch (error)
    {
        console.log("something went wrong");
        console.log(error)
        
    }
}