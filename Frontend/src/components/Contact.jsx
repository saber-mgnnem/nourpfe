import React, { useState } from 'react'
import './style/contact.css'
import contactImg from '../assets/contact.svg'
import { InputText } from "primereact/inputtext";

const Contact = () => {
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
                            <span className="p-float-label">
                                <InputText className="username"/>
                                <label htmlFor="username">Username</label>

                            </span>
                            <span className="p-float-label">
                                <InputText className="username" />
                                <label htmlFor="username">CompanyEmail</label>

                            </span>
                            <textarea className='inputarea'></textarea>
                            <button>Let's talk</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact