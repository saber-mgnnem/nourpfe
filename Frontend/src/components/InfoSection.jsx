import React from 'react'
import { Card } from 'primereact/card';
import img1 from '../assets/statistics.png'
import './style/infosection.css'
const InfoSection = () => {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    return (
        <>
            <div className="InfoContainer">
            <div className="h1textdiv">
            <h1 className='h1text'>What we offer !</h1>
            </div>
                <div className="card flex justify-content-center">
                    <div className="cards">
                        <div className="leftsidecard"><img src={img1}/></div>
                        <div className="rightsidecard">
                            <h2>Service one</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftsidecard"><img src={img1}/></div>
                        <div className="rightsidecard">
                            <h2>Service one</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftsidecard"><img src={img1}/></div>
                        <div className="rightsidecard">
                            <h2>Service one</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection