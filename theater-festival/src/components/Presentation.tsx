import { Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default function Presentation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: 0,
        width: "100%",
        height: "calc(100% - 104px)",
        backgroundImage: "url(/main-min.jpg)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "right", padding: "10px", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <IconButton onClick={() => changeLanguage("es")}>
          {getUnicodeFlagIcon("ES")}
        </IconButton>
        <IconButton onClick={() => changeLanguage("fr")}>
          {getUnicodeFlagIcon("FR")}
        </IconButton>
      </Box>
      <Box
        sx={{
          color: "white",
          overflow: "auto",
          height: "calc(100% - 64px)",
          maxHeight: "auto",
          textAlign: "justify",
          scrollbarWidth: "thin",
          scrollbarColor: "#30316A white",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          textShadow: "2px 2px 4px #000000",
          
        }}
      >
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "1em",
              //break line when \n is found
              whiteSpace: "pre-line",
            }}
          >
            {t("presentation.title")}
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text2")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text3")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text4")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text5")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text6")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text7")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text8")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text9")}
          </Typography>
          <br />

          <Typography variant="body1" sx={{ color: "white" }}>
            {t("presentation.text10")}
          </Typography>
          <br />
          <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "right" }}
          >
            {t("presentation.signature")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
