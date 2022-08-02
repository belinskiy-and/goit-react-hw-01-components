import React from 'react';
import ReactDOM from 'react-dom/client';
// import { theme } from 'theme/theme.jsx';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    textFirst: 'red',
    textSecond: '#8795A3',
    textTableFirst: '#ffffff',
    textTableSecond: '#626366',
    backgroundFirst: '#ffffff',
    backgroundSecond: 'rgb(237, 240, 243)',
    onlineStatus: '#4EAD51',
    offlineStatus: '#FE4C57',
    tableHead: '#00BCD5',
    backgroundTableFirst: '#ffffff',
    backgroundTableSecond: '#ECF1F4',
  },
  sizes: [0, 80, 100, 300, 320, 20, 600, 40],
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '20px',
    xl: '22px',
  },
  lineHeights: {
    normal: 1.6,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    none: 'none',
    main: 'rgb(0 0 0 / 13%) 0px 0px 8px',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
