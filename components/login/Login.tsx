import React from 'react'
import {useRouter} from 'next/router'
import styles from './login.module.css'

export default function Login(){
    const [name,setName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [error,setError] = React.useState('')
    const router = useRouter()
    // const {isLoggedIn} = useAuth()

    const handleLogin = async () =>{
        console.log(name,password)
        const res = await fetch('/api/login',{
            method:'POST',
            body:JSON.stringify({
            name,password
            })
        })
        if(res.ok){
            const loginData = await res.json();
            localStorage.setItem('authToken',loginData.token)
            router.replace("/auth")

        }
        if(!res.ok){
            const loginData = await res.json()
            console.log(loginData.message,res)
            setError(loginData.message)
        }
    }
    return <div className={styles.loginWrapper}>
        <p>Credentials for login <strong>Name</strong> john , <strong>Password:</strong> password</p>
        <div className={styles.credentialWrapper}>
            <label className={styles.lbl}htmlFor="name">Name:</label>
            <input value={name} id="name" onChange= {e=>setName(e.target.value)} onFocus={e=>setError('')}/>
        </div>
        <div className={styles.credentialWrapper}>
            <label className={styles.lbl} htmlFor="password" onFocus={e=>setError('')}>Password:</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>

        {error?<h2 style={{color:'red'}}>{error}</h2>:null}
   
        <button className={styles.btn} onClick={()=>handleLogin()}>Login</button>
    </div>
}

