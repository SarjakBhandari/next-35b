"use client";

import { useRouter } from "next/navigation";
import { startTransition, useState, useTransition } from "react";
import { handleServer } from "./actions/handleSubmit";

export default function Page() {

    const [status,setStatus]=useState("unauthorized");
    const [price,setPrice]=useState(0);
    const [isPending, startTransition]=useTransition();
    const router=useRouter();
    
    const handleSubmit=()=>{
         startTransition(async()=>{
                    try{
                        await handleServer(status);
         
                    }catch(err:Error | any){
                        alert(err.messege??" failure"
                        )
                    };
                    // navigation will be pending and wont block the UI
                    //can use state isPending to show the loading indicatior
            });}

    const handleApply=()=>{
        if(price <0){
            router.push('/example/orders/unauthorized');
        }
        router.push('/example/order/success')
    }

    return (
        <div>
            <label>Price</label>
            <input onChange={(e)=>{setPrice(parseInt( e.target.value))}} />
            <label>State</label>
            <input onChange={(e)=>{setStatus(e.target.value)}} />
            <button onClick={handleApply} >Apply</button>
            <input onChange={(e)=>{setStatus(e.target.value)}} />
            <button onClick={handleSubmit} >Next</button>
        </div>
    );
}
