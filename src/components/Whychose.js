import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import moreinfo from "../assets/imgs/Group 48095399.png";
import { FaInfoCircle } from 'react-icons/fa';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const WhyChoose = () => {
  const [showInfo, setShowInfo] = useState([false]);

  const toggleInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  return (
    <Box id="why-us" sx={{ padding: '20px 0' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ paddingLeft: { xs: '0px', md: '80px' } }}>
            <Typography sx={{ fontSize: '50px', lineHeight: '49.22px', fontWeight: '700', paddingTop: '10px', fontFamily: 'gilroy-regular', textAlign: { xs: 'center', md: 'left' } }}>Why <br />choosing us?</Typography>
          </Box>
        </Grid>
        {["Luxury facilities", "Affordable Price", "Many Choices"].map((title, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography sx={{ fontSize: '24px', lineHeight: '28.13px', fontWeight: '500', fontFamily: 'gilroy-regular' }}>{title}</Typography>
              <Typography sx={{ color: '1E1E1E', fontWeight: '300', fontSize: '16px', paddingTop: '20px', fontFamily: 'gilroy-regular' }}>
                  {index === 0 && (
                    <>
                      The advantage of hiring a workspace <br />
                      with us is that gives you comfortable <br />
                      service and all-around facilities.
                    </>
                  )}
                  {index === 1 && (
                    <>
                      You can get a workspace of the highest <br /> quality at an affordable price and still <br />
                      enjoy the facilities that are only here.
                    </>
                  )}
                  {index === 2 && (
                    <>
                      We provide many unique work space <br />choices so that you can choose the <br />
                      workspace to your liking.
                    </>
                  )}
              </Typography>
              <IconButton sx={{ paddingLeft: '0px' }} onClick={() => toggleInfo(index)}>
                <img src={moreinfo} style={{ marginTop: '6px' }} />
              </IconButton>
              {showInfo[index] && (
                <Box sx={{ marginTop: '10px' }}>
                  <Typography variant="body1" sx={{ color: '1E1E1E', fontWeight: '300', fontSize: '14px', fontFamily: 'gilroy-regular' }}>
                    
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChoose;
