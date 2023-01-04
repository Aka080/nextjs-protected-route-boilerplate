import { NextApiRequest, NextApiResponse } from "next";
import { UserDataType } from "../../types/userdata";

const checkValidUser = (token:string)=>{
    if(token ==='TOKEN.FOR.JOHN') {
        return {
            isValid:true,
            userInfo:{name: 'John',
            token:'TOKEN.FOR.JOHN',
            state: 'Punjab'}
        };
    }
    return {
        isValid:false
    }
}


export default function handler(
    req: NextApiRequest,
    res:NextApiResponse
){
    const {token} = JSON.parse(req.body)
    const {isValid,userInfo }= checkValidUser(token)
    if(isValid){
        res.status(200).json({...userInfo})
    }else{
        res.status(400).json({message:'Validation failed'})
    }

}