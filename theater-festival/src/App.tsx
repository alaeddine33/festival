import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import these
import Presentation from "./components/Presentation";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/concert-poetique" element={<Main />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/prix-max-2011" element={<Main />} />
            <Route path="/chronologie" element={<Main />} />
            <Route path="/lectures-rencontres" element={<Main />} />
            <Route path="/contact" element={<Main />} />
          </Routes>
          <Footer />
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
}
