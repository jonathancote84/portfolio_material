import { useEffect, useRef } from 'react';
// import cloudinary from "cloudinary-video-player";
// import "cloudinary-video-player/dist/cld-video-player.min.css";

const VideoPlayer = ({ id, publicId, ...props }) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;
    console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
    playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      secure: true
    });
  }, []);

  return (
    <div style={{ width: '100%', aspectRatio: `${props.width} / ${props.height}`}}>
      <video
        ref={videoRef}
        id={id}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
      />
    </div>
  )
}

export default VideoPlayer;