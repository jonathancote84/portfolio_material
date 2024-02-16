import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import PropTypes  from 'prop-types';
//import VideoPlayer from './VideoPlayer';


export default function VideoList(props) {
  const [open, setOpen] = useState(false);

  const handleVideoClick = (item) => {
    console.log('Video clicked', item);
    setOpen(true);
  }
  // const handleClose = () => {
  //   setOpen(false);
  // }

  return (
  
    <Box sx={{display:'flex' }}>
      <ImageList variant="masonry" 
      cols={4}
      gap={8}
      >
        {props.items.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={() => handleVideoClick(item)}
            />       
            {/* <VideoPlayer /> */}
          </ImageListItem>
        ))}

      </ImageList>

    </Box>
  );
}

VideoList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          image: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired
      })
  ).isRequired
};
