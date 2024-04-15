import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const AjouterEnseignant = () => {
    const navigate = useNavigate();
    const [companyName, setcompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    let errorMessage = ""; // define errorMessage variable here

    const handleRegister = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!companyName || !email || !phone || !password) {
            errorMessage = "All fields are required";
            alert(errorMessage);
            return;
        }

        try {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/register`, { companyName, email, phone, password }).then(res => {
                    if (res.data.status === 200) {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.username);
                        setcompanyName("");
                        setEmail("");
                        setPhone("");
                        setPassword("");
                        swal("Success", res.data.message, "success");
                        navigate('/admin/user_list');
                    }
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Box m="20px">
            <Box className="Ajouter_User_form" ml="100px">
                <form onSubmit={handleRegister} style={{ maxWidth: "400px" }}>
                    <input
                        type="text"
                        placeholder="Nom de Société"
                        value={companyName}
                        onChange={(e) => setcompanyName(e.target.value)}
                        style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
                    />

                    <input
                        type="email"
                        placeholder="Adresse Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
                    />

                    <input
                        type="phone"
                        placeholder="Numéro de Téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
                    />

                    <input
                        type="password"
                        placeholder="Mot de Passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
                    />

                    {errorMessage && <p>{errorMessage}</p>}

                    <Box p="20px" mt="20px">
                        <Button type="submit" color="secondary" variant="contained" style={{ width: "100%" }}>
                            Ajouter Utilisateur
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default AjouterEnseignant;
