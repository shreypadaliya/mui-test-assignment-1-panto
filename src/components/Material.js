
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import moreinfo from "../assets/imgs/Group 48095399.png";
import materialmain from "../assets/imgs/Group 48095439.png";

const Material = () => {
  return (
    <Grid
      container
      className="experience"
      id="experience"
      sx={{ paddingTop: "240px", height: "auto", padding: "10px",paddingTop: { xs: "180px", md: "35px" }, }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          className="exp-text"
          id="exp-text"
          sx={{
            width: { xs: "100%", md: "auto" },
            padding: { xs: "20px 10px", md: "0 20px" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            className="experiences"
            sx={{
              letterSpacing: "3px",
              fontSize: { xs: "12px", md: "15px" , lg : '18px', xl: "18px"},
              color: "#e58411",
              textTransform: "uppercase",
              fontFamily: "gilroy-medium",
              textAlign: "left",
            }}
          >
            Materials
          </Typography>
          <Typography
            variant="h2"
            className="why-title"
            sx={{
              fontSize: { xs: "22px", md: "32px" , lg : '42px', xl: "42px"},
              fontFamily: "gilroy-bold",
              color: "#1e1e1e",
              marginTop: "20px",
              textAlign: "left",
              fontWeight:"800" 
            }}
          >
            Very serious <br />materials for making <br /> furniture
          </Typography>
          <Typography
            variant="body1"
            className="column-sub2"
            sx={{
              fontSize: { xs: "12px", md: "15px" , lg : '18px', xl: "18px"},
              color: "#1e1e1e",
              opacity: 0.8,
              lineHeight: "185%",
              fontFamily:"gilroy-regular",
              marginTop: "20px",
              textAlign: "left",
            }}
            paragraph
          >
            Because panto was very serious about designing furniture for our <br/>
            environment, using a very expensive and famous capital but at a <br />
            relatively low price
          </Typography>
          <Box className="more-info" sx={{ marginTop: "20px", textAlign: "left" }}>
            <img src={moreinfo} alt="IMG" />
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box className="exp-img" id="exp-img" sx={{ width: "100%" }}>
          <Box
            className="exp-img-left"
            id="exp-img-left"
            sx={{ position: "relative", width: "100%" ,display:"flex",justifyContent:'end'}}
          >
            <img
              src={materialmain}
              alt="exp img"
              style={{
                width: "100%",
                maxWidth: "728px",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Material;
