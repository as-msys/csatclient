import { Typography, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import success from "../components/assets/success.png";

const Success = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 20 }}
    >
      <Image src={success} alt="Yes" width={80} height={80} />
      <Typography variant="answerText" sx={{ fontWeight: 700 }}>
        Your feedback has been submitted successfully!
      </Typography>
      <Typography variant="body">
        We sincerely thankyou for sharing the feedback.
      </Typography>
    </Stack>
  );
};

export default Success;
