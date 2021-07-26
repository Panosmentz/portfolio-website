import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
    color: "#7f10a1",
    "&:hover": {
      backgroundColor: "#290036",
    },
  },
}));

export default function SocialMediaButtons() {
  const classes = useStyles();
  return (
    <>
      <div>
        <a
          href="https://github.com/Panosmentz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.icon}>
            <GithubIcon />
          </Fab>
        </a>
        <a
          href="https://www.linkedin.com/in/panagiotis-mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.icon}>
            <LinkedInIcon />
          </Fab>
        </a>
        <a
          href="https://www.facebook.com/panos.mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.icon}>
            <FacebookIcon />
          </Fab>
        </a>

        <a
          href="https://www.instagram.com/panos_mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.icon}>
            <InstagramIcon />
          </Fab>
        </a>
      </div>
    </>
  );
}
