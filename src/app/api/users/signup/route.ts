import {connect} from "@/dbConfig/dbConfig";
import {User} from "@/models/userModel";
//everything is dependent on request and response

import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// how to define post request
export async function POST(request:NextRequest)
{
    try 
    {
     const reqBody=await request.json();
     const {username,email,password}=reqBody;
     console.log(reqBody) ;
     //check if user already exists
     const user=await User.findOne({email})    
     if( user)
     {
        return NextResponse.json({error:"user already exists"});

     } 
     //hash password
   const salt=await bcryptjs.genSalt(10)
   const hashedPassword=await bcryptjs.hash(password,salt)

   //save user in databases
   const newUser=new User({
        username,
        email,
        password:hashedPassword
    }
   )
  const savedUser= await newUser.save();
  console.log(savedUser);
//we need to return the respone in POST function
    return NextResponse.json({
    message:"user created successfully",
    success:true,
    savedUser
  });
    } 
    catch (error:any) 
    {
       return NextResponse.json({
        error:error.message},
        {status:500}) 
    }
}
connect()