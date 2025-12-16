"use client";
import { useState, ChangeEvent } from "react";
import { useLoginForm } from "./hooks/use-login";

export default function Page(){
    // const [email,setEmail]= useState("");
    // const [password,setPassword]=useState("");
    // const handleEmail=(e: ChangeEvent<HTMLInputElement>)=>{
    //     setEmail(e.target.value);
    //     // e- event, target- element, value - current value of input
    // }

    const {email, handleEmail,handlePassword,handleSubmit,password} = useLoginForm();

    // we can also uuse it like const form=useLoginForm() and use form.login form.register etc
    return (
        <div>
            <div>
                <label> Email:</label>
                <input type="email" value={email} onChange={handleEmail}/>
                <br></br><label> Password:</label>
                <input type="password" value={password} onChange={handlePassword}/>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}