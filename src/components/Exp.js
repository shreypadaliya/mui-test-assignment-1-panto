import React from "react";
import { Box, Typography, Grid } from '@mui/material';
import exp_img from "../assets/imgs/Group 48095438.png";
import moreinfo from "../assets/imgs/Group 48095399.png";

const Exp = () => {
  return (
    <Grid container sx={{ paddingTop: '240px', height: '900px' , fontFamily:"gilroy-regular",}}>
    {/* First Column */}
    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <img src={exp_img} alt="exp img" style={{ width: '100%', maxWidth: '728px', height: 'auto', borderRadius: '20px'}} />
        </Box>
      </Box>
    </Grid>
  
    {/* Second Column */}
    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', textAlign: 'center', padding: '0 20px' , fontFamily:"gilroy-regular",}}>
        <Typography variant="h4" sx={{ letterSpacing: '3px', fontSize: '18px', color: '#e58411', textTransform: 'uppercase',textAlign:"left",}}>
          Experiences
        </Typography>
        <Typography variant="h2"  sx={{ fontSize: '42px', fontFamily: 'gilroy-bold', color: '#1e1e1e', marginTop: '20px',textAlign:"left",fontWeight:"800"  }}>
          We provide you 
          the <br />best experience
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', color: '#1e1e1e', opacity: "80", lineHeight: '185%', fontFamily: 'gilroy-regular', marginTop: '20px',textAlign:"left" }} paragraph>
          You don't have to worry about the result because all of these <br />interiors are made by people who are professionals in their fields <br />with an elegant and luxurious style and with premium quality <br />materials
        </Typography>
        <Box  sx={{ marginTop: '20px' ,textAlign:"left"}}>
          <img src={moreinfo} alt="IMG" />
        </Box>
      </Box>
    </Grid>
  </Grid>
  
  );
};

export default Exp;
