import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Wave2 from "../assets/wave2.svg";
import Typography from "@material-ui/core/Typography";

import me from "../assets/me.jpg";
import me2 from "../assets/me2.jpg";
import me3 from "../assets/me3.jpg";
import SkillsComponent from "./utils/SkillsComponent";
import TimelineComponent from "./utils/TimelineComponent";
import AccordionComponent from "./utils/AccordionComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },

  img: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50%",
  },
  name: {},
  role: {},
  profile: {},
  skills: {},
  experience: {},
  education: {},
  chip: {},
  avatar: {},
  accordion: {},

  //style={{ objectFit: "cover" }}
}));

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <div>
            <img
              className={classes.img}
              src={me2}
              width="150"
              height="150"
            ></img>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.name}>
            <Typography variant="h4" component="h1" gutterBottom>
              Panagiotis Mentzelopoulos
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.role}>
            <Typography variant="h6" component="h1" gutterBottom>
              Software Engineer
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.contact}>
            <Typography variant="h6" component="h1" gutterBottom>
              Email: pmentzdev@outlook.com Tel.: +353 83 391 7092
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.profile}>
            <Typography variant="h4" component="h1" gutterBottom>
              Profile
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              A dynamic, hands-on, detail-oriented and highly analytical IT
              Professional with experience in service delivery, looking for a
              career transition as a Software Engineer. Proven ability in
              building smooth and responsive UI, fast, secure and scalable Web
              Applications. Experience with technologies such as HTML5, CSS,
              JavaScript, React, node.JS, RESTful APIs, Git, and much more.
              Knowledge of deployment on various web services. Continuous
              learner that keeps up on with new technologies and trends.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.skill}>
            <Typography variant="h4" component="h1" gutterBottom>
              Skills
            </Typography>
            <SkillsComponent />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.experience}>
            <Typography variant="h4" component="h1" gutterBottom>
              Experience
            </Typography>
            <TimelineComponent />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.education}>
            <Typography variant="h4" component="h1" gutterBottom>
              Education
            </Typography>
            <AccordionComponent />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
