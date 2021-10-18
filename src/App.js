import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Note from "./pages/Note";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";

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
        <Layout>
          <Switch>
            <Route exact path="/">
              <Note />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
