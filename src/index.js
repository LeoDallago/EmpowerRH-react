import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007887',
    },
    secondary: {
      main: '#008094',

    },
  },
})


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
