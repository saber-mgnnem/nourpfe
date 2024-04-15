import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import "./style.css";
import logo from '../../../../assets/logo.png';
import axios  from 'axios';
import Swal from 'sweetalert2';

const RatingForm = () => {
  const [criteria, setCriteria] = useState([]);
  const [ratings, setRatings] = useState({});
  const { listeCritere, expirationDate, companyName,uniqueId } = useParams();

  useEffect(() => {
    const decodedCriteria = decodeURIComponent(listeCritere);
    const criteriaArray = decodedCriteria.split(',');
    setCriteria(criteriaArray);
  }, [listeCritere]);

  const currentDate = new Date();
  const expirationDateObject = new Date(expirationDate);
  const isDateValid = currentDate > expirationDateObject;

  const handleRatingChange = (criterion, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [criterion]: rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDateValid) {
      alert("La date d'expiration du formulaire est dépassée. Veuillez mettre à jour le formulaire.");
      return;
    }
  
    // Convert ratings object into a string representation
    try {

    const Resultat = Object.entries(ratings)
      .map(([criterion, rating]) => `"${criterion}": ${rating}`)
      .join(', ');
    const formId =uniqueId;

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`http://127.0.0.1:8000/api/submit_result_form`, { companyName, Resultat, formId }).then(resp => {
        if (resp.data.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Form data saved successfully!',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          });
        }
        else {
          swal("warning", "verifier you email or password ");
        }
      });
    });
  
  } catch (error) {
    console.error('Error saving form data:', error);
    
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error saving form data. Please try again later.',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    });
  }
    console.log('Ratings:', ratings);
    setRatings({});
  };
  

  return (
    <div className="containeres">
      <div className="card-container">
        <div className="front">
        <div className="image">
                <img src={logo} alt=""/>
                <span style={{ color: 'white' }}>{companyName}</span>
       </div>
          <div className="card-number-box">CRITÈRES DE TARIFICATION</div>
          <div className="flexbox">
            <div className="box">
              <span>Nom de société</span>
              <div className="card-holder-name">Date d'expiration</div>
            </div>
            <div className="box">
              <span>{companyName}</span>
              <div className="expiration">
                <span className="exp-year">{expirationDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {criteria.map((criterion, index) => (
          <div key={index} className="inputBox">
            <span> {criterion}</span>
            <StarRating
              className="card-holder-input"
              value={ratings[criterion] || 0}
              onChange={(rating) => handleRatingChange(criterion, rating)}
            />
          </div>
        ))}
        {!isDateValid && (
          <Typography variant="body2" color="error" gutterBottom>
            La date d'expiration du formulaire est dépassée. Veuillez mettre à jour le formulaire.
          </Typography>
        )}
        <Button
          className="submit-btn"
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isDateValid}
          startIcon={!isDateValid && <CircularProgress size={16} />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RatingForm;
