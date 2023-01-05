import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import logo from "./assets/Group.png";

const LogoHeader = () => {
  return (
    <Box sx={{ display: "flex", m: 1.5 }}>
      <Image priority src={logo} alt="Logo of the company" />
      <Typography variant="logoHeader">
        <Typography variant="highlightLogo">CSAT</Typography> Proto
      </Typography>
    </Box>
  );
};

export default LogoHeader;
