"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
// import { axios } from "axios";
//main functiona; components
 const Signup=()=>
{

    //once the user wil be signed up we will route it to login page
    const router=useRouter();
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:""
    })
    //button
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
   //loading data logic

   const [loading,setLoading]=React.useState(false)

    //signup handle logic
    const onSignup= async ()=>
    {
       try
       {
        setLoading(true);
       const response=await axios.post("/api/users/signup",user);
       console.log("signup success",response.data);
       //push is method of useRouter that  Navigate to the provided href. Pushes a new history entry.
       router.push("/login")
        
       }
        catch (error:any) 
       {
        toast.error(error.message)
        console.log("signup failed" ,error)
       }
       finally{
        setLoading(false)
       }
    }
//as soon as button disabled gone that means somebody can press it so, when there is some value in our field if 
// there is user ... as soon as something changed this will run
    useEffect(()=>
    {
      if(user.email.length>0 && user.password.length>0 && user.username.length>0)
      {
        setButtonDisabled(false)
      }
      else 
      {
        setButtonDisabled(true)
      }

    },[user])
return(
    <div className="flex flex-col items-center justify-center py-2 h-[70vh] w-[90vw] lg:w-[50vw] mx-auto mt-12 bg-slate-900">
        <h1 className="text-center font-semibold text-4xl text-teal-300">{loading ?"Processing":"Sign up"}</h1>
        <hr/>
        {/* username field */}
        <label htmlFor="username" className="text-teal-300">userName</label>
        <input  className="p-2 border focus:border-slate-700"
         type="text"
        id="username"
        value={user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}
        />
        {/* email field */}
        <label htmlFor="email" className="text-teal-300">email</label>
        <input type="email" 
        className="p-2 border focus:border-slate-700"
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}/>
        {/* password field */}
        <label htmlFor="password" className="text-teal-300">password</label>
        <input className="p-2 border text-start focus:border-slate-700"
         type="password"
        id="password"
        value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        {/* submission button */}
        <button className="bg-slate-300 mt-3  text-slate-700 w-[30vw] border-blue-600" 
         onClick={onSignup}>{buttonDisabled ? "No Signup" :"SignUp"}</button>

        <h2 className="text-white">Already have an account <span className="text-teal-200"> <Link href="/login"><u>Login In</u></Link></span></h2> 

    </div>
)
}
export default Signup