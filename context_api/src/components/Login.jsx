import React,{useState , useContext} from "react";
import UserContext from "../context/usercontext";
function Login(){

    const [username , setusername]= useState('')
    const [password , setpasword]= useState('')

    const {setUser} = useContext(UserContext)

    const handlesubmite =(e)=>{
        e.preventDefault()
         setUser({username, password})


    }
    return(
        <div>
            <h2>login</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            placeholder="username"
             />
          {'       '}
            <input type="text"
            value={password}
            onChange={(e)=> setpasword(e.target.value)}
            placeholder="password"
             />
             <button onClick={handlesubmite}>submite form</button>
        </div>
    )
}

export default Login