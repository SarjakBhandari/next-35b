"use client";
import { useEffect, useState } from "react";

 // user interactivity/states

export default function Page(){
    const [count,setCount] = useState(1);
    //state hooks
    //[valuem,setter func]
    // state is variable that causes component to re-render when changed
    // when the count changes, cconponet using "count " re-renders
    const handlePlus=()=>{
     setCount(count+1)   ;
    }
        const handleUnPlus=()=>{
     setCount(count-1)   ;
    }

    useEffect(()=>{
        alert("Component mounted")
    },[]);

    useEffect(()=>{
        if(count ===0){
            alert("Count is zero")
        }
    },[count]);   // everytime the count state changes, this func tins

    return(
        // render this whrn state changes
        <div>
            <div>Count: {count}</div>
            <button onClick={handlePlus} className="border p-2 bg-blue-500 text- white ">+</button>
            <button onClick={handleUnPlus} className="border p-2 bg-blue-500 text- white ">-</button>
        </div>
    );
}