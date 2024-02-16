import { Container } from "@mui/material";
import CV from '../assets/Untitled-1.png';

function Bio() {
  return (
    <Container sx={{height:'1000px'}}>
      <img src={CV} alt="CV"
      style={{position: 'absolute' , width: '800px', marginLeft: 'auto', marginRight: 'auto'}}
      />
    </Container>
  );
}

export default Bio;
