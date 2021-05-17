import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Socials from "./Socials";
import Wave from "../assets/wave.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="black">
      {"Designed and Developed by Panagiotis Mentzelopoulos  © "}
      <Link color="inherit" href="https://material-ui.com/">
        Pmentzdev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    backgroundImage: `url(${Wave})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    alignItems: "center",
    marginTop: "100px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  socials: {
    marginBottom: "25px",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container component="main" className={classes.main}>
        <div className={classes.Typography1}>
          <Typography variant="h2" component="h1" gutterBottom>
            Pmentzdev.
          </Typography>
        </div>
        <div className={classes.socials}>
          <Socials />
        </div>

        <Copyright />
      </Container>
    </footer>
  );
}
