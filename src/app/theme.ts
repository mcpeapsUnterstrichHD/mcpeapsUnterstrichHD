'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#A2BF8A',
      light: '#A2BF8A',
      dark: '#A2BF8A',
      contrastText: '#2E3440',
    },
    secondary: {
      main: '#C16069',
      light: '#C16069',
      dark: '#C16069',
      contrastText: '#2e3440',
    },
    background: {
      default: '#2e3440',
      paper: '#2e3440',
    },
    text: {
      primary: '#eceff4',
      secondary: '#E5E9F0',
      disabled: '#4C566B',
    },
    error: {
      main: '#D2876D',
      light: '#D2876D',
      dark: '#D2876D',
      contrastText: '#2E3440',
    },
    warning: {
      main: '#ECCC87',
      light: '#eccc87',
      dark: '#eccc87',
      contrastText: '#2E3440',
    },
    info: {
      main: '#86c0d1',
      light: '#86c0d1',
      dark: '#86c0d1',
      contrastText: '#2E3440',
    },
    success: {
      main: '#A2BF8A',
      light: '#A2BF8A',
      dark: '#A2BF8A',
      contrastText: '#2E3440',
    },
    divider: '#434C5F',
  },
  /*props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiAppBar: {
      color: 'secondary',
    },
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#3B4253',
        color: '#eceff4',
      },
    },
  },
  */
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#eceff4',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});
