import { Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default function PrixMax() {
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
        backgroundColor: "#000",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "right", padding: "10px" }}>
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
            }}
          >
            {t("prix.title")}
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "white" }}>
            {t("prix.text")}
          </Typography>
          <br />
          <Typography variant="body2" sx={{ color: "white", textAlign: "right" }}>
            {t("prix.signature")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
