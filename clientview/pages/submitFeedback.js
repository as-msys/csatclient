import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Rating,
  Button,
  Card,
} from "@mui/material";
import { IconButton, InputAdornment, SearchIcon } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useSWR from "swr";
import apiList from "../apiList/api";

const submitFeedback = () => {
  const { data: projectData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/${apiList[1]}?filters[name][$eq]=Growth Plum&populate=team_members`
  );

  const [active, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const matchId = (pocId, name) => {
    setName(name);
    setId(pocId);
    setIsActive(!active);
  };

  return (
    <>
      <Box sx={{ display: "flex", m: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Search by Name"
            style={{ width: 350 }}

            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <IconButton>
            //         <SearchIcon />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />

          {projectData?.data[0].attributes.team_members.data.map((member) => {
            return (
              <Card
                key={member.id}
                variant="outlined"
                onClick={(event) => {
                  matchId(member.id, member.attributes.name);
                }}
                sx={{
                  borderRadius: "2px",
                  marginTop: "1rem",
                  width: "95%",
                  height: "4%",
                  py: 2,
                  pl: 2,
                  bgcolor:
                    active && id === member.id
                      ? "rgba(198, 203, 230, 0.75)"
                      : "rgba(189, 189, 189, 0.15)",
                }}
              >
                <Typography variant="questionText" sx={{ fontWeight: "500" }}>
                  {member.attributes.name}
                </Typography>
              </Card>
            );
          })}
        </Box>

        <Box sx={{ p: 1, ml: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="feedbackPageText">Feedback for</Typography>
            <Typography color="primary" variant="answerText">
              {name}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="feedbackPageText">Positives</Typography>
              <TextField
                placeholder="Your Message"
                rows={4}
                style={{ width: 400 }}
                fullWidth
                multiline
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 2,
                mr: -40,
              }}
            >
              <Typography variant="feedbackPageText">
                Areas of Improvement
              </Typography>
              <TextField
                style={{ width: 400 }}
                rows={4}
                fullWidth
                placeholder="Your Message"
                multiline
              />
            </Box>
          </Box>
          <Box sx={{ m: 8 }}>
            <Typography variant="feedbackPageText">Overall rating</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Rating size="large" sx={{ mt: 1 }} />
              <Box sx={{ mt: 3, mr: -40 }}>
                <Button
                  variant="outlined"
                  sx={{ mx: 0.5 }}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: 10, mx: 3 }}
      >
        <Button
          variant="standard"
          style={{
            fontSize: "12px",
          }}
        >
          <ArrowBackIcon sx={{ ml: 1 }} />
          Back
        </Button>
        <Button
          variant="contained"
          style={{
            fontSize: "12px",
          }}
        >
          SUBMIT
          <ArrowForwardIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </>
  );
};

export default submitFeedback;
