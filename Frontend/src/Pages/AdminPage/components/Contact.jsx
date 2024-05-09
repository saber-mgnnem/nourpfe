import { Box, Button, useTheme } from "@mui/material";
import "./style.css"
import { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
const Contact = () => {

      
      
  const [viewContact , setViewContact] = useState([])
  useEffect(()=>{

    axios.get(`/api/AdmingetContact`).then(response => {
        // Handle the response data
        if(response.data.status === 200){
          setViewContact(response.data.contacts)

        }
    })
 
  },[]);

  const deleteMassge = (e,id)=>{
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this module!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`/api/Admin_delete_Contact/${id}`).then(response => {
          // Handle the response data
          if(response.data.status === 200){
            swal("Success",response.data.message , 'success');
            axios.get(`/api/AdmingetContact`).then(response => {
              // Handle the response data
              if(response.data.status === 200){
                setViewContact(response.data.contacts)
      
              }
          });      
          }
        })
      } else {
        swal("Your module is safe!");
      }
    });
   
  }


  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "companyName",
      headerName: "Nom de socité",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
      ,
    {
      field: "mail",
      headerName: "Email de Socité",
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message envoyer",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >     
            <Button type="submit" onClick={(e) => deleteMassge(e, params.row.id)} color="secondary">
                <DeleteIcon className="delateIcon" /> 
            </Button>   
      
          </Box>
        );}} ];
  return (
    <>
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
                  <DataGrid checkboxSelection rows={viewContact} columns={columns} />
                </Box>
                    </Box>
              </Box>

          </Box>
      </Box>
    </>
  )
}

export default Contact