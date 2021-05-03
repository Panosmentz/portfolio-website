import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      color: "#2a2829",
      "&:hover": {
        backgroundColor: "#403e3f",
      },
    },

    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

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
          <Fab size="small" className={classes.margin}>
            <GithubIcon />
          </Fab>
        </a>
        <a
          href="https://www.linkedin.com/in/panagiotis-mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.margin}>
            <LinkedInIcon />
          </Fab>
        </a>
        <a
          href="https://www.facebook.com/panos.mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.margin}>
            <FacebookIcon />
          </Fab>
        </a>

        <a
          href="https://www.instagram.com/panos_mentz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab size="small" className={classes.margin}>
            <InstagramIcon />
          </Fab>
        </a>
      </div>
    </>
  );
}
