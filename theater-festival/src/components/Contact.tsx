// src/components/ContactPage.tsx
import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: 0,
        width: "100%",
        height: "calc(100% - 104px)",
        backgroundImage: "url(/main-min.jpg)",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "10%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            Email:
          </Typography>
          <Typography
            variant="body1"
            onClick={() => window.open("mailto:festival@zorongo.com")}
            sx={{ cursor: "pointer" }}
            color={"#FFD700"}
            fontWeight={"bold"}
          >
            festival@zorongo.com
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>
            Telephone:
          </Typography>
          <Typography variant="body1" color={"#FFD700"} fontWeight={"bold"}>
            + 33 (0)6 52 32 39 41
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
