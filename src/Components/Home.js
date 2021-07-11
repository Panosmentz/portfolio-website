import React from "react";
import Particles from "./Particles3";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Dev from "../assets/dev.svg";
import app from "../assets/app.svg";
import portfolio from "../assets/portfolio.svg";
import avatar from "../assets/avatar.png";
import server from "../assets/server.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Home2 from "./Home2";

const useStyles = makeStyles(() => ({
  particlesjs: {
    width: "100%",
    height: "auto",
    backgroundColor: "#2a2829",
  },
  container: {
    marginTop: "200px",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "2em 3em",
    justifyContent: "center",
    justifyItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    color: "gray",
    fontFamily: "Amatic SC, cursive",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  bio: {},
  avatar: {
    display: "flex",
    justifyContent: "center",
  },
  text: {},
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.particlesjs}>
      <Particles />
      <Grid container className={classes.container}>
        <Grid item lg={12} xs={12} className={classes.typography}>
          <motion.div
            initial={{ y: "-1000px" }}
            animate={{ y: "0px" }}
            transition={{
              type: "tween",

              duration: 3,
            }}
          >
            <Typography display="inline" variant="h3">
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
                  strings: ["An IT Professional", "A Full-Stack developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </motion.div>
        </Grid>
        <Grid item lg={12} xs={12} className={classes.typography}>
          <motion.div
            initial={{ y: "1000px" }}
            animate={{ y: "0px" }}
            transition={{
              type: "tween",

              duration: 3,
            }}
          >
            <Typography display="inline" variant="h3">
              I hold a BSc in Computer Science, currently working as a Senior IT
              Support Engineer in Dublin. I am looking to make a career
              transition to a Software Engineering role as I've been building
              Full-Stack web applications while learning new technologies.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
