import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Header from '../../../UserPage/components/sidebar/Header';

const Index = () => {
  const [companyName, setCompanyName] = useState('');
  const [viewform, setViewform] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setCompanyName(parsedUserData.name);
      axios.get(`/api/AdmingetForms`).then(response => {
        if (response.data.status === 200) {
          setViewform(response.data.forms);
          setFilteredForms(response.data.forms); // Initialize filteredForms with all forms
        }
      });
    }
  }, []);

  const deleteUser = (e, id) => {
    e.preventDefault();
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this module!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        axios.delete(`/api/Admin_delete_forme/${id}`).then(response => {
          if (response.data.status === 200) {
            swal('Success', response.data.message, 'success');
            setViewform(prevForms => prevForms.filter(form => form.id !== id)); // Remove the deleted form from viewform state
            setFilteredForms(prevForms => prevForms.filter(form => form.id !== id)); // Remove the deleted form from filteredForms state
          }
        });
      } else {
        swal('Your module is safe!');
      }
    });
  };

  const handleSearchChange = event => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = viewform.filter(form =>
      form.companyName.toLowerCase().includes(searchValue)
    );
    setFilteredForms(filteredData);
  };

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'companyName', headerName: 'Nom de Socité', flex: 1 },
    { field: 'listeCritere', headerName: 'Les Critere', flex: 1 },
    { field: 'url', headerName: "Formulaire Lien", flex: 1 },
    { field: 'debutDate', headerName: "Date de debut", flex: 1 },
    { field: 'expirationDate', headerName: "Date d'expiration", flex: 1 },
    {
      field: 'actions',
      headerName: 'Action',
      flex: 1,
      renderCell: params => {
        return (
          <Box display="flex" justifyContent="center" borderRadius="4px">
            <Button type="submit" onClick={e => deleteUser(e, params.row.id)} color="secondary">
              <DeleteIcon className="delateIcon" />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Header title="liste de Formaulaire" />
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" m="20px ">
          <Box width="100%" alignItems="center">
            <TextField
              label="Search by Company Name"
              variant="outlined"
              onChange={handleSearchChange}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <Box m="20px">
              <Box m="40px 0 0 0" height="75vh">
                <DataGrid checkboxSelection rows={filteredForms} columns={columns} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
