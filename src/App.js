import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Home from './components/home/Home.js';
import Build from './components/build/Build.js';
import Invest from './components/invest/Invest.js';
import DonatePage from './components/donate/DonatePage.js';
import About from './components/about/About.js';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito'
      ]
    }
  })
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="build" element={<Build />} />
            <Route path="invest" element={<Invest />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
