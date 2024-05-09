import React, { useState } from 'react'
import './style/contact.css'
import contactImg from '../assets/contact.svg'
import {  TextareaAutosize, TextField } from '@mui/material';
import axios from "axios"
import Swal from 'sweetalert2';

const Contact = () => {

    const [formData, setFormData] = useState({
        companyName: '',
        mail: '',
        message: ''
      });


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then((response) => {
                    axios.post('/api/StoreContact', formData)
                        .then(response => {
                            if (response.data.status === 200) {
                                setFormData("");
                                Swal.fire({
                                icon: 'success',
                                title: 'message data envoyer successfully!',
                                showCancelButton: false,
                                showConfirmButton: true,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK',
                                });
                            }
                            else {
                                swal("warning", "verifier you email  ");
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                    });
        });
      };

    return (
        <>
            <div className="contactcontainer">
                <div className="topside">
                    <h1>We're all ears</h1>
                    <p>fill out the form to start the conversation, we'll get right back to you</p>
                </div>
                <div className="buttomside">
                    <div className="leftsidecontact">
                        <img src={contactImg} />
                        <p className='p1'>
No matter what you need — whether it's to explore our experience in building graphs, to ask us how to improve or create your graph-based services, or to request a quote — do not hesitate to get in touch with us. We will be happy to talk with you, share our expertise, and provide guidance on the right design direction for your graph-based application.</p>
                        <p className='p2'> We love indeed to converse with professionals and inspiring about
                            cool projects!</p>
                    </div>
                    <div className="rightsidecontact">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                        <TextField
                        fullWidth
                        label="Nom de Socite"
                        name="companyName" // Specify the name attribute
                        value={formData.companyName} 
                        onChange={handleInputChange}
                        style={{
                            marginTop:"20px",
                            marginBottom:"10px",
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontFamily: 'inherit',
                            boxSizing: 'border-box',
                        }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="mail" 
                            value={formData.mail} 
                            onChange={handleInputChange}
                            style={{
                                marginTop:"2px",
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                                fontFamily: 'inherit',
                                boxSizing: 'border-box',
                            }}
                        />
                        <TextareaAutosize
                            placeholder="Message"
                            name="message" 
                            value={formData.message}
                            onChange={handleInputChange}
                            style={{
                                marginTop:"2px",
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                marginTop:"20px",
                                width:"100%",
                                height:"40%",
                                fontSize: '16px',
                                fontFamily: 'inherit',
                                backgroundColor: 'transparent',

                                boxSizing: 'border-box',
                            }}
                        />
                            <button type="submit">Envoyer</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact