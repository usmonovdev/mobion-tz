import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  const [mode, setMode] = useState("light")
  const { isDarkMode } = useSelector(state => state.theme)
  const getTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ?
        {
          primary: {
            main: "#02C981",
          },
          secondary: {
            main: "#FED734",
          },
          custom: {
            background: "#fff",
            text: "#012350",
            grey: "#9E9E9E",
            greyToWhite: "#F3F3F3",
            blueOpacity: "#01235066"
          }
        } : {
          primary: {
            main: '#02C981',
          },
          secondary: {
            main: "#FED734",
          },
          custom: {
            background: "#212121",
            text: "#fff",
            grey: "#9E9E9E",
            greyToWhite: "#F3F3F3",
            blueOpacity: "#FFFFFF66"
          }
        })
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            width: "100vw",
            hegiht: "100vh",
            overflowX: "hidden",
            backgroundColor: theme.palette.custom.background,
          }
        }),
      }
    },
    shadows: Array(25).fill('none'),
    typography: {
      fontFamily: "Inter"
    }
  });

  const theme = useMemo(() => createTheme(getTokens(mode)), [mode])

  useMemo(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-sine',
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container-custom">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
