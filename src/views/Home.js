import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  InputAdornment,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import mbg from "../assets/imgs/Rectangle 1441.png";
import { FaSearch } from "react-icons/fa";
import Whychose from "../components/Whychose";
import Exp from "../components/Exp";
import Material from "../components/Material";
import Footer from "../components/Footer";
import Imagecarousel from "../components/Imagecarousel";
import Chaircard from "../components/Chaircard"


function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />

      <Box
        component="home"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={mbg}
          alt=""
          style={{
            width: "100%",
            overflow: "hidden",
            display: "block",
            height: "1084px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            alignItems: "center",
            marginBottom: "7%",
            position: "relative",
          }}
        />
        <Box sx={{ position: "absolute", top: "180px" }}>
          <Box
            component="section"
            sx={{
              
              alignItems: "center",
              
              textTransform: "capitalize",
              color: "#fff",
              justifyContent: "center",
              fontWeight:850,
              fontFamily:"gilroy-regular",
              textAlign:"center",
              fontSize: { xs: "30px", md: "80px" ,lg:"80px"},
              lineHeight: { xs: "60px", md: "80px" ,lg:"104px"}
            }}
          >
            Make your interior more <br /> minimalistic & modern
          </Box>
          <Box
            component="section"
            sx={{
              fontSize: "24px",
              alignItems: "center",
              lineHeight: "38px",
              fontFamily: "gilroy-bold",
              color: "#fff",
              opacity: "0.8",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontFamily:"gilroy-regular",
            }}
          >
            Turn your room with panto into a lot more minimalist <br />
            and modern with ease and speed
          </Box>
          <Box
            component="section"
            sx={{
              paddingTop: "25px",
              display: "flex",
              margin: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="section"
              sx={{
                paddingTop: "30px",
                display: "flex",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                type="search"
                id="search"
                sx={{
                  padding: "2px 2px",
                  height: "56px",
                  width: "340px",
                  borderRadius: "42px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(3px)",
                  "::placeholder": {
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "gilroy-thin",
                  },
                }}
                placeholder="Search furniture"
              />
              <Box
                className="circle"
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  width: "40px",
                  height: "40px",
                  marginLeft: "-50px",
                }}
              >
                <FaSearch
                  className="fa"
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Whychose></Whychose>
      <Chaircard></Chaircard>
      <Exp/>
      <Material/>
      <Box sx={{display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center",color:"#E58411",fontFamily:"gilroy-regular",flexDirection:"column",fontSize:"18px",lineHeight:"21px",marginTop:"60px",fontWeight:"600"}}>
        <Typography>Testimonials</Typography>
      <Box>
        <Typography sx={{display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center",color:"black",fontFamily:"gilroy-regular",fontSize:"42px",lineHeight:"49px",fontWeight:"600",marginTop:"10px",marginBottom:"30px"}}>Our Client Reviews</Typography>
      </Box>
      </Box>
      <div className="App">
        <Imagecarousel />
      </div>
      <Footer></Footer>
      
    </Box>
  );
}

export default Home;
