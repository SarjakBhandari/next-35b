import { ChangeEvent, useState } from "react";
//hook naming convention:"use" +functionality

export const useLoginForm=()=>{
        const [email,setEmail]= useState("");
        const [password,setPassword]=useState("");
        const handleEmail=(e: ChangeEvent<HTMLInputElement>)=>{
            setEmail(e.target.value);
            // e- event, target- element, value - current value of input
        }
            const handlePassword=(e: ChangeEvent<HTMLInputElement>)=>{
            setPassword(e.target.value);
            // e- event, target- element, value - current value of input
        }
        const handleSubmit =()=>{
            const loginData={
                email,password
            };
            alert(`Login with ${email} and password :${password}`)
            //call api later
        }
        
return{
    email,password,
    handleEmail,handlePassword,handleSubmit
}
}
