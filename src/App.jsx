import * as React from 'react';
import conch2 from './assets/conch-shell-mic-outline.svg';
import conch from './assets/conch-shell-mic.svg'
import MasImageList from './components/MasImageList';
import VideoList from './components/VideoList.jsx';
import DrawerAppBar from './components/DrawAppBar.jsx';
import Vitae from './components/Vitae.jsx';
import Statement from './components/Statement.jsx';
import ContactInfo from './components/Contact.jsx';
// import {Router} from 'react-router-dom';
import Home from './components/Home.jsx';


export default function App() {
  return (

    <div  style={{position:'relative'}} >
      <DrawerAppBar />
      {/* <h1 style={{marginLeft:'300px', marginTop:'100px', zIndex: 10}}>Jonathan Coté</h1>
      <h4 style={{marginLeft:'370px', marginTop:'-20px', zIndex: 10}}>New Media Artist</h4> */}
      {/* <div name='Home' style={{ position: 'relative', marginLeft:'auto', marginRight:'auto', width:'90%', height:'700px'}}>
        <h1 style={{marginLeft:'300px', marginTop:'100px', zIndex: 10}}>Jonathan Coté</h1>
        <h4 style={{marginLeft:'370px', marginTop:'-20px', zIndex: 10}}>New Media Art</h4>
        <img src={conch2} alt="conch" style={{position:'absolute', top:'50px',right:'200px'}} />
        <img src={conch} alt="conch-shell" />
      </div>      */}
      {/* <div style={{background:'98D4C2', height:'330px', display:'block',marginTop:'-200px', marginLeft:'500px', marginRight:'auto', width:'90%'}}>

      </div> */}
      <Home/>
      <div name='Images' >
        <MasImageList id='images' items={itemData} sx={{position:'absolute', top:'300px'}}/>         
      </div>
      <div name='Videos' >
        <VideoList id='videos' items={videoData} sx={{position:'absolute', top:'1600px'}}/>         
      </div>
      <Statement id='statement' sx={{position:'absolute', top:'2400px'}}/> 
      <Vitae id='vitae' sx={{position:'absolute', top:'3200px'}}/>
      <ContactInfo id='contact' sx={{position:'absolute', top:'3000px'}}/>

    </div>

  );   
}


const itemData = [
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878573/images%20art/329869_10150287473503071_669702358_o_uewzuu.jpg',
    title: 'SocialSpaces',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878603/images%20art/290224_10150325252103071_751958983_o_imwfpr.jpg',
    title: 'growingspace01',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878842/images%20art/120845235_10158069961398071_6166547333246831301_n_anj8zb.jpg',
    title: 'vr-floral',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878791/images%20art/598588_10151217179438071_601420388_n_frv9gf.jpg',
    title: 'interstitualDeluezianRelic',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878752/images%20art/290994_10150430036368071_1700849350_o_vtkf0w.jpg',
    title: 'zookeeper(chameleon)',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878778/images%20art/581363_10151119218973071_1517321102_n_pzm3uf.jpg',
    title: 'rubeGoldbergMachine',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707877945/images%20art/Screenshot_2024-02-01_at_12.03.10_PM_gpdpob.png',
    title: 'B700',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878039/images%20art/totemmask_iru3ez.jpg',
    title: 'mask',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878741/images%20art/323415_10150346460008071_481313889_o_e5urfy.jpg',
    title: 'ConchShellMicrophone',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878006/images%20art/midnightbusride_az21xh.jpg',
    title: 'MidnightBusRide',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707877900/images%20art/10984261_10152848676988071_483493653106104880_n_aynjgm.jpg',
    title: 'swamp',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878763/images%20art/392034_10150429897973071_121299620_n_owjkqn.jpg',
    title: 'zookeeper(green)',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878465/images%20art/Iron_y5ylj4.jpg',
    title: 'ironForPrimoLevi',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707878730/images%20art/322955_10150325253948071_1073666684_o_muo1td.jpg',
    title: 'growingspace02',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/image/upload/v1707877889/images%20art/10414492_10152848677068071_2602939937771340837_n_vzxmk0.jpg',
    title: 'radiance',
  },
];

const videoData = [
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/c_limit,h_500,w_800/v1707879347/art%20videos/lung.jpg',
    title: 'lung',
    publicId: 'art%20videos/lung.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707879142/art%20videos/muteface01.jpg',
    title: 'muteface01',
    publicId: 'art%20videos/muteface01.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707879164/art%20videos/timestretch01_eornr1.jpg',
    title: 'timeStretch01',
    publicId: 'art%20videos/timestretch01_eornr1.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707879391/art%20videos/untitled_720p_ckfr9x.jpg',
    title: 'street',
    publicId: 'art%20videos/untitled_720p_ckfr9x.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707878939/art%20videos/branchingtest_pb01_p0ayf1.jpg',
    title: 'lungTest',
    publicId: 'art%20videos/branchingtest_pb01_p0ayf1.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707879196/art%20videos/Untitled_1_bwv3n8.jpg',
    title: 'Stories',
    publicId: 'art%20videos/Untitled_1_bwv3n8.mp4',
  },
  {
    img: 'https://res.cloudinary.com/dsuvanyvt/video/upload/v1707879416/art%20videos/Untitled_nmxshy.jpg',
    title: 'cave',
    publicId: 'art%20videos/Untitled_nmxshy',
  }

];