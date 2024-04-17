import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import moreinfo from "../assets/imgs/Group 48095399.png";
import { FaInfoCircle } from 'react-icons/fa';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const WhyChoose = () => {
  return (
    <Box className="why-us" id="why-us">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{paddingLeft: { xs: "0px", md: "80px" }}}>
            <Typography sx={{fontSize:"50px",lineHeight:"49.22px",fontWeight:"700",paddingTop:"10px", fontFamily:"gilroy-regular",textAlign: { xs: "center", md: "left" }}}>Why <br />choosing us?</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}  >
          <Box sx={{textAlign: { xs: "center", md: "left" }}}>
            <Typography sx={{fontSize:"24px",lineHeight:"28.13px",fontWeight:"500", fontFamily:"gilroy-regular",}} >Luxury facilities</Typography>
            <Typography sx={{color:"1E1E1E",fontWeight:"300",fontSize:"16px",paddingTop:"20px", fontFamily:"gilroy-regular",}}>
              The advantage of hiring a workspace <br />with us is that gives you comfortable <br />service and all-around facilities.
            </Typography>
            <IconButton sx={{paddingLeft:"0px"}}>
              <img src={moreinfo} alt="IMGG1" style={{ marginTop: "6px" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{textAlign: { xs: "center", md: "left" }}} >
            <Typography sx={{fontSize:"24px",lineHeight:"28.13px",fontWeight:"500", fontFamily:"gilroy-regular",}}>Affordable Price</Typography>
            <Typography sx={{color:"1E1E1E",fontWeight:"300",fontSize:"16px",paddingTop:"20px", fontFamily:"gilroy-regular",}}>
              You can get a workspace of the highest <br />quality at an affordable price and still <br /> enjoy the facilities that are only here.
            </Typography>
            <IconButton sx={{paddingLeft:"0px"}}>
              <img src={moreinfo} alt="IMGG2" style={{ marginTop: "6px" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{textAlign: { xs: "center", md: "left" }}} >
            <Typography sx={{fontSize:"24px",lineHeight:"28.13px",fontWeight:"500", fontFamily:"gilroy-regular",}}>Many Choices</Typography>
            <Typography sx={{color:"1E1E1E",fontWeight:"300",fontSize:"16px",paddingTop:"20px", fontFamily:"gilroy-regular",}}>
              We provide many unique work space <br />choices so that you can choose the <br /> workspace to your liking.
            </Typography>
            <IconButton sx={{paddingLeft:"0px"}}>
              <img src={moreinfo} alt="IMGG3" style={{ marginTop: "6px"}} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChoose;
