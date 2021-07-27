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
    fontFamily: "Source Code Pro",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Source Code Pro",
    fontSize: "1.8rem",
    fontWeight: "bold",
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
  // const { ref, inView } = useInView({
  //   // threshold: 0.2,
  // });
  //
  // const controls = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  //   if (!inView) {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);

  //<motion.div
  //ref={ref}
  //initial="hidden"
  //animate={controls}
  //variants={{
  //  hidden: { scale: 0 },
  //  visible: {
  //    scale: 1,
  //    transition: {
  //      duration: 1,
  //    },
  //  },
  //}}

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
                  Full-Stack Developer
                </Typography>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Email: pmentzdev@outlook.com
                </Typography>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Tel.: +353 83 391 7092
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
                style={{ color: "#7f10a1" }}
              >
                Profile
              </Typography>
              <FadeInWhenVisible>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  A dynamic, hands-on, detail-oriented and highly analytical IT
                  Professional with experience in service delivery, looking for
                  a career transition as a Full-Stack developer. Proven ability
                  in building smooth and responsive UI, fast, secure and
                  scalable Web Applications. Experience with technologies such
                  as HTML5, CSS, JavaScript, React, Node.JS, RESTful APIs, Git,
                  and much more. Continuous and quick learner that keeps up with
                  new technologies and trends.
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
                style={{ color: "#7f10a1" }}
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
                style={{ color: "#7f10a1" }}
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
                style={{ color: "#7f10a1" }}
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
                href="https://store8.gofile.io/download/jwxmtE/18367d2ac00f8555651aec28eda406da/CV%20Panagiotis%20Mentzelopoulos%20Front%20End%20Developer.pdf"
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
