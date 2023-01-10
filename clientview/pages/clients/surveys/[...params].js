import React, { useState, useEffect } from "react";
import Navbar from "../../../src/components/Navbar";
import {
  Paper,
  Box,
  Typography,
  Button,
  GlobalStyles,
  Rating,
  TextField,
} from "@mui/material";
import Yes from "../../../src/components/assets/Yes.png";
import True from "../../../src/components/assets/Yes.png";
import No from "../../../src/components/assets/No.png";
import False from "../../../src/components/assets/No.png";
import VeryHigh from "../../../src/components/assets/VeryHigh.png";
import Most from "../../../src/components/assets/Most.png";
import VeryLow from "../../../src/components/assets/VeryLow.png";
import VeryLess from "../../../src/components/assets/VeryLess.png";
import High from "../../../src/components/assets/High.png";
import More from "../../../src/components/assets/More.png";
import Low from "../../../src/components/assets/Low.png";
import Less from "../../../src/components/assets/Less.png";
import Average from "../../../src/components/assets/Average.png";
import Neutral from "../../../src/components/assets/Neutral.png";
import feedback from "../../../src/components/assets/feedback.png";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import apiList from "../../../apiList/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import Success from "../../../src/components/Success";

const questions = () => {
  const router = useRouter();

  const [surveyName, setSurveyName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [number, setNumber] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const { project } = router.query;
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setDisabled(!disabled);
  };

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      const { params } = router.query;
      setSurveyName(params[2]);
    }
  }, [router.isReady]);

  const { data: surveyData, error } = useSWR(
    surveyName !== ""
      ? `${process.env.NEXT_PUBLIC_API_URL}/${apiList[0]}?filters[name][$eq]=${surveyName}&populate=template`
      : null
  );
  const TemplateName =
    surveyData?.data[0]?.attributes.template.data.attributes.name;
  const { data: questionData, questionError } = useSWR(
    TemplateName
      ? `${process.env.NEXT_PUBLIC_API_URL}/${apiList[4]}?filters[templates][name][$eq]=${TemplateName}&populate=*`
      : null
  );

  // console.log(surveyData);
  console.log(questionData);
  // console.log(number);

  // console.log(number);
  // console.log(submit);

  const handleNextButtonClick = () => {
    setNumber(number + 1);
    setDisabled(!disabled);
  };

  return (
    <>
      <Navbar projectName={project} />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#F1F1F1" },
        }}
      />
      {submit ? (
        <Success />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="70vh"
        >
          <Paper
            elevation={4}
            sx={{ pt: 7, px: 16, pb: 12, borderRadius: "12px", mt: 10 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {number <= 5 ? (
                <>
                  <Typography variant="questionText">
                    {questionData?.data[number].attributes.questionText}
                    {questionData?.data[number].attributes.isMandatory && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        *
                      </span>
                    )}
                  </Typography>
                  {questionData?.data[number].attributes.question_type.data
                    .attributes.label !== "Open Ended" ? (
                    <FormControl sx={{ p: 5, pb: 10 }}>
                      <RadioGroup row value={value} onChange={handleChange}>
                        {questionData?.data[
                          number
                        ].attributes.question_options.data.map((option) => {
                          return (
                            <FormControlLabel
                              key={option.id}
                              labelPlacement="top"
                              value={option.attributes.label}
                              control={<Radio />}
                              label={option.attributes.label}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  ) : (
                    <TextField
                      placeholder="Your Message"
                      multiline
                      fullWidth
                      rows={6}
                      sx={{ p: 2 }}
                    />
                  )}
                </>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pb: 10,
                    pt: 10,
                  }}
                >
                  <Image src={feedback} alt="feedback" width={50} height={50} />
                  <Typography variant="questionText" sx={{ mt: 1 }}>
                    Would you like to share your feedback for the team members?
                  </Typography>
                </Box>
              )}
            </Box>

            <Button
              style={{
                color: "#828282",
                fontSize: "11px",
                lineHeight: "120%",
              }}
              sx={{ ml: -12, mb: -6 }}
              onClick={() =>
                number !== 0 ? setNumber(number - 1) : router.back()
              }
            >
              {number <= 0 ? (
                "CANCEL"
              ) : (
                <Box sx={{ display: "flex" }}>
                  <ArrowBackIcon sx={{ mr: 1 }} />
                  <Typography sx={{ fontSize: "11px", marginTop: 0.5 }}>
                    PREVIOUS
                  </Typography>
                </Box>
              )}
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mr: -14,
                mb: -5,
              }}
            >
              <Button
                disabled={value !== "" || number > 0 ? false : true}
                variant="outlined"
                style={{
                  fontSize: "11px",
                }}
              >
                SAVE AS DRAFT
              </Button>

              {number === 6 ? (
                <Button
                  variant="outlined"
                  sx={{ mx: 0.5, px: 1 }}
                  style={{
                    fontSize: "11px",
                  }}
                >
                  YES,PROCEED
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              ) : null}
              {number <= 5 ? (
                <Button
                  variant="contained"
                  sx={{ mx: 0.5, px: 1 }}
                  style={{
                    fontSize: "11px",
                  }}
                  disabled={number < 5 ? disabled : !disabled}
                  onClick={handleNextButtonClick}
                >
                  {questionData?.data[number].attributes.isMandatory
                    ? "NEXT"
                    : "SKIP&PROCEED"}
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mx: 0.5, px: 1 }}
                  style={{
                    fontSize: "11px",
                  }}
                  onClick={() => setSubmit(true)}
                >
                  NO,SUBMIT
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default questions;
