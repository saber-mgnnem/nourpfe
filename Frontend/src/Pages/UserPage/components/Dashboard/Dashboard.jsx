import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../sidebar/Header';
import Graph from '../Graphe/Graph';
function Dashboard() {
  const [viewformResulte, setViewformResulte] = useState([]);
  const [viewform, setViewform] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [uiqueId, setUiqueId] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('auth_USER'));
    if (userData) {
      setCompanyName(userData.name);
      axios.get(`/api/getFormsWitheName/${userData.name}`).then(response => {
        if (response.data.status === 200) {
          setViewform(response.data.latestForm);
          const url = response.data.latestForm.url;
          if (url) {
            const parts = url.split('/');
            setUiqueId(parts[parts.length - 1]);
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (companyName && uiqueId) {
      axios.get(`/api/getFormsResult/${companyName}/${uiqueId}`).then(response => {
        if (response.data.status === 200) {
          setViewformResulte(response.data.fromResulte);
          setLoading(false);
        }
      });
    }
  }, [companyName, uiqueId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (viewformResulte.length === 0) {
    return <div style={{ paddingTop: "20px" }} className="alert alert-warning" role="alert">Aucun client n'a rempli le formulaire.</div>;
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

  // Define your data arrays here
  

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
  );}

export default Dashboard;
