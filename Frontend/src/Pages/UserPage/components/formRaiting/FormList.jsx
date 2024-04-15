import Header from "../sidebar/Header";
import { Box, Button } from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import swal from 'sweetalert';
const FormList = () => {
  const[companyName, setCompanyName] =useState("");

    
  const [viewform , setViewform] = useState([])
  useEffect(() => {
    const userData = localStorage.getItem('auth_USER');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setCompanyName(parsedUserData.name);
      console.log(companyName); // Check the value here
      axios.get(`/api/getFormsWitheName/${parsedUserData.name}`).then(response => {
        // Handle the response data
        if (response.data.status === 200) {
          setViewform(response.data.forms);
        }
      });
    }
  }, []);
  
  const deleteUser = (e, id) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Form!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`/api/delete_forme/${id}`).then(response => {
            // Handle the response data
            if (response.data.status === 200) {
              swal("Success", response.data.message, 'success');
              axios.get(`/api/getFormsWitheName/${companyName}`).then(response => {
                // Handle the response data
                if (response.data.status === 200) {
                  setViewform(response.data.forms);
                }
              });
            } else {
              swal("Error", response.data.message, 'error');

            }
          });
        } else {
          swal("Your Form is safe!");
        }
      });
  };
  


  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "companyName",
      headerName: "Nom de Socité",
      flex: 1,
    },
    {
        field: "listeCritere",
        headerName: "Les Critere",
        flex: 1,
      }
      ,
    {
      field: "url",
      headerName: "Formulaire Lien",
      flex: 1,
    },
    {
      field: "debutDate",
      headerName: "Date de debut",
      flex: 1,
    },
    {
      field: "expirationDate",
      headerName: "Date d'expiration",
      flex: 1,
    },
    
    {
      field: "actions",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        const handleClick = () =>
        navigate(`/user/update_form/${params.row.id}`);
        return (
          <Box
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >     
            <Button type="submit" onClick={(e) => deleteUser(e, params.row.id)} color="secondary">
                <DeleteIcon className="delateIcon" /> 
            </Button>



            <Button type="submit" color="secondary"onClick={handleClick} >
            < UpdateIcon /> 
            </Button>     
      
          </Box>
        );}} ];
  const navigate = useNavigate();
  return (
    <>
     <Header title="liste de Formaulaire"/>
      <Box m="20px">
          <Box 
               display="flex" 
               justifyContent="space-between" 
                m="20px ">


              <Box width="100%" alignItems="center">
                    <Box m="20px">
                <Box
                  m="40px 0 0 0"
                  height="75vh"
                
                
                >
                  <DataGrid checkboxSelection rows={viewform} columns={columns} />
                </Box>
                    </Box>
              </Box>

          </Box>
      </Box>
    </>
  )
}

export default FormList