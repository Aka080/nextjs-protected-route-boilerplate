import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';


type UserDataType = {
    token: string,
    ok:boolean,
    error: string | null,
    currentUser: {
        name: string,
        state: string
    }
} 
const findUser = async (token:string) =>{
    const response = await fetch('/api/user-info',{
        method:'POST',
        body:JSON.stringify({
            token
        })
    })
    const userData = await response.json()
    return {response,userData}
        
}


export default function useAuth (){
    const [isLoggedIn,setIsLoggedIn] = React.useState(false);
    const [userData,setUserData] = React.useState<{name:string,state:string}>({name:'',state:''}) // contains token and user data
    const router = useRouter()
    
    const checkToken = async () =>{
        const removeLocalToken = () => localStorage.removeItem("authToken")
        const logInRedirect = () => router.replace("/")
        
        const storedToken = localStorage.getItem("authToken") 
        if(!storedToken){
            logInRedirect();
            return;  
        }

        // check if user exist and fetch user data using token stored in local storage.
        const {response,userData} = await findUser(storedToken)
        
        // if no user found 
        if(!response.ok){
            removeLocalToken();
            logInRedirect()
            return;
        }

        // if everything goes well
        setIsLoggedIn(true)
        setUserData({name:userData.name, state:userData.state})
    
    }
    useEffect(()=>{
        checkToken()
    },[])
    
    
    return {isLoggedIn,userData}
    }
    