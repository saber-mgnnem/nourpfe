import { Box, TextField } from "@mui/material";
import Header from "../../../UserPage/components/sidebar/Header";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CardFormResulte from "../../../UserPage/components/Graphe/CardFormResulte";

const Index = () => {
  const [companyName, setCompanyName] = useState("");
  const [viewform, setViewform] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setCompanyName(parsedUserData.name);
      axios.get(`/api/AdmingetForms`).then(response => {
        if (response.data.status === 200) {
          setViewform(response.data.forms);
        }
      });
    }
  }, []);

  const navigate = useNavigate();
  
  // Function to filter the viewform based on search term
  const filteredForms = viewform.filter(form => {
    return form.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || 
           form.expirationDate.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Header title="Liste de diagramme Graphique" />
      <Box >
        <Box>
          <TextField
            label="Rechercher"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
        </Box>
        <Box className='public-cours' display="flex" flexWrap="wrap" marginTop="10px">
          {filteredForms.map((form) => {
            const url = form.url;
            const parts = url.split('/');
            const lastPart = parts[parts.length - 1];

            return (
              <Box key={form.id} style={{ maxWidth: '29%', flex: '1 0 25%', marginTop: '10px', marginRight: '40px' }}>
                <CardFormResulte route="admin" name={form.companyName} id={lastPart} date={form.expirationDate}/>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Index;
