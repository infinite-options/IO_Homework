import './App.css';
import React from 'react';
import Main from './Main';
import Header from './Components/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the path as necessary
function App() {
  
  return (
    
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main></Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
