import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Wave2 from "../assets/wave2.svg";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import me from "../assets/me.jpg";
import me2 from "../assets/me2.jpg";
import me3 from "../assets/me3.jpg";
import SkillsComponent from "./utils/SkillsComponent";
import TimelineComponent from "./utils/TimelineComponent";
import AccordionComponent from "./utils/AccordionComponent";
import { Button } from "@material-ui/core";
import HashLoader from "react-spinners/HashLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    marginTop: "50px",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
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
  education: { marginTop: "50px" },
  chip: {},
  avatar: {},
  accordion: {},
  button: {
    color: "#fff",
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#97abb6",
    },
  },

  //style={{ objectFit: "cover" }}
}));

export default function About() {
  const classes = useStyles();
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#143e55"} loading={loading} size={50} />
        </div>
      ) : (
        <div>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
            spacing={4}
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
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Panagiotis Mentzelopoulos
                </Typography>
                <Typography
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="h6"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Email: pmentzdev@outlook.com Tel.: +353 83 391 7092
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.profile}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Profile
                </Typography>
                <Typography variant="h6" component="h1" gutterBottom>
                  A dynamic, hands-on, detail-oriented and highly analytical IT
                  Professional with experience in service delivery, looking for
                  a career transition as a Software Engineer. Proven ability in
                  building smooth and responsive UI, fast, secure and scalable
                  Web Applications. Experience with technologies such as HTML5,
                  CSS, JavaScript, React, node.JS, RESTful APIs, Git, and much
                  more. Knowledge of deployment on various web services.
                  Continuous learner that keeps up on with new technologies and
                  trends.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.skill}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Skills
                </Typography>
                <SkillsComponent />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.experience}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Experience
                </Typography>
                <TimelineComponent />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.education}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Education
                </Typography>
                <AccordionComponent />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                className={classes.button}
                variant="contained"
                size="large"
                href="https://store8.gofile.io/download/jwxmtE/18367d2ac00f8555651aec28eda406da/CV%20Panagiotis%20Mentzelopoulos%20Front%20End%20Developer.pdf"
                target="_blank"
                startIcon={<SaveIcon />}
              >
                Download PDF version
              </Button>
            </Grid>
          </Grid>
          <Footer />
        </div>
      )}
    </div>
  );
}
