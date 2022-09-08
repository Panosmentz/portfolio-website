import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Typography from "@material-ui/core/Typography";
import ProjectsImage from "../assets/projects.svg";
import SaveIcon from "@material-ui/icons/Save";
import Me from "../assets/me.jpg";
import SkillsComponent from "./utils/SkillsComponent";
import TimelineComponent from "./utils/TimelineComponent";
import AccordionComponent from "./utils/AccordionComponent";
import { Button } from "@material-ui/core";
import HashLoader from "react-spinners/HashLoader";
import "@fontsource/source-code-pro";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    width: "100%",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  banner: {
    height: "100px",
    backgroundImage: `url(${ProjectsImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    alignItems: "center",
  },
  typography: {
    marginTop: "10px",
    fontFamily: "Source Code Pro",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Source Code Pro",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textDecoration: "underline",
    marginTop: "50px",
  },

  img: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50%",
  },
  name: {},
  role: {},
  profile: {},
  skills: { marginTop: "50px" },
  experience: { marginTop: "50px" },
  education: {
    marginTop: "50px",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  chip: {},
  avatar: {},
  accordion: {},
  button: {
    textTransform: "none",
    marginTop: "40px",
    color: "#fff",
    backgroundColor: "#7f10a1",
    "&:hover": {
      backgroundColor: "#290036",
    },
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
  },
}));

export default function About() {
  const classes = useStyles();
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#7f10a1"} loading={loading} size={50} />
        </div>
      ) : (
        <div className={classes.banner}>
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
                  src={Me}
                  width="150"
                  height="150"
                  alt="avatar"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.name}>
              <FadeInWhenVisible>
                <Typography
                  className={classes.typography}
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Panagiotis Mentzelopoulos
                </Typography>

                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Software Engineer
                </Typography>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Email:
                  <a href="mailto:pmentzdev@outlook.com" target="_top">
                    pmentzdev@outlook.com
                  </a>
                </Typography>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Mobile: +353 83 391 7092
                </Typography>
              </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={6} className={classes.profile}>
              <Typography
                className={classes.title}
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                style={{ color: "#290036" }}
              >
                Profile
              </Typography>
              <FadeInWhenVisible>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="left"
                >
                  I'm a highly self-motivated and goal-oriented IT professional
                  with experience in full-stack integrations and IT Service
                  delivery. I have a track record of building scalable and
                  secure full-stack web applications, mostly with React,
                  Node.JS, SQL and NoSQL databases, REST APIs, middlewares,
                  headless CMS, serverless functions and much more. As a
                  continuous and quick learner I enjoy expanding my knowledge
                  both in depth and in breadth while producing consistent
                  tangible value.
                </Typography>
              </FadeInWhenVisible>
            </Grid>

            <Grid item xs={12} md={6} className={classes.skill}>
              <Typography
                className={classes.title}
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                style={{ color: "#290036" }}
              >
                Skills
              </Typography>

              <SkillsComponent />
            </Grid>

            <Grid item xs={12} md={6} className={classes.experience}>
              <Typography
                className={classes.title}
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                style={{ color: "#290036" }}
              >
                Experience
              </Typography>
              <FadeInWhenVisible>
                <TimelineComponent />
              </FadeInWhenVisible>
            </Grid>

            <Grid item xs={12} md={6} className={classes.education}>
              <Typography
                className={classes.title}
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                style={{ color: "#290036" }}
              >
                Education
              </Typography>
              <FadeInWhenVisible>
                <AccordionComponent />
              </FadeInWhenVisible>
            </Grid>

            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                href="https://drive.google.com/file/d/17s361vpp4jARWkm6RRs1jiNRMuxc1zwO/view?usp=sharing"
                target="_blank"
                startIcon={<SaveIcon />}
              >
                Download PDF version
              </Button>
            </Grid>
            <Footer />
          </Grid>
        </div>
      )}
    </div>
  );
}
