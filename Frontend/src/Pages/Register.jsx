import React from 'react'
import '../components/style/Register.css'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import {  useNavigate } from "react-router-dom";
import axios from "axios"
import swal from 'sweetalert';
import {useState } from "react"

const Register = () => {

    
  const navigate = useNavigate();
  const[companyName, setCompanyName] =useState("");
  const[email, setEmail] =useState("");
  const[phone, setPhone] =useState("");
  const[password, setPassword] =useState("");
  const[repeatPassword, setRepeatPassword] =useState("");
  let errorMessage = ""; // define errorMessage variable here

    const handleRegister = async (e) =>{
        e.preventDefault();
    
        // rest of the code
      
        if (!companyName || !email || !password || !phone || !repeatPassword ) {
          errorMessage = "All fields are required"; // update errorMessage value
        }
        if (errorMessage) {
          alert(errorMessage);
        } else {  
    
        try{
          axios.get('/sanctum/csrf-cookie').then(response => {
             axios.post(`/api/register`, { companyName,email,phone,password,}).then(res => {
                if(res.data.status === 200){
                        setCompanyName("");
                        setEmail("");
                        setPhone("");
                        setPassword("");
                        setRepeatPassword("");

                        swal("Success",res.data.message,"success");
                        navigate('/login');
    
                      }
                   });  
              
              });
    
        } catch(e){
                       console.log(e)
                      }
    
                    }
    
    
      }
    return (
        <>
        <NavBar/>
            <div className="nav"></div>
            <div className="Registercontainer">
            <div className="Registerform">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>

                    <input type='text' className='Registerinput' placeholder='Non de société' value={companyName} required onChange={(e) => setCompanyName(e.target.value)} />
                    <input type='email' className='Registerinput' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' className='Registerinput' placeholder='Phone' value={phone} required onChange={(e) => setPhone(e.target.value)}     autoComplete="tel" />
                    <input type='password' className='Registerinput' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                    <input type='password' className='Registerinput' placeholder='Repeat Password' value={repeatPassword} required onChange={(e) => setRepeatPassword(e.target.value)} autoComplete="new-password" />

                    <Link to="/login" className='registerlink'>Already have an account?</Link>
                    <button className='Registerbutton' type="submit">Register</button>
                    {errorMessage && <p>{errorMessage}</p>}

            </form>

            </div>
            </div>
        </>
    )
}

export default Register