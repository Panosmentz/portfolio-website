import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
const useStyles = makeStyles({
  app: {
    backgroundColor: "#2d2c2c",
    height: "100vh",
  },
  appBody: {},
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.appBody}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
