import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { animateScroll } from 'react-scroll';



const drawerWidth = 150;
const navItems = [
  {id:0, title: 'Home', link: 'home', amount: '0'},
  {id:1, title: 'Images', link: 'images', amount: '800'},
  {id:2, title: 'Video', link: 'video', amount: '2370'},
  {id:3, title: 'Artist Statement', link: 'artist-statement', amount: '2750'},
  {id:4, title: 'Bio', link: 'bio', amount: '3000'},
  {id:5, title: 'CV', link: 'cv',  amount: '3500'},
  {id:6, title: 'Contact', link: 'contact',  amount: '5500'}
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLinkClick = (item) => {
    // e.preventDefault();
    const options = {
      duration: 500,
      smooth: true
    }
    console.log('link clicked', item);
    animateScroll.scrollTo(item.amount, options);
    
 
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} style={{ opacity:'.5', boxShadow: 'none'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JJC
      </Typography>
      <Divider />
      <List style={{ backgroundColor:'rgba(190,221,158,150)', boxShadow: 'none'}}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {/* <Link
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              key={item.id}
            > */}
              <ListItemButton sx={{ textAlign: 'center' }}
              onClick={() => handleLinkClick(item)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>            
            {/* </Link> */}git 
          </ListItem>
        ))}
      </List>
    </Box>
  );

  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor:'rgba(190,221,158,150)', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'none', md: 'block' } }}
          >
            JJC
          </Typography>
          <Box sx={{ display: { sm: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              // add scroll link around button
              // <Link
              // to={item.link}
              // spy={true}
              // smooth={true}
              // offset={-100}
              // duration={500}
              // activeClass="active"
              // key={item.id}
              // >
                <Button key={item.id} sx={{ color: '#fff' }} 
                onClick={() => handleLinkClick(item)}
                >
                  {item.title}
                </Button> 
              // </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          style={{ opacity:'.5'}}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;