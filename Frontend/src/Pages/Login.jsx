import React from 'react'
import '../components/style/login.css'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from "axios"
import swal from 'sweetalert';
import {  useNavigate } from "react-router-dom";
import {useState} from "react"

const Login = () => {
    const navigate = useNavigate();
  const[email, setEmail] =useState("");
  const[password, setPassword] =useState("");
 
   // api call
   const handlelogin = async (e)  =>{   
       e.preventDefault();


      try{
         
         axios.get('/sanctum/csrf-cookie').then(response => {
             axios.post(`http://127.0.0.1:8000/api/login`, {email,password }).then(resp => {
                 if(resp.data.status === 200){
                   localStorage.setItem('auth_token',resp.data.token);
                   localStorage.setItem('auth_password',resp.data.auth_password);
                   localStorage.setItem('auth_USER',JSON.stringify(resp.data.authUser));

                   
                   setEmail("");
                   setPassword("");
                   swal("Success",resp.data.message,"success");
                   if(resp.data.auth_role === 'Admin')
                   {
                     navigate('/admin');
                  }
                   else
                   {
                     navigate('/user');
                  }

                 }
                 else if(resp.data.status === 401){
                    
                  swal("warning",resp.data.message,"warning");
                 }
                 else{
                  swal("warning","verifier you email or password ");

                 }
              });  
         
         });

   } catch(e){
                  console.log(e)
                 }
  }
    return (
        <>
        <NavBar/>
            <div className="nav"></div>
            <div className="logincontainer">
                <div className="loginform">
                    <h1>Login</h1>
                    <form  onSubmit={handlelogin} >

                    <input 
                        type='email'
                        className='logininput' 
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoComplete="on"
                    />
                    <input 
                        type='password' 
                        className='logininput' 
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete="on"
                    />

                    <Link to="/register" className='registerlink'>Make an account?</Link>
                    <button className='loginbutton' type="Submit">Connexion</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login