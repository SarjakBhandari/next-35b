"use server"; // optional

// we can check authenticaation easily 

import { redirect } from "next/navigation";

export async function loginAction(username:string) {
    if(!username){
        throw new Error("Username is required");
    }else
    if(username == "admin"){
        redirect("/example/input-form");
    }
    else{
        redirect("/example/state")
    }
}