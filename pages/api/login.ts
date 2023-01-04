import { NextApiRequest, NextApiResponse } from "next";
import { UserDataType,ErrorMessageType} from "../../types/userdata";

const checkValidUser = (name:string,password:string)=>{
    if(name==='john' && password==='password') {
        return true;
    }
    return false
}


export default function handler (
    req:NextApiRequest,
    res:NextApiResponse<UserDataType | ErrorMessageType>
    ) {
    const {name,password} = JSON.parse(req.body)
    const isValid = checkValidUser(name,password)
    if(isValid){
        res.status(200).json({name:'John', state:'Punjab', token:'TOKEN.FOR.JOHN'})
    }else if(!name || !password){
        res.status(400).json({message:'Provide required credentials'})
    }else{
        res.status(400).json({message:'Invalid Credentials'})

    }
    
}