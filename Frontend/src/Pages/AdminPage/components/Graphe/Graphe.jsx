import React, { useState, useEffect } from 'react';
import Header from '../../../UserPage/components/sidebar/Header';
import Graph from '../../../UserPage/components/Graphe/Graph';
import axios from "axios"
import { useParams } from 'react-router-dom';

function Graphe() {
  const { companyName, uiqueId } = useParams(); // Move useParams() here
  
  const [viewformResulte, setViewformResulte] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (companyName && uiqueId) {
      axios.get(`/api/AdmingetFormsResult/${companyName}/${uiqueId}`).then(response => {
        if (response.data.status === 200) {
          setViewformResulte(response.data.fromResulte);
          setLoading(false); // Update loading state when data is fetched
        }
      });
    }
  }, [companyName, uiqueId]);

  if (loading) {
    return <p>Loading...</p>; // Display loading message while fetching data
  }

  if (viewformResulte.length === 0) {
    return <div style ={{paddingTop:"20px"}}className="alert alert-warning" role="alert">Aucun client n'a rempli le formulaire.        </div>; // Display message if data is empty
  }

  // Initialize an object to store counts for each criterion
  const criterionCounts = {};

  // Iterate through each item in the apiData.fromResulte array
  viewformResulte.forEach(item => {
    // Remove surrounding quotes from the Resultat string and split into pairs of criterion-rating
    const pairs = item.Resultat.replace(/"/g, '').split(', ');

    // Iterate through each pair and extract criterion and rating
    pairs.forEach(pair => {
      const [criterion, rating] = pair.split(': ');
      const trimmedCriterion = criterion.trim(); // Trim whitespace from criterion
      const trimmedRating = parseInt(rating); // Parse rating as integer

      // Increment count for the criterion in the criterionCounts object
      if (trimmedCriterion in criterionCounts) {
        criterionCounts[trimmedCriterion] += trimmedRating;
      } else {
        criterionCounts[trimmedCriterion] = trimmedRating;
      }
    });
  });

  // Convert criterionCounts object to an array of { label, value } objects
  const data = Object.keys(criterionCounts).map(criterion => ({
    label: criterion,
    value: criterionCounts[criterion]
  }));

  return (
    <>
      <Header title="Liste de diagramme Graphique" />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '45%' }}>
          <h3>Bar Graph</h3>
          <Graph data={data} chartType="bar" />
        </div>
        <div style={{ width: '45%' }}>
          <h3>Line Graph</h3>
          <Graph data={data} chartType="line" />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '45%' }}>
          <h3>Pie Chart</h3>
          <Graph data={data} chartType="pie" />
        </div>
       
      </div>
    </>
  );
}

export default Graphe;
