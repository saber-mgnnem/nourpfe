import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom'; // Assuming you're using React Router
const Layout = () => {
  // Define state for user status
  const [status, setStatus] = useState("");

  // Fetch user data from localStorage and update status state
  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setStatus(parsedUserData.status);
      console.log(parsedUserData.status);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  // Render message if status is "Non valide"
  const renderValidationMessage = () => {
    if (status === "Non Valide") {
      return (
        <div className="alert alert-warning" role="alert">
          Attendez 24 heures, votre compte n'est pas encore validé.
        </div>
      );
    }
    return null;
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">

        <section className="content">
          <div className="container-fluid">
            {/* Render validation message */}
            {renderValidationMessage()}
            {/* Render Outlet if status is not "Non valide" */}
            {status !== "Non valide" && <Outlet />}          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
