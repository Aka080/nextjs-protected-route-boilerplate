import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { NextComponentType } from "next";
import {useRouter} from 'next/router';


type AuthProviderProps = {
    children: React.ReactNode
}
type UserDataType = {
    token: string,
    ok:boolean,
    error: string | null,
    currentUser: {
        name: string,
        state: string
    }
} 
type AuthType = {
    isLoggedIn:boolean
    userData:{name:string,state:string}| null
}
const initialAuthState = {
    isLoggedIn:false,
    userData:{name:'',state:''}
    
}



export const AuthContext  = React.createContext<AuthType>(initialAuthState);

export const AuthProvider = (props:AuthProviderProps) => {
    const {children} = props
    const {isLoggedIn,userData} = useAuth()


    return <AuthContext.Provider value={{isLoggedIn, userData}}>
        {children}
    </AuthContext.Provider>

}




