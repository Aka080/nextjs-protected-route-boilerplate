import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/AuthProvider"



useContext
export default function Dashboard (){
  const {userData} = useContext(AuthContext)
  const router = useRouter()
  
  const handleLogout=()=>{
    localStorage.removeItem("authToken")
    router.replace('/')
  }
    return(
        <div>
            <h1> Hello {userData.name}</h1>
            <h1> You are from {userData.state}</h1>
            <button onClick={()=>handleLogout()}> Logout </button>
        </div>
    )
}