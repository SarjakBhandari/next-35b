"use client";

import { useState, useTransition } from "react";
import { loginAction } from "./actions/login";

export default function Page() {
    const [username,setUsername]=useState("");
    const [isPending, startTransition]=useTransition();
    //  const handleSubmit = async()=>{
    //     try{
    //         await loginAction(username);
    //     }catch(err:Error | any){
    //         alert(err.messege ?? "Form")
    //     }
    //  }
    const handleSubmit=()=>{
        startTransition(async()=>{
            try{
                await new Promise((resolve=> setTimeout(resolve,2000)))
                await loginAction(username);
 
            }catch(err:Error | any){
                alert(err.messege??" form Error"
                )
            };
            // navigation will be pending and wont block the UI
            //can use state isPending to show the loading indicatior
    });
    }
    

    return (
        <div className="mx-auto max-w-md border p-4">
            <label> Username </label>
            <input onChange={(e)=>setUsername(e.target.value)} />
            <div>
                <button disabled={isPending} className="p-2 bg-white-600 disabled:bg-grey-300" 
                onClick={handleSubmit}>{isPending?"loading..":"Submit"}</button>
                </div>            
        </div>
    );

}