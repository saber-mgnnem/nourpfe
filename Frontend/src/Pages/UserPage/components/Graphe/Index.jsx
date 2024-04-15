import { Box } from "@mui/material";
import Header from "../../components/sidebar/Header";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CardFormResulte from "./CardFormResulte";

const Index = () => {
  const [companyName, setCompanyName] = useState("");
  const [viewform, setViewform] = useState([]);
  
  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setCompanyName(parsedUserData.name);
      axios.get(`/api/getFormsWitheName/${parsedUserData.name}`).then(response => {
        if (response.data.status === 200) {
          setViewform(response.data.forms);
        }
      });
    }
  }, []);

  const navigate = useNavigate();
  
  return (
    <>
      <Header title="Liste de diagramme Graphique" />
      <Box >
        <Box className='public-cours' display="flex" flexWrap="wrap" marginTop="10px" >
        {viewform.map((form) => {
          const url = form.url;
          // Split the URL string by '/'
          const parts = url.split('/');
          // Get the last part of the URL
          const lastPart = parts[parts.length - 1];

          return (
            <Box key={form.id} style={{ maxWidth: '29%', flex: '1 0 25%', marginTop: '10px', marginRight: '40px' }}>
              <CardFormResulte name={form.companyName} id={lastPart}  route ="user"date={form.expirationDate}/>
            </Box>
          );
        })}

        </Box>
      </Box>
    </>
  );
}

export default Index;
