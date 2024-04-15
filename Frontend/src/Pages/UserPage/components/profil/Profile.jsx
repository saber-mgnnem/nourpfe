import { Box, Button, Grid, TextField, FormControl ,InputLabel, Select, MenuItem} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';

const Profile = () => {
  const authUser = JSON.parse(localStorage.getItem('auth_USER'));
  const id =authUser.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    axios.get(`/api/get_user/${id}`).then(response => {
      // Handle the response data
      if (response.data.status === 200) {
        console.log(response.data.user)
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPhone(response.data.user.phone);
      }
    });
  }, [id]);
  const handleUpdateUserData = () => {
    const updatedUserData = {  name, email, phone,};
    axios.put(`/api/update_profile/${id}`, updatedUserData)
      .then(response => {
        if (response.data.status === 200) {
          swal("Success", response.data.message, "success");
          // Optionally update local storage or redirect user
        }
      })
      .catch(error => {
        console.error("Error updating user data:", error);
      });
  };

  const handleUpdatePassword = () => {
    axios.put(`/api/updatePassword/${authUser.id}`, { newPassword })
      .then(response => {
        if (response.data.status === 200) {
          swal("Success", response.data.message, "success");
        }
      })
      .catch(error => {
        console.error("Error updating password:", error);
      });
  };

  return (
    <Box m="20px">
      <Box className="Ajouter_User_form" ml="100px">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p><strong>Nom et Prénom:</strong> {name}</p>
            <TextField
              label="Nouveau Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <p><strong>Adresse Email:</strong> {authUser.email}</p>
            <TextField
              label="Nouveau Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <p><strong>Téléphone:</strong> {authUser.phone}</p>
            <TextField
              label="Nouveau Telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
 
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleUpdateUserData}>
              Mettre à jour les données
            </Button>

          </Grid>
          <Grid item xs={12}>
          <p><strong>Modified:</strong> Mot de Passe</p>
            <TextField
              label="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleUpdatePassword}>
              Mettre à jour le mot de passe
            </Button>
          </Grid>
          
        </Grid>

        
        
      </Box>
    </Box>
  );
}

export default Profile;
