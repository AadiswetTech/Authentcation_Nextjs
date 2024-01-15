"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
// import router from "next/router";
// import { axios } from "axios";

 
 const Login=()=>
{
    const router=useRouter();
    const [user,setUser]=React.useState({
        email:"",
        password:"",
       
    })
const [buttonDisabled,setButtonDisabled]=React.useState(false);
const [loading,setLoading]=React.useState(false)
    //signup handle logic
    const onLogin=async ()=>
    {
try 
{
    setLoading(true);
    const response=await axios.post("/api/users/login",user);
    console.log(response.data)
    toast.success("login successful")
    router.push("/profile")
} catch (error) {
    
}
finally{
    setLoading(false)
}
    }

  useEffect(()=>
  {
if(user.email.length>0 && user.password.length>0)
{
    setButtonDisabled(false)
}
else{
    setButtonDisabled(true)
}
  },[user])  
return(
    <div className="flex flex-col items-center justify-center py-2 h-[70vh] w-[90vw] lg:w-[50vw] mx-auto mt-12 bg-slate-900">
        <h1 className="text-center font-semibold text-4xl text-teal-300">Log In</h1>
        <hr/>
      
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
        <button className="bg-slate-300 mt-3  text-slate-700 w-[15vw] border-blue-600" 
         onClick={onLogin}>{buttonDisabled ? "fill" :"Login"}</button>

<h2 className="text-white">Not registered ! <span className="text-teal-200"> <Link href="/signup"><u>Signup</u></Link></span></h2> 


    </div>
)
}
export default Login