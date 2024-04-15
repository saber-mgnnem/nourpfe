import { Box, colors } from "@mui/material";
import { Link } from 'react-router-dom';
import { BarChart } from '@mui/icons-material';
import { styled } from '@mui/system';

const GraphIcon = styled(BarChart)({
  fontSize: '4rem',
});

const CardFormResulte = (props) => {
  const currentDate = new Date();
  const expirationDate = new Date(props.date);

  // Check if the current date is before the expiration date
  const isDateValid = currentDate > expirationDate;

  return (
    <>
      <Box bgcolor="#efeeee" p={2} boxShadow={3} borderRadius={4} textAlign="center">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Date d'expiration</span> <h5>{props.date}</h5>
        </div>

        <Box>
          <GraphIcon />
        </Box>

        <h5>{props.name}</h5>
        
        {isDateValid ? (
          <Link to={`/${props.route}/graphe/${props.name}/${props.id}`} style={{ textDecoration: 'none' }}>
            <Box bgcolor="#637963" color="white" p={1} borderRadius={4} mt={1}>
              <h6>Voir Graphe</h6>
            </Box>
          </Link>
        ) : (
<p style={{ color: "red", fontSize: "smaller" }}>La date d'expiration n'est pas encore arrivée.</p>
        )}
      </Box>
    </>
  )
}

export default CardFormResulte;
