import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
const useStyles = makeStyles({
  app: {
    height: "100%",
    width: "100%",
  },
  appBody: {},
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.appBody}>
        <ToastContainer />
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home2} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
