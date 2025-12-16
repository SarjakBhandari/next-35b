"use client"
import { ChangeEvent, useState } from "react";

export const useRegisterForm=()=>{
    const [username, setUsername]= useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cPassword,setCPassword]=useState("");

      const handleEmail=(e: ChangeEvent<HTMLInputElement>)=>{
                setEmail(e.target.value);
                // e- event, target- element, value - current value of input
            }
                const handlePassword=(e: ChangeEvent<HTMLInputElement>)=>{
                setPassword(e.target.value);
                // e- event, target- element, value - current value of input
            }
            
             const handleUsername=(e:ChangeEvent<HTMLInputElement>)=>{
                setUsername(e.target.value);
             }

             const handleCPassword=(e:ChangeEvent<HTMLInputElement>)=>{
                setCPassword(e.target.value);
             }
            const handleSubmit =()=>{
                if(password !== cPassword){
                    alert("Both Passwords Must Be same");
                    return false;
                }else{
                    alert("Registration Success")
                    return true;
                }
            }

    return{
        username,email,password,cPassword,
        handleUsername,handleEmail,handlePassword,handleCPassword,handleSubmit
    };
}