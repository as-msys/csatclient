import React from "react";
import { Box, Typography } from "@mui/material";
import LogoHeader from "./LogoHeader";

const Navbar = ({ projectName }) => {
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
      <Box sx={{ display: "flex" }}>
        <Typography variant="navbar">Project:</Typography>
        <Typography color="primary" variant="navbar" sx={{ ml: -3 }}>
          {projectName}
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
