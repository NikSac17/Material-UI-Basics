import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Note from "./components/Note";
import Create from "./components/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eseses",
    },
  },
});
 
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Note />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
