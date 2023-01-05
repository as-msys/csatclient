import React from "react";
import Navbar from "../src/components/Navbar";
import { Paper, Box, Typography, Button, GlobalStyles } from "@mui/material";
import Yes from "../src/components/assets/Yes.png";
import No from "../src/components/assets/No.png";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const questions = () => {
  return (
    <>
      <Navbar />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#F1F1F1" },
        }}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Paper
          elevation={24}
          sx={{ pt: 10, px: 25, pb: 15, borderRadius: "16px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="questionText">
              Is the Sprint on track?
            </Typography>
            <FormControl sx={{ p: 5, pb: 10 }}>
              <RadioGroup row>
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  labelPlacement="top"
                  label={
                    <Image
                      priority
                      src={Yes}
                      alt="Yes"
                      width={100}
                      height={100}
                    />
                  }
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  labelPlacement="top"
                  label={
                    <Image
                      priority
                      src={No}
                      alt="No"
                      width={100}
                      height={100}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Button
            style={{
              color: "#828282",
              fontSize: "14px",
              lineHeight: "120%",
            }}
            sx={{ ml: -20, mb: -6 }}
          >
            CANCEL
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mr: -20,
              mb: -10,
            }}
          >
            <Button disabled variant="outlined">
              SAVE AS DRAFT
            </Button>
            <Button variant="contained" sx={{ mx: 1 }}>
              NEXT
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default questions;
