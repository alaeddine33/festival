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
        backgroundImage: "url(/premio.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",

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
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",

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
        <Box
          sx={{
            padding: "10px",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HnfCtGaFGRI?autoplay=1"
            title=" Luis Jiménez recoge el Premio Max 2011"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            //hide border
            style={{ border: "none"}}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}
