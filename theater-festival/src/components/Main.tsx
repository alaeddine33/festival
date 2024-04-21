import React, { useEffect, useState } from "react";
import { Box, Fade, Typography } from "@mui/material";

const Main: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 800);
  }, []);

  return (
    <>
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: 0,
        width: "100%",
        height: "calc(100% - 104px)",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/main-min.jpg"
        alt="main"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {showText && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Fade in={showText} timeout={2000}>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                font: "italic small-caps bold 1.5em/1 sans-serif",
                fontWeight: "bold",
                fontSize: "2.6em",
                //add contour to text
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
                textShadow: "2px 2px 4px #000000",
                //make more visible on image
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "2px",
                //border radius top only
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              30 Année de théâtre hispanique à Paris
            </Typography>
          </Fade>
          <Fade in={showText} timeout={2000} style = {{transitionDelay: "0.8s"}}>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                font: "italic small-caps bold 1.5em/1 sans-serif",
                fontWeight: "bold",
                fontSize: "2.5em",
                //add contour to text
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
                textShadow: "2px 2px 4px #000000",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                //reduce background color width
                paddingRight: "2px",
                //border radius bottom only
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              1992-2021
            </Typography>
          </Fade>
        </Box>
      )}
    </Box>
    </>
  );
};

export default function mainPage() {
  return <Main />;
}
