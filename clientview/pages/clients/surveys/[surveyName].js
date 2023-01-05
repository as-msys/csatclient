import React, { useState, useEffect } from "react";
import LogoHeader from "../../../src/components/LogoHeader";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import heroImage from "../../../src/components/assets/heroImage.svg";
import apiList from "../../../apiList/api";
import useSWR from "swr";
import { useRouter } from "next/router";

const surveyView = () => {
  const router = useRouter();

  const { surveyName } = router.query;

  const { data: surveyData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/${apiList[0]}?filters[name][$eq]=${surveyName}&populate=%2A`
  );
  const projectName =
    surveyData?.data[0]?.attributes.project.data.attributes.name;
  const { data: projectData, projectError } = useSWR(
    surveyData
      ? `${process.env.NEXT_PUBLIC_API_URL}/${apiList[1]}?filters[name][$eq]=${projectName}&populate=%2A`
      : null
  );
  const clientName =
    projectData?.data[0]?.attributes.client.data.attributes.name;

  const { data: clientData, clientError } = useSWR(
    projectData
      ? `${process.env.NEXT_PUBLIC_API_URL}/${apiList[2]}?filters[name][$eq]=${clientName}&populate=%2A`
      : null
  );

  if (error || projectError || clientError)
    return <Typography variant="h4">"Error Occured..."</Typography>;
  if (!surveyData || !projectData)
    return <Typography variant="h4">"Loading..."</Typography>;

  return (
    <>
      <LogoHeader />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9F7F7",
        }}
      >
        <Image
          src={heroImage}
          priority
          alt="Picture of the Landing page"
          width={800}
          height={400}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: -5,
            ml: 6,
          }}
        >
          <Typography variant="header">Greetings!</Typography>
          <Typography variant="body">
            We would appreciate if you could spare a few minutes of your time to
            share your feedback. This feedback will help us to ensure that the
            project is on track and to meet your expectations. If there are any
            concerns, we request you to share an open feedback that would enable
            us to work on those improvement areas and continue to provide our
            best services.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 6,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subHeader">Project</Typography>
          <Typography variant="answerText" color="primary">
            {projectName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subHeader">Project Manager</Typography>
          <Typography variant="answerText" color="primary">
            {
              projectData?.data[0].attributes.projectManager.data.attributes
                .username
            }
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subHeader">Delivery Head</Typography>
          <Typography variant="answerText" color="primary">
            {
              clientData?.data[0].attributes.deliveryHead.data.attributes
                .username
            }
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subHeader">Share Before</Typography>
          <Typography variant="answerText" color="primary">
            {surveyData.data[0]?.attributes.responseDeadlineDate}
          </Typography>
          <Typography></Typography>
        </Box>

        <Button
          variant="contained"
          sx={{ py: 2, px: 3, fontSize: "0.9rem" }}
          color="primary"
        >
          GET STARTED
        </Button>
      </Box>
    </>
  );
};

export default surveyView;
