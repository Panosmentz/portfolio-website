import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Socials from "./utils/Socials";
import FooterImage from "../assets/footer.svg";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.typography}>
      {"Designed and Developed by Panagiotis Mentzelopoulos  © "}
      <Link color="inherit" href="https://pmentz.com/">
        pmentz Dev.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${FooterImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
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
  title: {
    color: "#fff",
  },
  typography: {
    fontFamily: "Source Code Pro",
    fontSize: ".9rem",
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
        <div className={classes.title}>
          <Typography
            className={classes.typography}
            variant="h2"
            component="h1"
            gutterBottom
          >
            pmentz Dev.
          </Typography>
        </div>
        <div className={classes.socials}>
          <Socials />
        </div>
        <div className={classes.title}>
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}
