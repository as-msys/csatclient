import React from "react";
import { Box, Typography } from "@mui/material";
import LogoHeader from "./LogoHeader";

const Navbar = () => {
  return (
    <Box
      bgcolor="#FFFFFF"
      sx={{
        display: "flex",
        m: -1,
        justifyContent: "space-between",
      }}
    >
      <LogoHeader />
      <Typography variant="navbar">Project:</Typography>
    </Box>
  );
};

export default Navbar;
