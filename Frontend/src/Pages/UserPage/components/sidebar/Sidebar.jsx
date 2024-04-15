import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUser, faList, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes FontAwesome nécessaires
import logo from '../../../../assets/logo.png';
import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";
 import axios  from 'axios';
const Sidebar = () => {
    // Define state for user status
    const [status, setStatus] = useState("");
    const[companyName, setCompanyName] =useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const userData = localStorage.getItem('auth_USER');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        setStatus(parsedUserData.status);
        setCompanyName(parsedUserData.name)
        console.log(parsedUserData.status);
      }
    }, []); 
  
   

  return (
    <>
    <div>
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <a href="index3.html" className="brand-link">
          <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">{companyName}</span>
        </a>
          <div className="sidebar"style={{ height: '497px', overflowY: 'auto' }}>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
           {status !== "Non Valide" && 

            <ul>
    
            
            <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faTh} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>tableau de bord </p>
            </Link>
          </li>
           <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user/profile" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faUser} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>Profil </p>
            </Link>
          </li>
    
          <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user/critere_list" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faList} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>liste de critère</p>
            </Link>
          </li> 
          
          <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user/form_list" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faList} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>Liste de formulaire</p>
            </Link>
          </li>
          
           <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user/graphe_list" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faChartBar} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>Graphique </p>
            </Link>
          </li>
          <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/user/Add_graphe" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faChartBar} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>Ajoute Graph </p>
            </Link>
          </li>
    
          <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
            
        </li>
    
    
            </ul>
        
  }
          </div>
        </div>
       

        </aside>
    </div>
    
  
    </>



  );
};

export default Sidebar;
