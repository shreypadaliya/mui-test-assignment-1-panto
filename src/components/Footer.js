import React from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  Link,
} from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer style={{ marginTop: "11%", backgroundColor: "#f7f7f7", padding: "5%" }}>
    <div></div>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4" style={{ fontSize: "28px", fontFamily: "gilroy-bold", color: "#1e1e1e", paddingBottom: "20px" }}>
                Panto
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", fontFamily: "gilroy-regular", lineHeight: "160%", color: "#1e1e1e", opacity: "0.8" }}>
                The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" style={{ fontSize: "17px", color: "#f6973f", fontFamily: "gilroy-medium", lineHeight: "22px", paddingBottom: "20px" }}>
                Services
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  Email Marketing
                </Link>
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  Campaigns
                </Link>
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  Branding
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" style={{ fontSize: "17px", color: "#f6973f", fontFamily: "gilroy-medium", lineHeight: "22px", paddingBottom: "20px" }}>
                Furniture
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  Beds
                </Link>
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  Chairs
                </Link>
              </Typography>
              <Typography variant="body1" style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular" }}>
                <Link href="#" color="inherit">
                  All 
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" style={{ fontSize: "17px", color: "#f6973f", fontFamily: "gilroy-medium", lineHeight: "22px", paddingBottom: "20px" }}>
                Follow Us
              </Typography>
              <Typography  style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular", display: "flex", alignItems: "center" }}>
                <FacebookIcon style={{ marginRight: "5px" }} />
                <Link href="#" color="inherit">
                  Facebook
                </Link>
              </Typography>
              <Typography style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular", display: "flex", alignItems: "center" }}>
                <TwitterIcon style={{ marginRight: "5px" }} />
                <Link href="#" color="inherit">
                 Twitter
                </Link>
              </Typography>
              <Typography  style={{ fontSize: "15px", color: "#1e1e1e", lineHeight: "160%", opacity: "0.8", fontFamily: "gilroy-regular", display: "flex", alignItems: "center" }}>
                <InstagramIcon style={{ marginRight: "5px" }} />
                <Link href="#" color="inherit">
                  Instagram
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box mt={4} style={{ fontFamily: "gilroy-medium", justifyContent: "space-between", display: "flex", marginTop: "8%" }}>
          <Typography variant="body2" color="textSecondary" align="center" style={{ color: "#1e1e1e", opacity: "0.8" }}>
            &copy; {new Date().getFullYear()} Copyright
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" style={{ color: "#1e2833", opacity: "0.5" }}>
            <Link color="inherit" href="#">
              Terms & Conditions
            </Link>
            
            <Link color="inherit" href="#">
              Policy Privacy
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
