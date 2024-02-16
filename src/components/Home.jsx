import conch2 from '../assets/conch-shell-mic-outline.svg';
import conch from '../assets/conch-shell-mic.svg'
import { Box } from "@mui/material";


function Home() {
  return (
    <Box name='Home' style={{ position: 'relative', marginLeft:'auto', marginRight:'auto', width:'90%', height:'700px'}}>
      <h1 style={{marginLeft:'300px', marginTop:'100px', zIndex: 10}}>Jonathan Coté</h1>
      <h4 style={{marginLeft:'370px', marginTop:'-20px', zIndex: 10}}>New Media Art</h4>
      <div>

      </div>
      <img src={conch2} alt="conch" style={{position:'absolute', top:'50px',right:'200px'}} />
      <img src={conch} alt="conch-shell" />
    </Box>
  );
}
export default Home