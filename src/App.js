import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, Footer, Home, ProductOpen, About, Filials } from "./components";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

function App() {
  const [mode, setMode] = useState("light")
  const { isDarkMode } = useSelector(state => state.theme)
  const getTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ?
        {
          blue: createColor("#012350"),
          alsoWhite: createColor("#fff"),
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
            blueOpacity: "#01235066",
            contact: "#F6F7F9"
          }
        } : {
          blue: createColor("#012350"),
          alsoWhite: createColor("#fff"),
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
            blueOpacity: "#FFFFFF66",
            contact: "#FFFFFF0D"
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
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/filial" element={<Filials />}/>
          <Route path="/product/:id" element={<ProductOpen />}/>
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
