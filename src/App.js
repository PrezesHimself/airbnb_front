import React from "react";
import AppBar from "./Components/AppBar";
import LeftMenu from "./Components/LeftMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Routes/Index";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  app: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

const theme = createMuiTheme({
  palette: {
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 0
  }
});

function App(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className="classes.app">
        <CssBaseline />
        <AppBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Router>
            <Route path="/" exact component={Index} />
          </Router>
        </main>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
