import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Button } from "@material-ui/core";
import HashLoader from "react-spinners/HashLoader";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";
import Particle from "./utils/Particles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
  },
  particle: {
    position: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  title: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    color: "#fff",
  },
  title2: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
  typography: {
    fontFamily: "Source Code Pro",
    fontSize: "1.4rem",
  },
  button: {
    marginTop: 100,
    color: "#fff",
    backgroundColor: "#7f10a1",
    "&:hover": {
      backgroundColor: "#290036",
    },
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textTransform: "none",
  },
}));

function Home() {
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#7f10a1"} loading={loading} size={50} />
        </div>
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
        >
          <div className={classes.particle}>
            <Particle />
          </div>
          <Grid item lg={12} xs={12} className={classes.title}>
            <motion.div
              initial={{ y: "-1000px" }}
              animate={{ y: "0px" }}
              transition={{
                type: "tween",

                duration: 2,
              }}
            >
              <Typography
                className={classes.typography}
                display="inline"
                variant="h3"
              >
                Hi!
                <motion.div
                  initial={{ x: "-10px" }}
                  animate={{ x: "0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    repeat: Infinity,
                    duration: 1,
                  }}
                >
                  👋
                </motion.div>{" "}
                I'm Panagiotis Mentzelopoulos,
                <Typewriter
                  options={{
                    strings: [
                      "An IT Professional",
                      "Software Engineer",
                      "Full-Stack Developer",
                      "Front End Developer",
                      "Back End Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </motion.div>
          </Grid>

          <Grid item lg={6} xs={12} className={classes.title2}>
            <motion.div
              initial={{ y: "1000px" }}
              animate={{ y: "0px" }}
              transition={{
                type: "tween",

                duration: 2,
              }}
            >
              <Typography
                className={classes.typography}
                display="inline"
                variant="h4"
              >
                Highly self-motivated and goal-oriented IT professional
                committed to pursuing a career change in Software Engineering.
                Offers a 2-year track record demonstrating strong analytical and
                problem-solving skills, leadership, mentoring and providing
                solutions as a Senior IT Support Engineer. Proven ability in
                building scalable and secure full stack applications featuring
                technologies such as HTML, CSS, JavaScript, React, NodeJS,
                RESTful APIs, Material UI and Git. Continuous and quick learner
                that keeps up with new technologies and trends.
              </Typography>
            </motion.div>
          </Grid>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            href="/about"
          >
            Learn More
          </Button>
          <Footer />
        </Grid>
      )}
    </div>
  );
}

export default Home;
