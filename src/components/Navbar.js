import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ipanto from "../assets/imgs/Panto.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import zero from "../assets/imgs/Group 48095384.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        width: {xs:"88%",md:"100%"},
        height: "50px",
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: "1",
        marginTop: "26px",
      }}
    >
      
      <Box
        sx={{
          display: { xs: "none", sm: "inline" }, 
          left: { xs: "40px", md: "60px", lg: "80px", xl: "80px" },
          position: "relative",
        }}
      >
        <img src={ipanto} alt="" />
      </Box>

      <IconButton
        sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
        onClick={toggleMenu}
      >
        <MenuIcon />
      </IconButton>

      <Box
        sx={{
          textDecoration: "none",
          display: { xs: showMenu ? "flex" : "none", sm: "flex" },
          color: "white",
          flexDirection: "row",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyleType: "none",
            fontSize: "18px",
            alignItems: "center",
            
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <li>Furniture</li>
            <KeyboardArrowDownIcon />
          </div>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </Box>

      <Box
        sx={{
          position: "relative",
          right: "80px",
          display: { xs: "none", sm: "block" },
        }}
      >
        <ShoppingBagIcon sx={{ color: "white" }} />
        <Box sx={{ position: "absolute", top: "-5px", right: "-7px" }}>
          <img src={zero} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
