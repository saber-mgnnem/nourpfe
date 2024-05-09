import React, { useEffect, useState } from 'react';
import { Checkbox, Button, Box, TextField, Grid } from '@mui/material';
import Swal from 'sweetalert2';
import Header from '../sidebar/Header';
import axios  from 'axios';
import { v4 as uuidv4 } from 'uuid'; 

const Index = () => {
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [newCriterion, setNewCriterion] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const[companyName, setCompanyName] =useState("");
  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setCompanyName(parsedUserData.name)
    }
  }, []); 
  const [basicCriteria, setBasicCriteria] = useState(['Qualité des produits', 'Rapidité du service', 'Satisfaction par rapport au service clientèle','Fiabilité des processus de production', 'Propreté et hygiène', 'Sécurité des transactions en ligne', 'Compétence et expertise', 'Réactivité du support technique', 'Efficacité du processus de livraison', 'Sécurité des données']);

  const handleCheckboxChange = (criterion) => {
    if (selectedCriteria.includes(criterion)) {
      setSelectedCriteria(selectedCriteria.filter(item => item !== criterion));
    } else {
      setSelectedCriteria([...selectedCriteria, criterion]);
    }
  };

  const handleAddCriterion = () => {
    if (newCriterion.trim() !== '') {
      setBasicCriteria([...basicCriteria, newCriterion.trim()]);
      setSelectedCriteria([...selectedCriteria, newCriterion.trim()]);
      setNewCriterion('');
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedCriteriaString = selectedCriteria.join(', ');
      const uniqueId = uuidv4(); // Generate a unique ID
      const formLink = `http://localhost:5173/client/ratingform/${encodeURIComponent(selectedCriteriaString)}/${companyName}/${expirationDate}/${uniqueId}`;
      console.log(selectedCriteriaString)
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`http://127.0.0.1:8000/api/add_form`, {companyName,selectedCriteriaString ,formLink,expirationDate}).then(resp => {
            if(resp.data.status === 200){
              Swal.fire({
                icon: 'success',
                title: 'Formilaire enregistre avec succeé!',
                html: `
                  <p>partager le lgne avec leur clients :</p>
                  <div class="form-link-container">
                    <input type="text" id="formLink" value="${formLink}" readonly>
                    <button onclick="copyLink()" class="copy-button" title="Copy link"><FileCopyIcon /></button>
                  </div>
                `,
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              });
    
            }
            else if(resp.data.status === 401){
               
             swal("warning",resp.data.message,"warning");
            }
            else{
             swal("warning","verifier you email or password ");

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
  };
  
  return (
<>
  <Header title="liste de critère"/>
  <Box maxWidth={800} mx="auto" p={3} border="1px solid #ccc" borderRadius={5}>
    <Box textAlign="center" mb={4}>
      <h2>Sélection des critères</h2>
    </Box>      
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}> {/* Increase spacing */}
        <Grid item xs={4} style={{ paddingRight: 20 }}>
          <h3>Ajouter un nouveau critère</h3>
          <Box display="flex" alignItems="center" mb={3}>
            <TextField
              fullWidth
              value={newCriterion}
              onChange={(e) => setNewCriterion(e.target.value)}
              label="Nouveau critère"
              variant="outlined"
              style={{
                marginTop: 1,
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                width: '100%', // Adjust width to 100%
              }}
            />
          </Box>
          <Button onClick={handleAddCriterion} variant="contained" color="primary" mt={2}>
            Ajouter un critère
          </Button>
        </Grid>
        <Grid item xs={4} style={{ borderLeft: '1px solid #ccc', paddingLeft: 20 }}>
          <h3>Basic Criteria</h3>
          {basicCriteria.map((criterion, index) => (
            <Box key={index} display="flex" alignItems="center" >
              <Checkbox
                checked={selectedCriteria.includes(criterion)}
                onChange={() => handleCheckboxChange(criterion)}
              />
              {criterion}
            </Box>
          ))}
        </Grid>
        <Grid item xs={4}  style={{ borderLeft: '1px solid #ccc', paddingLeft: 20 }}> {/* Adjust grid item to full width */}
          <h3 >Date d'expiration</h3> {/* Add style for margin top */}
          <TextField
            type="date" // Change type to date
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            variant="outlined"
            fullWidth
            style={{
              marginTop: 1,
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              width: '100%', // Adjust width to 100%
            }}
          />
        </Grid>
      
        <Grid item xs={12}> {/* Adjust grid item to full width */}
          <Button type="submit" variant="contained" color="primary" mt={2}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
</>

  
  );
};

export default Index;
