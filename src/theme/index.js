import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles"
const PRIMARY = {
  mainText: "#555B6E",
  background: "#F9FAFC",
}
const SECONDARY = {
  secondGreen: "#89B0AE",
  pressedGrey: "#F8FAF8",
}
const borderWidth = 2

const FONT_PRIMARY = "Sora, sans-serif"

function pxToRem(value) {
  return `${value / 16}rem`
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    // sm : small, md : medium, lg : large -- frame
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  }
}

const theme = createTheme({
  //TODO : Fix this
  palette: {
    common: { black: "#343a40", white: "#fff" },
    primary: { main: PRIMARY.mainText },
    secondary: { main: SECONDARY.secondGreen },
    background: {
      default: PRIMARY.background,
    },
    border: {
      borderColor: SECONDARY.secondGreen,
      borderWidth: borderWidth,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: 2,
          position: "relative",
          zIndex: 0,
        },
      },
    },
  },
})
export default theme
