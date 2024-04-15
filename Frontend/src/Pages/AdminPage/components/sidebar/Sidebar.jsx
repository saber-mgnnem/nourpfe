import React from 'react';
import { Link } from 'react-router-dom';
import { FaTh, FaUser, FaUsers, FaUserPlus, FaPlus } from 'react-icons/fa'; // Importing necessary icons
import logo from '../../../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faFileAlt, faList, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes FontAwesome nécessaires

const Sidebar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ maxHeight: '200vh', overflowY: 'auto' }}>
        <Link to="/admin" className="brand-link">
          <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Admin</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <ul>
              <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/admin" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
                  <FaTh className="nav-icon" />
                  <p style={{marginBottom: 0, marginLeft: 5}}>Dashboard </p>
                </Link>
              </li>
              <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/admin/profile" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
                  <FaUser className="nav-icon" />
                  <p style={{marginBottom: 0, marginLeft: 5}}>Profile </p>
                </Link>
              </li>
              <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/admin/user_list" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
                  <FaUsers className="nav-icon" />
                  <p style={{marginBottom: 0, marginLeft: 5}}>Liste d'utilisateur</p>
                </Link>
              </li> 
              <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/admin/add_user" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
                  <FaUserPlus className="nav-icon" />
                  <p style={{marginBottom: 0, marginLeft: 5}}>Ajoute Utilisateur</p>
                </Link>
              </li>
              <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/admin/form_list" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faList} /> {/* Utilisez l'icône appropriée en fonction du nom */}
              <p style={{marginBottom: 0, marginLeft: 5}}>Liste de formulaire</p>
            </Link>
          </li>
          <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/admin/form_list_resulte" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faFileAlt} /> {/* Use the function to get the appropriate icon */}
        <p style={{ marginBottom: 0, marginLeft: 5 }}>Resultat de formulaire</p>
      </Link>
    </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
