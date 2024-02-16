import { Box } from "@mui/material";
import CV from '../assets/Untitled-1.png';

function Vitae() {
  return (
    <Box sx={{height:'1400px'}}>
      <img src={CV} alt="CV"
      style={{position: 'absolute' , width: '800px', marginLeft: 'auto', marginRight: 'auto'}}
      />
    </Box>
  );
}

export default Vitae;
