"use server";

import { redirect } from "next/navigation";

export async function handleServer(status : string){
    if(status==="active"){
        redirect("/example/orders/success");
    }else
        if(status==="failure"){
            redirect("/example/orders/failure");
        }
}